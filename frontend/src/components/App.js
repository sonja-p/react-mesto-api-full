import React, { useState, useEffect } from "react";
import { Route, Switch, useHistory, Redirect } from "react-router-dom";
import Register from "./Register";
import InfoTooltip from "./InfoTooltip";
import ProtectedRoute from "./ProtectedRoute";
import Login from "./Login";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";
import api from "../utils/api";
import auth from "../utils/auth";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";
import Spinner from "./Spinner";

function App() {
  const [currentUser, setCurrentUser] = useState({
    name: "",
    about: "",
    avatar: "",
    _id: "",
  });
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isRemoveCardPopupOpen, setIsRemoveCardPopupOpen] = useState(false);
  const [isInfoTooltipPopupOpen, setIsInfoTooltipPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  // устанавливаем значение null для отображения спиннера при загрузке сайта
  const [loggedIn, setLoggedIn] = useState(null);
  const [userData, setUserData] = useState({
    _id: "",
    email: "",
  });
  const [message, setMessage] = useState({ text: "", type: "" });

  const history = useHistory();

  const handleError = (error) => {
    console.error(error);
  };

  useEffect(() => {
    if (loggedIn) {
      history.push("/");
    }
  }, [loggedIn]);

  const handleRegister = ({ password, email }) => {
    auth
      .register(password, email)
      .then((data) => {
        const { _id, email } = data.data;
        setUserData({ _id, email });

        setIsInfoTooltipPopupOpen(true);
        setMessage({
          text: "Вы успешно зарегистрировались!",
          type: "success",
        });
      })
      .then(() => history.push("/"))
      .catch((error) => {
        handleError(error);
        if (error) {
          setIsInfoTooltipPopupOpen(true);
          setMessage({
            text: "Что-то пошло не так! Попробуйте ещё раз.",
            type: "fail",
          });
        }
      });
  };

  const handleLogin = ({ password, email }) => {
    auth
      .authorize(password, email)
      .then((data) => {
        const { token } = data;
        localStorage.setItem("token", token);
        setLoggedIn(true);
        setUserData({ email });
      })
      .catch(handleError);
  };

  const handleLogout = () => {
    setUserData({
      _id: "",
      email: "",
    });
    setLoggedIn(null);
    localStorage.removeItem("token");
  };

  const handleSignIn = () => {
    history.push("/sign-in");
  };

  const handleSignUp = () => {
    history.push("/sign-up");
  };

  const checkToken = () => {
    const token = localStorage.getItem("token");
    if (token) {
      auth
        .getContent(token)
        .then((data) => {
          const { _id, email } = data.data;
          setUserData({ _id, email });
          setLoggedIn(true);
        })
        .catch(handleError);
    } else {
      setLoggedIn(false);
    }
  };

  useEffect(() => {
    checkToken();
  }, [loggedIn]);

  useEffect(() => {
    api
      .getUserInfo()
      .then((data) => {
        setCurrentUser(data);
      })
      .catch((err) => {
        console.log("Ошибка при загрузке информации пользователя", err.message);
      });
  }, []);

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
  };

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  };

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
  };

  const handleRemoveCardClick = () => {
    setIsRemoveCardPopupOpen(true);
  };

  const closeAllPopups = () => {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsRemoveCardPopupOpen(false);
    setIsImagePopupOpen(false);
    setIsInfoTooltipPopupOpen(false);
  };

  const handleCardClick = (card) => {
    setSelectedCard(card);
    setIsImagePopupOpen(true);
  };

  const handleUpdateUser = (newProfileData) => {
    api
      .setUserInfo(newProfileData)
      .then((data) => {
        setCurrentUser(data);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(
          "Ошибка при загрузке новой информации пользователя",
          err.message
        );
      });
  };

  const handleUpdateAvatar = (link) => {
    api
      .setUserAvatar(link)
      .then((data) => {
        setCurrentUser(data);
        closeAllPopups();
      })
      .catch((err) => {
        console.log("Ошибка при загрузке аватара пользователя", err.message);
      });
  };

  const [cards, setCards] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    api
      .getInitialCards()
      .then((data) => {
        setCards(data);
      })
      .catch((err) => {
        console.log("Ошибка при загрузке карточек", err.message);
      })
      .finally(() => setIsLoading(false));
  }, []);

  function handleCardLike(card) {
    const isLiked = card.likes.some((i) => i._id === currentUser._id);

    (!isLiked ? api.addLike(card._id) : api.deleteLike(card._id))
      .then((newCard) => {
        setCards((state) =>
          state.map((c) => (c._id === card._id ? newCard : c))
        );
      })
      .catch((err) => {
        console.log("Ошибка при постановке лайка", err.message);
      });
  }

  function handleCardDelete(card) {
    api
      .handleDeleteCard(card._id)
      .then(() => {
        setCards((state) => state.filter((c) => c._id !== card._id));
      })
      .catch((err) => {
        console.log("Ошибка при удалении карточки", err.message);
      });
  }

  function handleAddPlace(card) {
    api
      .addNewCard(card)
      .then((newCard) => {
        setCards((cards) => [newCard, ...cards]);
        closeAllPopups();
      })
      .catch((err) => {
        console.log("Ошибка при загрузке нового места", err.message);
      });
  }

  if (loggedIn === null) {
    return <Spinner />;
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="App">
        <div className="page__container">
          <Switch>
            <Route path="/sign-up">
              {loggedIn && <Redirect to="/" />}
              <Register
                handleRegister={handleRegister}
                loggedIn={loggedIn}
                handleSignIn={handleSignIn}
              />
            </Route>
            <Route path="/sign-in">
              {loggedIn && <Redirect to="/" />}
              <Login handleLogin={handleLogin} handleSignUp={handleSignUp} />
            </Route>
            <ProtectedRoute
              path="/"
              loggedIn={loggedIn}
              component={Main}
              onAddPlace={handleAddPlaceClick}
              onEditProfile={handleEditProfileClick}
              onEditAvatar={handleEditAvatarClick}
              onCardClick={handleCardClick}
              onRemoveCard={handleRemoveCardClick}
              cards={cards}
              isLoading={isLoading}
              onCardLike={handleCardLike}
              onCardDelete={handleCardDelete}
              handleLogout={handleLogout}
              loggedIn={loggedIn}
              email={userData.email}
            ></ProtectedRoute>
          </Switch>
          <Footer />
        </div>

        <InfoTooltip
          isOpen={isInfoTooltipPopupOpen}
          onClose={closeAllPopups}
          message={message}
        />
        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
        />
        <AddPlacePopup
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          onAddPlace={handleAddPlace}
        />
        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
        />
        <PopupWithForm
          title="Вы уверены?"
          name="delete"
          submitButtonTitle="Да"
          isOpen={isRemoveCardPopupOpen}
          onClose={closeAllPopups}
        />
        <ImagePopup
          card={selectedCard}
          isOpen={isImagePopupOpen}
          onClose={closeAllPopups}
        />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
