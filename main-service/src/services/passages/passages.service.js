// Initializes the `passages` service on path `/passages`
const { Passages } = require('./passages.class');
const createModel = require('../../models/passages.model');
const hooks = require('./passages.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/passages', new Passages(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('passages');

  service.hooks(hooks);
};
