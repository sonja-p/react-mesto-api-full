import { useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";

function Card(props) {
  const currentUser = useContext(CurrentUserContext);
  const isOwn = props.owner._id === currentUser._id;

  const cardDeleteButtonClassName = `button ${
    isOwn ? "button_type_delete-card" : "button_type_delete-card_disable"
  }`;

  const isLiked = props.likes.some((i) => i._id === currentUser._id);

  const cardLikeButtonClassName = `button ${
    isLiked ? "button_type_like_active" : "button_type_like"
  }`;

  function handleClick() {
    props.onCardClick(props);
  }

  function handleDeleteClick() {
    props.onCardDelete(props);
  }

  function handleLikeClick() {
    props.onCardLike(props);
  }

  return (
    <li className="element">
      <img
        src={props.link}
        alt={props.name}
        className="element__image"
        onClick={handleClick}
      />
      <h3 className="element__title">{props.name}</h3>
      <button
        className={cardLikeButtonClassName}
        type="button"
        onClick={handleLikeClick}
      ></button>
      <h3 className="element__likes">{props.likes.length}</h3>
      <button
        className={cardDeleteButtonClassName}
        type="button"
        onClick={handleDeleteClick}
      ></button>
    </li>
  );
}
export default Card;
