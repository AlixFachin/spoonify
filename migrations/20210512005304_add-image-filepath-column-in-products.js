
exports.up = function(knex) {
  return knex.schema.table('products', (t) => {
    t.string("image_filepath", 255);
  });
};

exports.down = function(knex) {
  return knex.schema.table('products', (t) => {
    t.dropColumn('image_filepath');
  });
};
