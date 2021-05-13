exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('orders').del()
  .then(() => {
    return knex('products').del()
  }).then(() => {
    return knex('users').del()
  }).then(function () {
      // Inserts seed entries
      return knex('products').insert([
        {
          name: "burger", 
          price: 2500 , 
          description: "A tasty burger made with Kobe beef and pineapple and teriyaki sauce", 
          price_id: "price_1IqBABIjEoyBXRG7y8aUsW9B",
          image_filepath: "../src/assets/burger.jpg",
          product_id: "prod_JT7OrX5ZX6B512"
        },
        {
          name: "chicken_sandwich", 
          price: 2200 , 
          description: "Served with lettuce, onion, pickle, and drizzled in our original sauce", 
          price_id: "price_1IqBBQIjEoyBXRG7VLq2aQRf",
          image_filepath: "../src/assets/chicken_sandwich.jpg",
          product_id: "prod_JT7QrYJ16rASCa"
        },
        {
          name: "jam", 
          price: 900 , 
          description: "Our hand-made jam made with local fruits produced by our dedicated artisan", 
          price_id: "price_1IqBC1IjEoyBXRG7LkvGLIKm",
          image_filepath: "../src/assets/jam.jpg",
          product_id: "prod_JT7QqW1uqY97DX"
        },
        {
          name: "pickles", 
          price: 1200 , 
          description: "Fermented pickles with vinegar imported from Italy", 
          image_filepath: "../src/assets/pickles.jpg",
          product_id: "prod_JT7RjgMiHRrlpg",
          price_id: "price_1IqBCWIjEoyBXRG7AweMuxIK"
        },
        {
          name: "french_fries", 
          price: 500 , 
          description: "Made fresh daily, salted with sea salt", 
          price_id: "price_1IqBDPIjEoyBXRG7Xn0aBClK",
          image_filepath: "../src/assets/french_fries.jpg",
          product_id: "prod_JT7SceE9y37dSO"
        },
        {
          name: "curly_fries", 
          price: 600 , 
          description: "Made fresh daily, seasoned with our original seasoning", 
          product_id: "prod_JT7SQ0hLVieiJl",
          price_id: "price_1IqBDnIjEoyBXRG78JdrnJ6O",
          image_filepath: "../src/assets/curly_fries.jpg",
        },
        {
          name: "brownie", 
          price: 500 , 
          description: "Delicious homemade fudge brownies", 
          image_filepath: "../src/assets/brownie.jpg",
          product_id: "prod_JT7TyzN2nOWaNr",
          price_id: "price_1IqBEQIjEoyBXRG7nH9IY2x5"
        }
      ]).then(() => {
        return knex('users').del()
        .then(function () {
          return knex('users').insert([
          {
            userName: "bigrigs", 
            fullName: "Jim Riggs", 
            address: "512 Honk Honk Ln.",
            role: "merchant"
          },
          {
            userName: "catburger", 
            fullName: "Tiger Beef", 
            address: "The alley behind your house",
            role: "user"
          },
          {
            userName: "frillylily123", 
            fullName: "Janet Planet", 
            address: "645 Main St, Apt D",
            role: "user"
          }
          ]).then(() => {
            return knex('orders').del()
            .then(() => {
              return knex('users').select('id')
            })
            .then((userData) => {
              return knex('orders').insert([
              {
                userId: userData[0].id,
                items: [{product: "Burger", quantity: 3}, {product: "Curly Fries", quantity: 1}],
                deliveryFee: "123",
                tip: "123",
                totalPrice: "6500",
                status: "pending",
                timestamp: "2016-06-22 19:10:25+09"
              },
              {
                userId: userData[0].id,
                items: [{product: "Burger", quantity: 3}, {product: "Curly Fries", quantity: 1}],
                deliveryFee: "123",
                tip: "123",
                totalPrice: "6500",
                status: "in progress",
                timestamp: "2016-06-22 19:10:25+09"
              },
              {
                userId: userData[0].id,
                items: [{product: "Burger", quantity: 3}, {product: "Curly Fries", quantity: 1}],
                deliveryFee: "123",
                tip: "123",
                totalPrice: "6500",
                status: "fulfilled",
                timestamp: "2016-06-22 19:10:25+09"
              },
              {
                userId: userData[1].id,
                items: [{product: "Burger", quantity: 3}, {product: "Curly Fries", quantity: 1}],
                deliveryFee: "123",
                tip: "123",
                totalPrice: "2300",
                status: "complete",
                timestamp: "2076-07-22 21:10:25+09"
              },
              {
                userId: userData[2].id,
                items: [{product: "Burger", quantity: 7}, {product: "Brownie", quantity: 10}],
                deliveryFee: "123",
                tip: "123",
                totalPrice: "23450",
                status: "pending",
                timestamp: "2056-06-22 19:24:25+09"
              }
          ]);
         });
       });

            });
            
     });
   });
 }
 
