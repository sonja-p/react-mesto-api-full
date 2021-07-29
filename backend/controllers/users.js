const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

const { NODE_ENV, JWT_SECRET } = process.env;

module.exports.login = (req, res, next) => {
  const { email, password } = req.body;

  return User.findUserByCredentials(email, password)
    .then((user) => {
      // сохраняем токен в куки
      const token = jwt.sign({ _id: user._id }, NODE_ENV === 'production' ? JWT_SECRET : 'dev-secret', { expiresIn: '7d' });
      res
        .cookie('jwt', token, {
          maxAge: 3600000,
          httpOnly: true,
          sameSite: 'Lax',
          secure: true,
        })
        .send({
          name: user.name,
          about: user.about,
          avatar: user.avatar,
          email: user.email,
          _id: user._id,
        });
    })
    .catch(() => {
      const error = new Error('Неправильные почта или пароль');
      error.statusCode = 401;
      next(error);
    });
};

module.exports.findUsers = (req, res, next) => {
  User.find({})
    .then((users) => res.send({ users }))
    .catch((err) => next(err));
};

module.exports.findUserById = (req, res, next) => {
  User.findById(req.params.userId)
    .then((user) => {
      if (!user) {
        const error = new Error('Запрашиваемый пользователь не найден');
        error.statusCode = 404;
        next(error);
      } else {
        res.send({ data: user });
      }
    })
    .catch((err) => {
      if (err.name === 'CastError') {
        const error = new Error('Запрашиваемый пользователь не найден');
        error.statusCode = 404;
        next(error);
      }
      next(err);
    });
};

module.exports.findCurrentUserById = (req, res, next) => {
  User.findById(req.user._id)
    .then((user) => {
      if (!user) {
        const error = new Error('Запрашиваемый пользователь не найден');
        error.statusCode = 404;
        next(error);
      }
      return res.send(user);
    })
    .catch((err) => {
      if (err.name === 'CastError') {
        const error = new Error('Запрашиваемый пользователь не найден');
        error.statusCode = 404;
        next(error);
      }
      next(err);
    });
};

module.exports.createUser = (req, res, next) => {
  const {
    email, password,
  } = req.body;

  const hash = bcrypt.hashSync(password, 10);

  return User.findOne({ email })
    .then((user) => {
      if (user) {
        const error = new Error('Пользователь с таким email уже зарегистрирован');
        error.statusCode = 409;
        next(error);
      } else {
        User.create({
          email, password: hash,
        })
          .then((newUser) => res.send({
            name: newUser.name,
            about: newUser.about,
            avatar: newUser.avatar,
            email: newUser.email,
          }))
          .catch((err) => {
            if (err.name === 'MongoError' && err.code === 11000) {
              const error = new Error('Пользователь с таким email уже зарегистрирован');
              error.statusCode = 409;
              next(error);
            }
            if (err.name === 'ValidationError') {
              const error = new Error('Переданы некорректные данные в методы создания профиля');
              error.statusCode = 400;
              next(error);
            }
            next(err);
          });
      }
    });
};

module.exports.updateProfile = (req, res, next) => {
  const { name, about } = req.body;

  User.findByIdAndUpdate(
    req.user._id,
    { name, about },
    {
      new: true,
      runValidators: true,
    },
  )
    .then((user) => {
      if (!user) {
        const error = new Error('Запрашиваемый пользователь не найден');
        error.statusCode = 404;
        next(error);
      } else {
        res.send(user);
      }
    })
    .catch((err) => {
      if (err.name === 'ValidationError') {
        const error = new Error('Переданы некорректные данные при обновлении профиля');
        error.statusCode = 400;
        next(error);
      }
      if (!req.user._id) {
        const error = new Error('Запрашиваемый пользователь не найден');
        error.statusCode = 404;
        next(error);
      }
      next(err);
    });
};

module.exports.updateAvatar = (req, res, next) => {
  const { avatar } = req.body;

  User.findByIdAndUpdate(
    req.user._id,
    { avatar },
    {
      new: true,
      runValidators: true,
    },
  )
    .then((user) => {
      if (!user) {
        const error = new Error('Запрашиваемый пользователь не найден');
        error.statusCode = 404;
        next(error);
      } else {
        res.send(user);
      }
    })
    .catch((err) => {
      if (err.name === 'ValidationError') {
        const error = new Error('Переданы некорректные данные в методы редактирования аватара профиля');
        error.statusCode = 400;
        next(error);
      }
      if (!req.user._id) {
        const error = new Error('Запрашиваемый пользователь не найден');
        error.statusCode = 404;
        next(error);
      }
      next(err);
    });
};
