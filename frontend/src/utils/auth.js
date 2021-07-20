class Auth {
  constructor(options) {
    this._url = options.baseUrl;
  }

  _checkResponse = (response) => (response.ok
    ? response.json()
    : Promise.reject(new Error(`Ошибка: ${response.status}`)));

  register = (password, email) => fetch(`${this._url}/signup`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      password: `${password}`,
      email: `${email}`,
    }),
  }).then((this._checkResponse))

  authorize(password, email) {
    return fetch(`${this._url}/signin`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        password: `${password}`,
        email: `${email}`,
      }),
    }).then(this._checkResponse);
  }

  getContent = () => fetch(`${this._url}/users/me`, {
    method: 'GET',
    credentials: 'include',
  }).then(this._checkResponse)
}

const options = {
  baseUrl: 'https://api.puolukka.nomoredomains.rocks',
};

const auth = new Auth(options);

export default auth;
