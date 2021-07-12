import { useContext } from "react";
import Card from "./Card";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";
import Spinner from "./Spinner";
import Header from "./Header";

function Main({
  onEditProfile,
  onAddPlace,
  onEditAvatar,
  onCardClick,
  cards,
  isLoading,
  onCardLike,
  onCardDelete,
  handleLogout,
  loggedIn,
  email
}) {
  const currentUser = useContext(CurrentUserContext);

  return (
    <>
      <Header
        handleClick={handleLogout}
        buttonName={"Выйти"}
        loggedIn={loggedIn}
        email={email}
      />
      <main className="content page__content">
        <section className="profile">
          <div className="profile__avatar-container">
            <img
              className="profile__avatar"
              src={currentUser.avatar}
              alt="Аватар пользователя"
            />
            <button
              onClick={onEditAvatar}
              className="button button_type_change-avatar"
              type="button"
            ></button>
          </div>
          <div className="profile__info">
            <div className="profile__name-section">
              <h1 className="profile__name">{currentUser.name}</h1>
              <button
                onClick={onEditProfile}
                className="button button_type_edit-profile"
                type="button"
              ></button>
            </div>
            <h2 className="profile__description">{currentUser.about}</h2>
          </div>
          <button
            onClick={onAddPlace}
            className="button button_type_add-card"
            type="button"
          ></button>
        </section>
        <section className="elements">
          <ul className="elements__list">
            {isLoading ? (
              <Spinner />
            ) : (
              cards.map((card) => (
                <Card
                  key={card._id}
                  {...card}
                  onCardClick={onCardClick}
                  onCardLike={onCardLike}
                  onCardDelete={onCardDelete}
                />
              ))
            )}
          </ul>
        </section>
      </main>
    </>
  );
}
export default Main;
