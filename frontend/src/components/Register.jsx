import { Link } from 'react-router-dom';
import { useState, React } from 'react';
import PropTypes from 'prop-types';
import Header from './Header';

const Register = ({ handleRegister, loggedIn, handleSignIn }) => {
  const [data, setData] = useState({
    password: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { password, email } = data;
    handleRegister({ password, email });
  };

  return (
    <>
      <Header
        handleClick={handleSignIn}
        buttonName="Войти"
        loggedIn={loggedIn}
      />
      <div className="register page__register">
        <h2 className="register__title">Регистрация</h2>
        <form className="register__form" onSubmit={handleSubmit}>
          <input
            className="register__input"
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            onChange={handleChange}
            value={data.email || ''}
            required
          />
          <input
            className="register__input"
            id="password"
            name="password"
            type="password"
            placeholder="Пароль"
            onChange={handleChange}
            value={data.password || ''}
            autoComplete="on"
            required
          />
          <button className="button register__button" type="submit">
            Зарегистрироваться
          </button>
          <div className="register__signin">
            <p>Уже зарегистрированы?</p>
            <Link to="login" className="register__login-link">
              Войти
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

Register.propTypes = {
  handleRegister: PropTypes.func.isRequired,
  loggedIn: PropTypes.bool.isRequired,
  handleSignIn: PropTypes.func.isRequired,
};

export default Register;
