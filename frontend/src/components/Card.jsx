/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useContext, React } from 'react';
import PropTypes from 'prop-types';
import CurrentUserContext from '../contexts/CurrentUserContext';

function Card(props) {
  const {
    owner, likes, link, name, onCardClick, onCardDelete, onCardLike,
  } = props;
  const currentUser = useContext(CurrentUserContext);
  const isOwn = owner === currentUser._id;

  const cardDeleteButtonClassName = `button ${
    isOwn ? 'button_type_delete-card' : 'button_type_delete-card_disable'
  }`;

  const isLiked = likes.some((i) => i === currentUser._id);

  const cardLikeButtonClassName = `button ${
    isLiked ? 'button_type_like_active' : 'button_type_like'
  }`;

  function handleClick() {
    onCardClick(props);
  }

  function handleDeleteClick() {
    onCardDelete(props);
  }

  function handleLikeClick() {
    onCardLike(props);
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
  owner: PropTypes.string.isRequired,
  likes: PropTypes.arrayOf(PropTypes.string).isRequired,
  link: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onCardClick: PropTypes.func.isRequired,
  onCardDelete: PropTypes.func.isRequired,
  onCardLike: PropTypes.func.isRequired,
};

export default Card;
