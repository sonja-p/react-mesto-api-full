const router = require('express').Router();
const { celebrate, Joi } = require('celebrate');
const {
  findCurrentUserById,
  updateProfile,
  updateAvatar,
  findUserById,
  findUsers,
} = require('../controllers/users');

router.get('/', findUsers);
router.get('/me', findCurrentUserById);

router.patch('/me', celebrate({
  body: Joi.object().keys({
    name: Joi.string().max(30),
    about: Joi.string().max(30),
  }),
}), updateProfile);

router.patch('/me/avatar', celebrate({
  body: Joi.object().keys({
    // eslint-disable-next-line no-useless-escape
    avatar: Joi.string().required().pattern(/https?:\/\/(www.)?[\w\-]*\.\w{2}\/?[a-z0-9\S]*/),
  }),
}), updateAvatar);

router.get('/:userId', celebrate({
  params: Joi.object().keys({
    userId: Joi.string().hex().length(24).required(),
  }),
}), findUserById);

module.exports = router;
