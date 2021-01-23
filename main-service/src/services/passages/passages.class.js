const { Service } = require('feathers-knex');

exports.Passages = class Passages extends Service {
  constructor(options) {
    super({
      ...options,
      name: 'passages'
    });
  }
};
