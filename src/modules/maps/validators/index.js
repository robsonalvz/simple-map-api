import Joi from "joi";
const body = {
  lat: Joi.string().required(),
  long: Joi.string().required(),
};
export default {body};
