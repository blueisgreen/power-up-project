/* eslint-disable no-console */

// members-model.js - A KnexJS
//
// See http://knexjs.org/
// for more of what you can do here.
module.exports = function (app) {
  const db = app.get('knexClient')
  const tableName = 'members'

  db.schema.hasTable(tableName).then((exists) => {
    if (!exists) {
      db.schema
        .createTable(tableName, (table) => {
          table.increments('id')
          table.string('email').unique()
          table.string('password')
          table.string('auth0Id')
          table.string('googleId')
          table.string('githubId')
          table.string('joinedOn')
          table.string('roles')
          table.integer('status_id')
          table.foreign('status_id').references('codes.id')
        })
        .then(() => console.log(`Created ${tableName} table`))
        .catch((e) => console.error(`Error creating ${tableName} table`, e))
    }
  })

  return db
}
