import { useEffect, React } from 'react';
import PropTypes from 'prop-types';
import PopupWithForm from './PopupWithForm';
import { useFormWithValidation } from '../hooks/useForm';

function AddPlacePopup({
  isOpen, onClose, onAddPlace, isSending,
}) {
  const {
    values, handleChange, resetForm, errors, isValid,
  } = useFormWithValidation();

  useEffect(() => {
    resetForm();
  }, [isOpen, resetForm]);

  function handleSubmit(e) {
    e.preventDefault();
    onAddPlace(values);
  }

  return (
    <PopupWithForm
      title="Новое место"
      name="add-place"
      submitButtonTitle={isSending ? 'Сохранение...' : 'Сохранить'}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      isDisabled={!isValid || isSending}
    >
      <input
        className="popup__input"
        id="image-name"
        name="name"
        type="text"
        onChange={handleChange}
        value={values.name || ''}
        placeholder="Название"
        minLength="2"
        maxLength="30"
        required
      />
      <span className="popup__input-error" id="image-name-error">{errors.name || ''}</span>
      <input
        className="popup__input"
        id="image-link"
        name="link"
        type="url"
        onChange={handleChange}
        value={values.link || ''}
        placeholder="Ссылка на картинку"
        required
      />
      <span className="popup__input-error" id="image-link-error">{errors.link || ''}</span>
    </PopupWithForm>
  );
}

AddPlacePopup.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onAddPlace: PropTypes.func.isRequired,
  isSending: PropTypes.bool.isRequired,
};

export default AddPlacePopup;
