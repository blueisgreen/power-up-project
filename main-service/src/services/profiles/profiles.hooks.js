const { authenticate } = require('@feathersjs/authentication').hooks
const { setTimestamp } = require('../../hooks/hook-functions')

module.exports = {
  before: {
    all: [authenticate('jwt')],
    find: [],
    get: [],
    create: [setTimestamp('updatedOn')],
    update: [setTimestamp('updatedOn')],
    patch: [setTimestamp('updatedOn')],
    remove: [setTimestamp('updatedOn')],
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },
}
