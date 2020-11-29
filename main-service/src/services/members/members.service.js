// Initializes the `members` service on path `/members`
const { Members } = require('./members.class');
const createModel = require('../../models/members.model');
const hooks = require('./members.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/members', new Members(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('members');

  service.hooks(hooks);

  app.service('members').hooks({
    before: {
      find(context) {
        const query = context.service.createQuery(context.params)
        query.orderBy('screenName', 'asc')
        console.log('query', query)
        context.params.knex = query
        return context
      }
    }
  })
};
