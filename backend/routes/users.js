const router = require('express').Router();
const { celebrate, Joi } = require('celebrate');
const {
  findCurrentUserById,
  updateProfile,
  updateAvatar,
} = require('../controllers/users');

router.get('/me', findCurrentUserById);

router.patch('/me', celebrate({
  body: Joi.object().keys({
    name: Joi.string().allow('').max(30),
    about: Joi.string().allow('').max(30),
  }),
}), updateProfile);

router.patch('/me/avatar', celebrate({
  body: Joi.object().keys({
    // eslint-disable-next-line no-useless-escape
    avatar: Joi.string().allow('').required().pattern(/https?:\/\/(www.)?[\w\-]*\.\w{2}\/?[a-z0-9\S]*/),
  }),
}), updateAvatar);

module.exports = router;
