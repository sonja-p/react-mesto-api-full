function ImagePopup({ card, onClose, isOpen }) {
  return (
    <section className={`popup popup_type_view ${isOpen && "popup_opened"}`}>
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
          type="reset"
        ></button>
      </div>
    </section>
  );
}

export default ImagePopup;