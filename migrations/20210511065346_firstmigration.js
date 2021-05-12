
exports.up = function(knex) {
  return knex.raw('create extension if not exists "uuid-ossp"').then(() => 
  Promise.all([
    knex.schema.createTable('products', (t) => {
      t.increments().unsigned().primary();
      t.string('name').notNull();
      t.string('key');
      t.text('description');
      t.float('price').notNull();
    } ),
    knex.schema.createTable('users', (t) => {
      t.uuid('id').unique().notNull().defaultTo(
        knex.raw('uuid_generate_v4()')).primary();
      t.string('userName');
      t.string('fullName');
      t.text('address');
    }),
    knex.schema.createTable('orders', (t) => {
      t.increments().unsigned().primary();
      t.uuid('userId').references('id').inTable('users');
      t.specificType('items', 'text ARRAY');
      t.float('deliveryFee');
      t.float('tip');
      t.float('totalPrice');
      t.string('status');
      t.datetime('timestamp');
    })
  ]));
};

exports.down = function(knex) {
  return knex.schema.dropTable('products').dropTable('users')
    .dropTable('orders').raw('drop extension if exists "uuid-ossp"');
};
