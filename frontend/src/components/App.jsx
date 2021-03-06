/* eslint-disable no-undef */
/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import {
  Route, Switch, useHistory, Redirect,
} from 'react-router-dom';
import Register from './Register';
import InfoTooltip from './InfoTooltip';
import ProtectedRoute from './ProtectedRoute';
import Login from './Login';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
import api from '../utils/api';
import auth from '../utils/auth';
import CurrentUserContext from '../contexts/CurrentUserContext';

function App() {
  const [currentUser, setCurrentUser] = useState({
    name: '',
    about: '',
    avatar: '',
    _id: '',
  });
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isRemoveCardPopupOpen, setIsRemoveCardPopupOpen] = useState(false);
  const [isInfoTooltipPopupOpen, setIsInfoTooltipPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [userData, setUserData] = useState({
    _id: '',
    email: '',
  });
  const [message, setMessage] = useState({ text: '', type: '' });
  const [isCardSending, setIsCardSending] = useState(false);
  const [cardForDelete, setCardForDelete] = useState(null);

  const [cards, setCards] = useState([]);

  const history = useHistory();

  const handleError = (error) => {
    console.error(error);
  };

  useEffect(() => {
    if (loggedIn) {
      history.push('/');
    }
  }, [loggedIn]);

  const handleRegister = ({ password, email }) => {
    auth
      .register(password, email)
      .then((data) => {
        const { _id, userEmail } = data;
        setUserData({ _id, userEmail });

        setIsInfoTooltipPopupOpen(true);
        setMessage({
          text: '???? ?????????????? ????????????????????????????????????!',
          type: 'success',
        });
      })
      .then(() => history.push('/'))
      .catch((error) => {
        handleError(error);
        if (error) {
          setIsInfoTooltipPopupOpen(true);
          setMessage({
            text: '??????-???? ?????????? ???? ??????! ???????????????????? ?????? ??????.',
            type: 'fail',
          });
        }
      });
  };

  const handleLogin = ({ password, email }) => {
    auth
      .authorize(password, email)
      .then((user) => {
        setUserData({ email });
        setCurrentUser(user);
        setLoggedIn(true);
      })
      .catch(handleError);
  };

  const handleSignIn = () => {
    history.push('/sign-in');
  };

  const handleSignUp = () => {
    history.push('/sign-up');
  };

  useEffect(() => {
    api
      .getUserInfo()
      .then((user) => {
        setUserData({ email: user.email });
        setCurrentUser(user);
        setLoggedIn(true);
      })
      .catch((err) => {
        console.log('???????????? ?????? ???????????????? ???????????????????? ????????????????????????', err.message);
      });
  }, []);

  useEffect(() => {
    if (loggedIn) {
      api
        .getInitialCards()
        .then((data) => {
          setCards(data.reverse());
        })
        .catch((err) => {
          console.log('???????????? ?????? ???????????????? ????????????????', err.message);
        });
    }
  }, [loggedIn]);

  const handleLogout = () => {
    auth
      .logout()
      .then(() => {
        history.push('/sign-in');
        setLoggedIn(false);
        setCurrentUser({
          name: '',
          about: '',
          avatar: '',
          _id: '',
        });
      });
  };

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
  };

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  };

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
  };

  const handleCardDeleteRequest = (card) => {
    setCardForDelete(card);
    setIsRemoveCardPopupOpen(true);
  };

  const closeAllPopups = () => {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsRemoveCardPopupOpen(false);
    setIsImagePopupOpen(false);
    setIsInfoTooltipPopupOpen(false);
    setCardForDelete(undefined);
  };

  const handleCardClick = (card) => {
    setSelectedCard(card);
    setIsImagePopupOpen(true);
  };

  const [isUserSending, setIsUserSending] = useState(false);
  const handleUpdateUser = (newProfileData) => {
    setIsUserSending(true);
    api
      .setUserInfo(newProfileData)
      .then((user) => {
        setCurrentUser(user);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(
          '???????????? ?????? ???????????????? ?????????? ???????????????????? ????????????????????????',
          err.message,
        );
      })
      .finally(() => setIsUserSending(false));
  };

  const handleUpdateAvatar = (link) => {
    api
      .setUserAvatar(link)
      .then((user) => {
        setCurrentUser(user);
        closeAllPopups();
      })
      .catch((err) => {
        console.log('???????????? ?????? ???????????????? ?????????????? ????????????????????????', err.message);
      });
  };

  function handleCardLike(card) {
    const isLiked = card.likes.some((i) => i === currentUser._id);

    (!isLiked ? api.addLike(card._id) : api.deleteLike(card._id))
      .then((newCard) => {
        setCards((state) => state.map((c) => (c._id === card._id ? newCard : c)));
      })
      .catch((err) => {
        console.log('???????????? ?????? ???????????????????? ??????????', err.message);
      });
  }

  function handleCardDelete(evt) {
    evt.preventDefault();
    api
      .handleDeleteCard(cardForDelete._id)
      .then(() => {
        setCards((state) => state.filter((c) => c._id !== cardForDelete._id));
        closeAllPopups();
      })
      .catch((err) => {
        console.log('???????????? ?????? ???????????????? ????????????????', err.message);
      });
  }

  function handleAddPlace(card) {
    setIsCardSending(true);
    api
      .addNewCard(card)
      .then((newCard) => {
        setCards((allCards) => [newCard, ...allCards]);
        closeAllPopups();
      })
      .catch((err) => {
        console.log('???????????? ?????? ???????????????? ???????????? ??????????', err.message);
      })
      .finally(() => setIsCardSending(false));
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
              cards={cards}
              onCardLike={handleCardLike}
              onCardDelete={handleCardDeleteRequest}
              handleLogout={handleLogout}
              email={userData.email}
            />
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
          isSending={isUserSending}
        />
        <AddPlacePopup
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          onAddPlace={handleAddPlace}
          isSending={isCardSending}
        />
        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
        />
        <PopupWithForm
          title="???? ???????????????"
          name="delete"
          submitButtonTitle="????"
          isOpen={isRemoveCardPopupOpen}
          onSubmit={handleCardDelete}
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
