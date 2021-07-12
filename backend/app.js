const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const { errors, celebrate, Joi } = require('celebrate');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const { login, createUser } = require('./controllers/users');
const auth = require('./middlewares/auth');
const handleErrors = require('./middlewares/error');
const { requestLogger, errorLogger } = require('./middlewares/logger');

const PORT = 3000;

const app = express();

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(limiter);
app.use(cookieParser());

mongoose.connect('mongodb://localhost:27017/mestodb', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

app.use(requestLogger);

app.post('/signin', celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required().min(8),
  }),
}), login);

app.post('/signup', celebrate({
  body: Joi.object().keys({
    name: Joi.string().allow('').max(30),
    about: Joi.string().allow('').max(30),
    // eslint-disable-next-line no-useless-escape
    avatar: Joi.string().allow('').pattern(/https?:\/\/(www.)?[\w\-]*\.\w{2}\/?[a-z0-9\S]*/),
    email: Joi.string().required().email(),
    password: Joi.string().required().min(8),
  }),
}), createUser);

app.use('/users', auth, celebrate({
  headers: Joi.object({
    // eslint-disable-next-line no-useless-escape
    authorization: Joi.string().required().pattern(/Bearer [a-z0-9\.\_]*/i),
  }).unknown(),
}), require('./routes/users'));

app.use('/cards', auth, celebrate({
  headers: Joi.object({
    // eslint-disable-next-line no-useless-escape
    authorization: Joi.string().required().pattern(/Bearer [a-z0-9\.\_]*/i),
  }).unknown(),
}), require('./routes/cards'));

app.use((req, res, next) => {
  const error = new Error('Такой страницы не существует');
  error.statusCode = 404;
  next(error);
});

app.use(errorLogger);

app.use(errors());

app.use(handleErrors);

app.listen(PORT);
