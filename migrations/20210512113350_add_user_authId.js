
exports.up = function(knex) {
  return knex.schema.table('users', (t) => {
    t.string('authId').notNull().defaultTo('');
  })
};

exports.down = function(knex) {
  return knex.schema.table('users', (t) => {
    t.dropColumn('authId');
  })
};
