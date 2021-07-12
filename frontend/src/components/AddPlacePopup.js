import PopupWithForm from "./PopupWithForm";
import { useState } from "react";

function AddPlacePopup({ isOpen, onClose, onAddPlace }) {
  const [name, setName] = useState("");
  const [link, setLink] = useState("");

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleLinkChange(e) {
    setLink(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    onAddPlace({
      name: name,
      link: link,
    });

    setName("");
    setLink("");
  }

  return (
    <PopupWithForm
      title="Новое место"
      name="add-place"
      submitButtonTitle="Создать"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <input
        className="popup__input"
        id="image-name"
        name="image-name"
        type="text"
        onChange={handleNameChange}
        value={name}
        placeholder="Название"
        minLength="2"
        maxLength="30"
        required
      />
      <span className="image-name-error popup__input-error"></span>
      <input
        className="popup__input"
        id="image-link"
        name="image-link"
        type="url"
        onChange={handleLinkChange}
        value={link}
        placeholder="Ссылка на картинку"
        required
      />
      <span className="image-link-error popup__input-error"></span>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
