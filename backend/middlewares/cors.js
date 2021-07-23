const allowedCors = [
  'https://puolukka.nomoredomains.rocks',
  'http://puolukka.nomoredomains.rocks',
  'http://localhost:3000',
];

module.exports = (req, res, next) => {
  const { origin } = req.headers;

  if (allowedCors.includes(origin)) {
    const { method } = req;

    res.header('Access-Control-Allow-Origin', origin);
    res.header('Access-Control-Allow-Credentials', true);

    const DEFAULT_ALLOWED_METHODS = 'GET,HEAD,PUT,PATCH,POST,DELETE';
    const requestHeaders = req.headers['access-control-request-headers'];
    // Если это предварительный запрос, добавляем нужные заголовки
    if (method === 'OPTIONS') {
      res.header('Access-Control-Allow-Methods', DEFAULT_ALLOWED_METHODS);
      res.header('Access-Control-Allow-Headers', requestHeaders);
      res.status(204).send();
      return;
    }
  }

  next();
};
