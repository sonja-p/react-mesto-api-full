import { useRef } from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  const avatarRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateAvatar(avatarRef.current.value);
    avatarRef.current.value = "";
  }

  return (
    <PopupWithForm
      title="Обновить аватар"
      name="edit-avatar"
      submitButtonTitle="Сохранить"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <input
        className="popup__input"
        ref={avatarRef}
        id="avatar-link"
        name="avatar-link"
        type="url"
        placeholder="Ссылка на картинку"
        required
      />
      <span className="avatar-link-error popup__input-error"></span>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
