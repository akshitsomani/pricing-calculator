import Joi from 'joi';

export const dealActionSchema = Joi.object({
  dealId: Joi.string().uuid().required(),
  notes: Joi.string().max(500).allow('').optional()
});
