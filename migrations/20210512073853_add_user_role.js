
exports.up = function(knex) {
  return knex.schema.table('users', (t) => {
    t.string('role').notNull();
  })
};

exports.down = function(knex) {
  return knex.schema.table('users', (t) => {
    t.dropColumn('role');
  })
};
