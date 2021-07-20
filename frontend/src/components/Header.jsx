/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable no-console */
import React from 'react';
import PropTypes from 'prop-types';
import logo from '../images/logo.svg';

function Header({
  handleClick, buttonName, loggedIn, email,
}) {
  return (
    <header className="header page__header">

      <img src={logo} alt="Логотип Место Россия" className="header__logo" />
      <div className="header__container">
        {loggedIn && <p className="header__email">{email}</p>}
        <button type="button" onClick={handleClick} className="button header__button">
          {buttonName}
        </button>
      </div>
      <button type="button" onClick={() => console.log('navbar')} className="button header__menu" />
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
