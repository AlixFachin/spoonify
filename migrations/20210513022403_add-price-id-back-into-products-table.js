
exports.up = function(knex) {
  return knex.schema.table('products', (t) => {
      t.string('price_id').notNull().defaultTo('');
      })
  };
  
  exports.down = function(knex) {
      t.dropColumn('price_id');
  };
