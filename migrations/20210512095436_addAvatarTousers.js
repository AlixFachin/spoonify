
exports.up = function(knex) {
  return knex.schema.table('users', (t) => {
      t.string('avatar');
      })
  };
  
  exports.down = function(knex) {
      t.dropColumn('avatar');
  };
  