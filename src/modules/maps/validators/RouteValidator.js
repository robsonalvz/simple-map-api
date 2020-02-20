import Joi from "joi";
const body = {
    origin: Joi.object().keys({
        lat: Joi.string().required(),
        long: Joi.string().required()
    }).required(),
    destination: Joi.object().keys({
        lat: Joi.string().required(),
        long: Joi.string().required()
    }).required(),
    waypoints: Joi.array().items(
        Joi.object().keys({
            lat: Joi.string().required(),
            long: Joi.string().required()
        }).required()
    )
};
export default { body };
