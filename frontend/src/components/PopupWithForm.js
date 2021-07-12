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
    <section className={`popup ${isOpen && "popup_opened"}`}>
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
          type="reset"
        ></button>
        <button className="button popup__save-button" type="submit">
          {submitButtonTitle}
        </button>
      </form>
    </section>
  );
}

export default PopupWithForm;
