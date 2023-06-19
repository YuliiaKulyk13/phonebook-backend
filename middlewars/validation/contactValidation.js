const Joi = require("joi");

const contactSchema = Joi.object({
  name: Joi.string().required(),
  number: Joi.string().required(),
});

const FIELDS = ["name", "number"];

const contactValidator = (req, res, next) => {
  if (!Object.keys(req.body).length) {
    res.status(400).json({
      message: "missing fields",
    });
    return;
  }

  for (const item of FIELDS) {
    if (req.body[item] === undefined) {
      res.status(400).json({ message: `${item} is missed` });
      return;
    }
  }
  const { error } = contactSchema.validate(req.body);
  if (error) {
    res.status(400).json({ message: error.message });
    return;
  }
  next();
};

module.exports = contactValidator;
