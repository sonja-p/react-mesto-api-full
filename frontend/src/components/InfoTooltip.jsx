/* eslint-disable jsx-a11y/control-has-associated-label */
import { React } from 'react';
import PropTypes from 'prop-types';

function InfoTooltip({ isOpen, onClose, message }) {
  return (
    <section className={`popup ${isOpen && 'popup_opened'}`}>
      <div className="popup__container">
        <div
          className={`popup__tooltip-icon popup__tooltip-icon_type_${message.type}`}
        />
        <h2 className="popup__title popup__title_padding-bottom_min popup__title_align_center">
          {message.text}
        </h2>
        <button
          onClick={onClose}
          className="button button_type_close"
          type="button"
        />
      </div>
    </section>
  );
}

InfoTooltip.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  message: PropTypes.object.isRequired,
};

export default InfoTooltip;
