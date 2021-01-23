const { Service } = require('feathers-knex');

exports.Feedback = class Feedback extends Service {
  constructor(options) {
    super({
      ...options,
      name: 'feedback'
    });
  }
};
