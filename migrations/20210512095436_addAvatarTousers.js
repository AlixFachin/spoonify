
exports.up = function(knex) {
  return knex.schema.table('users', (t) => {
      t.string('avatar').defaultTo('');
      })
  };
  
  exports.down = function(knex) {
    return knex.schema.table('users', (t) => {
      t.dropColumn('avatar');
  });
}
  