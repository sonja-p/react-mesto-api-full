/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useContext, React } from 'react';
import PropTypes from 'prop-types';
import CurrentUserContext from '../contexts/CurrentUserContext';

function Card({
  owner, likes, link, name, onCardClick, onCardDelete, onCardLike,
}) {
  const currentUser = useContext(CurrentUserContext);
  const isOwn = owner._id === currentUser._id;

  const cardDeleteButtonClassName = `button ${
    isOwn ? 'button_type_delete-card' : 'button_type_delete-card_disable'
  }`;

  const isLiked = likes.some((i) => i._id === currentUser._id);

  const cardLikeButtonClassName = `button ${
    isLiked ? 'button_type_like_active' : 'button_type_like'
  }`;

  function handleClick() {
    onCardClick();
  }

  function handleDeleteClick() {
    onCardDelete();
  }

  function handleLikeClick() {
    onCardLike();
  }

  return (
    <li className="element">
      <img
        src={link}
        alt={name}
        className="element__image"
        onClick={handleClick}
      />
      <h3 className="element__title">{name}</h3>
      <button
        className={cardLikeButtonClassName}
        type="button"
        onClick={handleLikeClick}
      />
      <h3 className="element__likes">{likes.length}</h3>
      <button
        className={cardDeleteButtonClassName}
        type="button"
        onClick={handleDeleteClick}
      />
    </li>
  );
}

Card.propTypes = {
  owner: PropTypes.shape({
    _id: PropTypes.string,
  }).isRequired,
  likes: PropTypes.arrayOf(PropTypes.number).isRequired,
  link: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onCardClick: PropTypes.func.isRequired,
  onCardDelete: PropTypes.func.isRequired,
  onCardLike: PropTypes.func.isRequired,
};

export default Card;
