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
          table.uuid('id').unique()
          table.string('email').unique()
          table.timestamps()
          table.string('screen_name')
          table.string('roles')
          table.boolean('active').defaultTo(true)
          table.boolean('suspended').defaultTo(false)
          table.string('reason_for_suspension')
        })
        .then(() => console.log(`Created ${tableName} table`))
        .catch((e) => console.error(`Error creating ${tableName} table`, e))
    }
  })

  return db
}
