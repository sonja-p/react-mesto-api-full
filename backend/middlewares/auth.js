const jwt = require('jsonwebtoken');

const { JWT_SECRET = 'some-secret-key' } = process.env;

module.exports = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization || !authorization.startsWith('Bearer ')) {
    const error = new Error('Необходима авторизация');
    error.statusCode = 401;
  }

  let payload;

  try {
    const token = authorization.replace('Bearer ', '');
    payload = jwt.verify(token, JWT_SECRET, { expiresIn: '7d' });
  } catch (err) {
    const error = new Error('Необходима авторизация');
    error.statusCode = 401;

    next(error);
  }

  req.user = payload;

  next();
  return req.user;
};
