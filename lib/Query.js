const tang = require('tangjs')
const Joi = require('joi')

const QuerySchema = new tang.Schema(
  {
    model: { type: String, required: true },
    alias: String,
    appendAs: String,
    method: { type: String, default: 'find' },
    computed: Boolean,
    filter: {},
    options: {},
    populate: Joi.array().items(Joi.lazy(() => QuerySchema.joi).description('Query schema')),
    withDefaults: Boolean,
    sort: String,
    offset: { type: Number, min: 0 },
    limit: { type: Number, min: 0 },
    one: Boolean,
    return: String,
    select: String,
    defaults: Boolean,
    id: Boolean,
    toModel: Boolean
  },
  { strict: true }
)

module.exports = tang.model('Query', QuerySchema)