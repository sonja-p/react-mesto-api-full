import { useState, React } from 'react';
import PropTypes from 'prop-types';
import Header from './Header';

const Login = ({ handleLogin, handleSignUp }) => {
  const [data, setData] = useState({
    email: '',
    password: '',
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
    if (!data.email || !data.password) {
      return;
    }
    const { password, email } = data;
    handleLogin({ password, email });
  };

  return (
    <>
      <Header handleClick={handleSignUp} buttonName="Регистрация" />
      <div className="register page__register">
        <h2 className="register__title">Вход</h2>
        <form className="register__form" onSubmit={handleSubmit}>
          <input
            className="register__input"
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            value={data.email || ''}
            onChange={handleChange}
            required
          />
          <input
            className="register__input"
            id="password"
            name="password"
            type="password"
            placeholder="Пароль"
            value={data.password || ''}
            onChange={handleChange}
            autoComplete="on"
            required
          />
          <button className="button register__button" type="submit">
            Войти
          </button>
        </form>
      </div>
    </>
  );
};

Login.propTypes = {
  handleLogin: PropTypes.func.isRequired,
  handleSignUp: PropTypes.func.isRequired,
};

export default Login;
