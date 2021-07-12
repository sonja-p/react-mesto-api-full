import { useState, useContext, useEffect } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";
import PopupWithForm from "./PopupWithForm";

function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const currentUser = useContext(CurrentUserContext);

  useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser, isOpen]);

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleDescriptionChange(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser({
      name,
      about: description,
    });
  }

  return (
    <PopupWithForm
      title="Редактировать профиль"
      name="edit-profile"
      submitButtonTitle="Сохранить"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <input
        className="popup__input"
        onChange={handleNameChange}
        id="profile-name"
        name="profile-name"
        type="text"
        value={name || ""}
        minLength="2"
        maxLength="40"
        required
      />
      <span className="profile-name-error popup__input-error"></span>
      <input
        className="popup__input"
        onChange={handleDescriptionChange}
        id="description"
        name="description"
        type="text"
        value={description || ""}
        minLength="2"
        maxLength="200"
        required
      />
      <span className="description-error popup__input-error"></span>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
