class Api {
    constructor(options) {
        this._url = options.baseUrl;
        this._headers = options.headers;
    }   

    _parseResponse(res) {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    }

    getUserInfo() {
        return fetch(`${this._url}/users/me`, {
            headers: this._headers
        })
        .then(res => this._parseResponse(res));
    }

    getInitialCards() {
        return fetch(`${this._url}/cards`, {
            headers: this._headers
        })
        .then(res => this._parseResponse(res));
    }


    setUserInfo(data) {
        return fetch(`${this._url}/users/me`, {
            method: 'PATCH',
            headers: this._headers,
            //в теле — JSON с двумя свойствами — name и about. Значениями этих свойств должны быть обновлённые данные пользователя
            body: JSON.stringify(data)
        })
        .then(res => this._parseResponse(res));
    }

    addNewCard(inputData) {
        return fetch(`${this._url}/cards`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({
                name: inputData.name,
                link: inputData.link
            })
        })
        .then(res => this._parseResponse(res));
    }

    getCardLikes() {
        return fetch(`${this._url}/cards`, {
            headers: this._headers,
            body: JSON.stringify({
                likes: []
            })
        })
        .then(res => this._parseResponse(res));
    }

    handleDeleteCard(id) {
        //Вместо cardId в URL нужно подставить свойство _id соответствующей карточки.
        return fetch(`${this._url}/cards/${id}`, {
            method: 'DELETE',
            headers: this._headers,
        })
        .then(res => this._parseResponse(res));
    }

    addLike(id) {
        //Вместо cardId в URL нужно подставить свойство _id соответствующей карточки.
        return fetch(`${this._url}/cards/likes/${id}`, {
            method: 'PUT',
            headers: this._headers,
        })
        .then(res => this._parseResponse(res));
    }

    deleteLike(id) {
        return fetch(`${this._url}/cards/likes/${id}`, {
            method: 'DELETE',
            headers: this._headers,
        })
        .then(res => this._parseResponse(res));
    }

    setUserAvatar(link) {
        return fetch(`${this._url}/users/me/avatar`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                avatar: `${link}`
            })
        })
        .then(res => this._parseResponse(res));
    }
}

const options = {
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-22',
    headers: {
      authorization: '28dc5a41-c5c0-42d9-838f-76fdbd61560b',
      'Content-Type': 'application/json'
    }
}
  
const api = new Api(options);

export default api;