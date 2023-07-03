const Joi = require("joi");

const userSignUpSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  password: Joi.string().required(),
});

const userSignUpValidation = async (req, res, next) => {
  const { error } = userSignUpSchema.validate(req.body);
  if (error) {
    res.status(400).json({
      message: error.message,
    });
    return;
  }
  next();
};

module.exports = {
  userSignUpValidation,
};
