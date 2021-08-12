import React, {
  useContext, useEffect,
} from 'react';
import PropTypes from 'prop-types';
import CurrentUserContext from '../contexts/CurrentUserContext';
import PopupWithForm from './PopupWithForm';
import { useFormWithValidation } from '../hooks/useForm';

function EditProfilePopup({
  isOpen, onClose, onUpdateUser, isSending,
}) {
  const currentUser = useContext(CurrentUserContext);

  const {
    values, handleChange, resetForm, errors, isValid,
  } = useFormWithValidation();

  useEffect(() => {
    if (currentUser) {
      resetForm(currentUser, {}, true);
    }
  }, [currentUser, resetForm]);

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser({ name: values.name, about: values.about });
  }

  return (
    <PopupWithForm
      title="Редактировать профиль"
      name="edit-profile"
      submitButtonTitle={isSending ? 'Сохранение...' : 'Сохранить'}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      isDisabled={!isValid || isSending}
    >
      <input
        className="popup__input"
        onChange={handleChange}
        id="profile-name"
        name="name"
        type="text"
        value={values.name || ''}
        minLength="2"
        maxLength="40"
        required
      />
      <span className="popup__input-error" id="profile-name-error">{errors.name || ''}</span>
      <input
        className="popup__input"
        onChange={handleChange}
        id="description"
        name="about"
        type="text"
        value={values.about || ''}
        minLength="2"
        maxLength="200"
        required
      />
      <span className="popup__input-error" id="profile-description-error">
        {errors.about || ''}
      </span>
    </PopupWithForm>
  );
}

EditProfilePopup.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onUpdateUser: PropTypes.func.isRequired,
  isSending: PropTypes.bool.isRequired,
};

export default EditProfilePopup;
