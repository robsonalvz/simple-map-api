import Joi from "joi";
const body = {
    origin: Joi.object().keys({
        lat: Joi.number().required(),
        long: Joi.number().required()
    }).required(),
    destination: Joi.object().keys({
        lat: Joi.number().required(),
        long: Joi.number().required()
    }).required(),
    waypoints: Joi.array().items(
        Joi.object().keys({
            lat: Joi.number(),
            long: Joi.number()
        })
    ),
    distance: Joi.object().keys({
        text: Joi.string().required(),
        value: Joi.number().required()
    }).required(),
    duration: Joi.object().keys({
        text: Joi.string().required(),
        value: Joi.number().required()
    }).required(),
};
export default { body };
