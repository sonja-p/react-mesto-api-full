import { React, useEffect } from 'react';
import PropTypes from 'prop-types';

function PopupWithForm({
  name,
  title,
  children,
  submitButtonTitle,
  isOpen,
  onClose,
  onSubmit,
}) {
  useEffect(() => {
    if (!isOpen) return;
    const handleEscapeClose = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    document.addEventListener('keydown', handleEscapeClose);
    // eslint-disable-next-line consistent-return
    return () => {
      document.removeEventListener('keydown', handleEscapeClose);
    };
  }, [isOpen, onClose]);

  const handleOverlayClose = (event) => {
    if (event.target === event.currentTarget && isOpen) {
      onClose();
    }
  };

  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <section
      className={`popup ${isOpen && 'popup_opened'}`}
      onMouseDown={handleOverlayClose}
    >
      <form
        className="popup__container"
        name={name}
        onSubmit={onSubmit}
      >
        <h2 className="popup__title">{title}</h2>
        <>{children}</>
        <button
          onClick={onClose}
          className="button button_type_close"
          type="button"
          aria-label="Close"
        />
        <button className="button popup__save-button" type="submit">
          {submitButtonTitle}
        </button>
      </form>
    </section>
  );
}

PopupWithForm.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  children: PropTypes.array,
  submitButtonTitle: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func,
};

PopupWithForm.defaultProps = {
  children: undefined,
  onSubmit: undefined,
};

export default PopupWithForm;
