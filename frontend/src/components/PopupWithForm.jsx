/* eslint-disable jsx-a11y/control-has-associated-label */
import { React } from 'react';
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
  return (
    <section className={`popup ${isOpen && 'popup_opened'}`}>
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
