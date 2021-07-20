import { useState, React } from 'react';
import PropTypes from 'prop-types';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup({ isOpen, onClose, onAddPlace }) {
  const [name, setName] = useState('');
  const [link, setLink] = useState('');

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleLinkChange(e) {
    setLink(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    onAddPlace({
      name,
      link,
    });

    setName('');
    setLink('');
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
      <span className="image-name-error popup__input-error" />
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
      <span className="image-link-error popup__input-error" />
    </PopupWithForm>
  );
}

AddPlacePopup.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onAddPlace: PropTypes.func.isRequired,
};

export default AddPlacePopup;
