const { Service } = require('feathers-knex');

exports.Lessons = class Lessons extends Service {
  constructor(options) {
    super({
      ...options,
      name: 'lessons'
    });
  }
};
