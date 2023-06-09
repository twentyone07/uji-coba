const Joi = require("joi");

const articleValidator = Joi.object({
  //imageUrl: Joi.string().allow(null, ''),
  name: Joi.string().required(),
  //latinName: Joi.string().required(),
 //family: Joi.string().required(),
  description: Joi.string().required(),
  //prescription : Joi.string().required(),
  //prevention : Joi.string().required()
 // ingredient: Joi.string().required(),
 // efficacy: Joi.array().required(),
 // onlineShop: Joi.string().required(),
});

module.exports = articleValidator;
