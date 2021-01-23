const { Service } = require('feathers-knex');

exports.Profiles = class Profiles extends Service {
  constructor(options) {
    super({
      ...options,
      name: 'profiles'
    });
  }
};
