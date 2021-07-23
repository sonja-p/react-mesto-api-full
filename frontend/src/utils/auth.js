import reqOptions from './constants';

class Auth {
  constructor(options) {
    this._url = options.baseUrl;
    this._headers = options.headers;
  }

  _checkResponse = (response) => (response.ok
    ? response.json()
    : Promise.reject(new Error(`Ошибка: ${response.status}`)));

  register = (password, email) => fetch(`${this._url}/signup`, {
    headers: this._headers,
    method: 'POST',
    credentials: 'include',
    body: JSON.stringify({
      password: `${password}`,
      email: `${email}`,
    }),
  }).then((response) => this._checkResponse(response))

  authorize(password, email) {
    return fetch(`${this._url}/signin`, {
      headers: this._headers,
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify({
        password: `${password}`,
        email: `${email}`,
      }),
    }).then((response) => this._checkResponse(response));
  }

  logout = () => fetch(`${this._url}/logout`, {
    headers: this._headers,
    credentials: 'include',
  }).then((response) => this._checkResponse(response))

  getContent = () => fetch(`${this._url}/users/me`, {
    headers: this._headers,
    method: 'GET',
    credentials: 'include',
  }).then((response) => this._checkResponse(response))
}

const auth = new Auth(reqOptions);

export default auth;
