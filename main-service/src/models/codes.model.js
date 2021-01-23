/* eslint-disable no-console */

// codes-model.js - A KnexJS
//
// See http://knexjs.org/
// for more of what you can do here.
module.exports = function (app) {
  const db = app.get('knexClient')
  const tableName = 'codes'
  
  db.schema.hasTable(tableName).then((exists) => {
    if (!exists) {
      db.schema
        .createTable(tableName, (table) => {
          table.increments('id')
          table.string('publicKey')
          table.string('displayName')
          table.integer('parent_id').unsigned()
          table.foreign('parent_id').references('codes.id')
          table.unique(['displayName', 'parent_id'])
        })
        .then(() => console.log(`Created ${tableName} table`))
        .catch((e) => console.error(`Error creating ${tableName} table`, e))
    }
  })

  return db
}
