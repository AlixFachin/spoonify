
exports.up = function(knex) {
  return knex.schema.table('users', (t) => {
    t.string('role').notNull().defaultTo('user');
  });
};

exports.down = function(knex) {
  return knex.schema.table('users', (t) => {
    t.dropColumn('role');
  });
};
