
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('products').del()
    .then(function () {
      // Inserts seed entries
      return knex('products').insert([
        {name: "burger", price: 2500 , description: "tasty burger made with Kobe beef and pineapple and teriyaki sauce" },
        {name: "jam", price: 900 , description: "hand-made jam with local fruits produced by dedicated artisan" },
        {name: "pickles", price: 1200 , description: "Fermented pickles with vinegar imported from Italy" }        
      ]);
    });
};
