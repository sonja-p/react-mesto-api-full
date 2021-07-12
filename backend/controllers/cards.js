const Card = require('../models/card');

module.exports.getCards = (req, res, next) => {
  Card.find({})
    .then((cards) => res.send({ cards }))
    .catch((err) => next(err));
};

module.exports.createCard = (req, res, next) => {
  const { name, link } = req.body;
  const owner = req.user._id;

  Card.create({ name, link, owner })
    .then((card) => res.send({ card }))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        const error = new Error('Переданы некорректные данные в методы создания карточки');
        error.statusCode = 400;
        next(error);
      }
      next(err);
    });
};

module.exports.removeCardById = (req, res, next) => {
  Card.findById(req.params.cardId)
    .then((card) => {
      const owner = card.owner.toString();
      if (owner !== req.user._id) {
        const error = new Error('У вас нет прав на удаление данной карточки');
        error.statusCode = 403;
        next(error);
      } else if (!card) {
        const error = new Error('Карточка с указанным _id не найдена');
        error.statusCode = 404;
        next(error);
      } else {
        card.delete();
        res.status(200).send({ data: card });
      }
    })

    .catch((err) => {
      if (err.name === 'TypeError') {
        const error = new Error('Карточка с указанным _id не найдена');
        error.statusCode = 404;
        next(error);
      }
      next(err);
    });
};

module.exports.likeCard = (req, res, next) => {
  Card.findByIdAndUpdate(
    req.params.cardId,
    { $addToSet: { likes: req.user._id } }, // добавить _id в массив, если его там нет
    { new: true },
  )
    .then((card) => {
      if (!card) {
        const error = new Error('Карточка с указанным _id не найдена');
        error.statusCode = 404;
        next(error);
      } else {
        res.send({ data: card });
      }
    })
    .catch((err) => {
      if (err.name === 'ValidationError') {
        const error = new Error('Переданы некорректные данные для постановки лайка');
        error.statusCode = 400;
        next(error);
      }
      next(err);
    });
};

module.exports.dislikeCard = (req, res, next) => {
  Card.findByIdAndUpdate(
    req.params.cardId,
    { $pull: { likes: req.user._id } }, // убрать _id из массива
    { new: true },
  )
    .then((card) => {
      if (!card) {
        const error = new Error('Карточка с указанным _id не найдена');
        error.statusCode = 404;
        next(error);
      } else {
        res.send({ data: card });
      }
    })
    .catch((err) => {
      if (err.name === 'ValidationError') {
        const error = new Error('Переданы некорректные данные для снятия лайка');
        error.statusCode = 400;
        next(error);
      }
      next(err);
    });
};
