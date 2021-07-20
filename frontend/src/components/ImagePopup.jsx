/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import PropTypes from 'prop-types';

function ImagePopup({ card, onClose, isOpen }) {
  return (
    <section className={`popup popup_type_view ${isOpen && 'popup_opened'}`}>
      <div className="popup__view">
        <img
          src={card.link}
          alt={`увеличенное изображение ${card.name}`}
          className="popup__image"
        />
        <h3 className="popup__image-title">{card.name}</h3>
        <button
          onClick={onClose}
          className="button button_type_close"
          type="button"
        />
      </div>
    </section>
  );
}

ImagePopup.propTypes = {
  card: PropTypes.shape({
    name: PropTypes.string,
    link: PropTypes.string,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

export default ImagePopup;
