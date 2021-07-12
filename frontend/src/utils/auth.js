class Auth {
  constructor(options) {
    this._url = options.baseUrl;
    this._token = options.token;
  }

  _checkResponse = (response) =>
    response.ok
      ? response.json()
      : Promise.reject(`Ошибка: ${response.status}`);

  register = (password, email) => {
    return fetch(`${this._url}/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        password: `${password}`,
        email: `${email}`,
      }),
    }).then(this._checkResponse);
  };

  authorize = (password, email) => {
    return fetch(`${this._url}/signin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        password: `${password}`,
        email: `${email}`,
      }),
    }).then(this._checkResponse);
  };

  getContent = (token) => {
    return fetch(`${this._url}/users/me`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }).then(this._checkResponse);
  };
}

const options = {
  baseUrl: "https://auth.nomoreparties.co",
};

const auth = new Auth(options);

export default auth;
