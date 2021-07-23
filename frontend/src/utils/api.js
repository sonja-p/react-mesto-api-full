import reqOptions from './constants';

class Api {
  constructor(options) {
    this._url = options.baseUrl;
    this._headers = options.headers;
  }

  _parseResponse = (res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(new Error(`Ошибка: ${res.status}`));
  }

  getUserInfo() {
    return fetch(`${this._url}/users/me`, {
      headers: this._headers,
      credentials: 'include',
    })
      .then((res) => this._parseResponse(res));
  }

  getInitialCards() {
    return fetch(`${this._url}/cards`, {
      headers: this._headers,
      credentials: 'include',
    })
      .then((res) => this._parseResponse(res));
  }

  setUserInfo(data) {
    return fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      credentials: 'include',
      headers: this._headers,
      // в теле — JSON с двумя свойствами — name и about.
      // Значениями этих свойств должны быть обновлённые данные пользователя
      body: JSON.stringify(data),
    })
      .then((res) => this._parseResponse(res));
  }

  addNewCard(inputData) {
    return fetch(`${this._url}/cards`, {
      method: 'POST',
      credentials: 'include',
      headers: this._headers,
      body: JSON.stringify({
        name: inputData.name,
        link: inputData.link,
      }),
    })
      .then((res) => this._parseResponse(res));
  }

  getCardLikes() {
    return fetch(`${this._url}/cards`, {
      headers: this._headers,
      credentials: 'include',
      body: JSON.stringify({
        likes: [],
      }),
    })
      .then((res) => this._parseResponse(res));
  }

  handleDeleteCard(id) {
    // Вместо cardId в URL нужно подставить свойство _id соответствующей карточки.
    return fetch(`${this._url}/cards/${id}`, {
      headers: this._headers,
      method: 'DELETE',
      credentials: 'include',
    })
      .then((res) => this._parseResponse(res));
  }

  addLike(id) {
    // Вместо cardId в URL нужно подставить свойство _id соответствующей карточки.
    return fetch(`${this._url}/cards/likes/${id}`, {
      headers: this._headers,
      method: 'PUT',
      credentials: 'include',
    })
      .then((res) => this._parseResponse(res));
  }

  deleteLike(id) {
    return fetch(`${this._url}/cards/likes/${id}`, {
      headers: this._headers,
      method: 'DELETE',
      credentials: 'include',
    })
      .then((res) => this._parseResponse(res));
  }

  setUserAvatar(link) {
    return fetch(`${this._url}/users/me/avatar`, {
      headers: this._headers,
      method: 'PATCH',
      credentials: 'include',
      body: JSON.stringify({
        avatar: `${link}`,
      }),
    })
      .then((res) => this._parseResponse(res));
  }
}

const api = new Api(reqOptions);

export default api;
