/* eslint-disable jsx-a11y/control-has-associated-label */
import { useContext, React } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import CurrentUserContext from '../contexts/CurrentUserContext';
import Header from './Header';

function Main({
  onEditProfile,
  onAddPlace,
  onEditAvatar,
  onCardClick,
  cards,
  onCardLike,
  onCardDelete,
  handleLogout,
  loggedIn,
  email,
}) {
  const currentUser = useContext(CurrentUserContext);

  return (
    <>
      <Header
        handleClick={handleLogout}
        buttonName="Выйти"
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
              className="button button_type_edit-avatar"
              type="button"
            />
          </div>
          <div className="profile__info">
            <div className="profile__name-section">
              <h1 className="profile__name">{currentUser.name}</h1>
              <button
                onClick={onEditProfile}
                className="button button_type_edit-profile"
                type="button"
              />
            </div>
            <h2 className="profile__description">{currentUser.about}</h2>
          </div>
          <button
            onClick={onAddPlace}
            className="button button_type_add-card"
            type="button"
          />
        </section>
        <section className="elements">
          <ul className="elements__list">
            {
              cards.map((card) => (
                <Card
                  key={card._id}
                  // eslint-disable-next-line react/jsx-props-no-spreading
                  {...card}
                  onCardClick={onCardClick}
                  onCardLike={onCardLike}
                  onCardDelete={onCardDelete}
                />
              ))
            }
          </ul>
        </section>
      </main>
    </>
  );
}

Main.propTypes = {
  onEditProfile: PropTypes.func.isRequired,
  onAddPlace: PropTypes.func.isRequired,
  onEditAvatar: PropTypes.func.isRequired,
  onCardClick: PropTypes.func.isRequired,
  cards: PropTypes.arrayOf(PropTypes.object).isRequired,
  onCardLike: PropTypes.func.isRequired,
  onCardDelete: PropTypes.func.isRequired,
  handleLogout: PropTypes.func.isRequired,
  loggedIn: PropTypes.bool.isRequired,
  email: PropTypes.string.isRequired,
};

export default Main;
