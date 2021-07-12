import logo from "../images/logo.svg";

function Header({ handleClick, buttonName, loggedIn, email }) {
  return (
    <header className="header page__header">
      
      <img src={logo} alt="Логотип Место Россия" className="header__logo" />
      <div className="header__container">
        {loggedIn && <p className="header__email">{email}</p>}
        <button onClick={handleClick} className="button header__button">
          {buttonName}
        </button>
      </div>
      <button onClick={() => console.log('navbar')} className="button header__menu"></button>
    </header>
  );
}

export default Header;
