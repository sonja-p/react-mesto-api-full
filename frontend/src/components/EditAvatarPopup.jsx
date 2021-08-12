import { useEffect, React } from 'react';
import PropTypes from 'prop-types';
import PopupWithForm from './PopupWithForm';
import { useFormWithValidation } from '../hooks/useForm';

function EditAvatarPopup({
  isOpen, onClose, onUpdateAvatar, isSending,
}) {
  const {
    values, handleChange, resetForm, errors, isValid,
  } = useFormWithValidation();

  useEffect(() => {
    resetForm({});
  }, [isOpen, resetForm]);

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateAvatar(values.avatar);
  }

  return (
    <PopupWithForm
      title="Обновить аватар"
      name="edit-avatar"
      submitButtonTitle={isSending ? 'Сохранение...' : 'Сохранить'}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      isDisabled={!isValid || isSending}
    >
      <input
        className="popup__input"
        onChange={handleChange}
        id="avatar-link"
        name="avatar"
        type="url"
        placeholder="Ссылка на картинку"
        required
      />
      <span className="popup__input-error" id="avatar-link-error">{errors.avatar || ''}</span>
    </PopupWithForm>
  );
}

EditAvatarPopup.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onUpdateAvatar: PropTypes.func.isRequired,
  isSending: PropTypes.bool,
};

EditAvatarPopup.defaultProps = {
  isSending: undefined,
};

export default EditAvatarPopup;
