const { Service } = require('feathers-knex')

exports.Codes = class Codes extends (
  Service
) {
  constructor(options) {
    super({
      ...options,
      name: 'codes',
    })
  }
}
