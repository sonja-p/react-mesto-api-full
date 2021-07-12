function InfoTooltip({ isOpen, onClose, message }) {
  return (
    <section className={`popup ${isOpen && "popup_opened"}`}>
      <div className="popup__container">
        <div
          className={`popup__tooltip-icon popup__tooltip-icon_type_${message.type}`}
        ></div>
        <h2 className="popup__title popup__title_padding-bottom_min popup__title_align_center">
          {message.text}
        </h2>
        <button
          onClick={onClose}
          className="button button_type_close"
          type="reset"
        ></button>
      </div>
    </section>
  );
}

export default InfoTooltip;
