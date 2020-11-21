const { Service } = require('feathers-knex');

exports.Members = class Members extends Service {
  constructor(options) {
    super({
      ...options,
      name: 'members'
    });
  }
};
