/* eslint-disable jsx-a11y/control-has-associated-label */
import { React, useEffect } from 'react';
import PropTypes from 'prop-types';

function ImagePopup({ card, onClose, isOpen }) {
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
      className={`popup popup_type_view ${isOpen && 'popup_opened'}`}
      onMouseDown={handleOverlayClose}
    >
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
