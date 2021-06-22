
exports.up = function(knex) {
    return knex.schema.table('products', (t) => {
        t.string('product_id').notNull().defaultTo('');
        });
    };

exports.down = function(knex) {
    return knex.schema.table('products', (t) => {
        t.dropColumn('product_id');
    });
};
