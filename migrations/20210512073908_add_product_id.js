
exports.up = function(knex) {
return knex.schema.table('products', (t) => {
    t.string('product_id').notNull();
    })
};

exports.down = function(knex) {
    t.dropColumn('product_id');
};
