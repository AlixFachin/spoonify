
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('products').del()
    .then(function () {
      // Inserts seed entries
      return knex('products').insert([
        {name: "burger", price: 2500 , description: "tasty burger made with Kobe beef and pineapple and teriyaki sauce", image_filepath: "../src/assets/190524-classic-american-cheeseburger-ew-207p-2870431.jpg"},
        {name: "chicken sandwich", price: 2200 , description: "served with lettuce, onion, pickle, and drizzled in our original sauce", image_filepath: "../src/assets/"},
        {name: "jam", price: 900 , description: "hand-made jam with local fruits produced by dedicated artisan", image_filepath: "../src/assets/burger-sauce-fb-ig-5-scaled.jpg"},
        {name: "pickles", price: 1200 , description: "Fermented pickles with vinegar imported from Italy", image_filepath: "../src/assets/dill-pickles-14132-1.jpg"},
        {name: "french fries", price: 500 , description: "made fresh daily, salted with sea salt", image_filepath: "../src/assets/"},
        {name: "curly fires", price: 600 , description: "made fresh daily, seasoned with our original seasoning", image_filepath: "../src/assets/"},
        {name: "brownie", price: 500 , description: "delicious homemade fudge brownies", image_filepath: "../src/assets/"},   
      ]).then(() => {
        return knex('users').del()
        .then(function () {
          return knex('users').insert([
          {userName: "bigrigs", fullName: "Jim Riggs", address: "512 Honk Honk Ln."},
          {userName: "catburger", fullName: "Tiger Beef", address: "The alley behind your house"},
          {userName: "frillylily123", fullName: "Janet Planet", address: "645 Main St, Apt D"}
        ]);
      });
    });
  });
};
