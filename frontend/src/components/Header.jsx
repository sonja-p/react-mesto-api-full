/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable no-console */
import { React, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import PropTypes from 'prop-types';
import logo from '../images/logo.svg';

function Header({
  handleClick, buttonName, loggedIn, email,
}) {
  const [isMenuOpen, setMenuOpen] = useState(false);

  function toggleMenu() {
    setMenuOpen(!isMenuOpen);
  }

  const isMain = useRouteMatch({ path: '/', exact: true });

  return (
    <header
      className={`header page__header
         ${isMenuOpen ? 'header_menu-open' : ''}
         ${isMain ? 'header_page-main' : ''}`}
    >

      <img src={logo} alt="Логотип Место Россия" className="header__logo" />
      {loggedIn ? (
        <>
          <button type="button" onClick={toggleMenu} className="button header__menu" />
          <div className="header__container">
            <p className="header__email">{email}</p>
            <button type="button" onClick={handleClick} className="button header__button">
              {buttonName}
            </button>
          </div>
        </>
      ) : (
        <button type="button" onClick={handleClick} className="button header__button">
          {buttonName}
        </button>
      )}
    </header>
  );
}

Header.propTypes = {
  handleClick: PropTypes.func.isRequired,
  buttonName: PropTypes.string.isRequired,
  loggedIn: PropTypes.bool,
  // eslint-disable-next-line react/require-default-props
  email: PropTypes.string,
};

Header.defaultProps = {
  loggedIn: undefined,
};

export default Header;
