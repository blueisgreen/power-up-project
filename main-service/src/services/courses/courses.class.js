const { Service } = require('feathers-knex');

exports.Courses = class Courses extends Service {
  constructor(options) {
    super({
      ...options,
      name: 'courses'
    });
  }
};
