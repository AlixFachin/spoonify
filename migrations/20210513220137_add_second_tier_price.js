exports.up = function(knex) {
    return knex.schema.table('products', (t) => {
        t.string('price_id_2').notNull().defaultTo('');
        t.float('price_2').notNull().defaultTo(0);
        });
    };

exports.down = function(knex) {
    return knex.schema.table('products', (t) => {
        t.dropColumn('price_id_2');
        t.dropColumn('price2');
        });
    };
