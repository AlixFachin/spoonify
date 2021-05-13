exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('products').del()
    .then(function () {
      // Inserts seed entries
      return knex('products').insert([
        {
          name: "jam", 
          price: 900 , 
          price_2: 990,
          description: 'Our hand-made jam made with local fruits produced by our dedicated artisan',
          image_filepath: "../src/assets/jam.jpg",
          product_id: 'prod_JT7QqW1uqY97DX',
          price_id: "price_1IqBC1IjEoyBXRG7LkvGLIKm",
          price_id_2: 'price_1IqmiXIjEoyBXRG7YdABTqF6'
        },
        {
          name: "brownie", 
          price: 500 , 
          price_2: 550,
          description: 'Delicious homemade fudge brownies',
          image_filepath: "../src/assets/brownie.jpg",
          product_id: 'prod_JT7TyzN2nOWaNr',
          price_id: "price_1IqBEQIjEoyBXRG7nH9IY2x5",
          price_id_2: 'price_1Iqmy4IjEoyBXRG7ECMsbvR2'
        },
        {
          name: 'butter cookies', 
          price: 900 , 
          price_2: 990,
          description: 'Top class homemade cookies',
          image_filepath: "../src/assets/butter_cookies.jpg",
          product_id: 'prod_JTkWmnxitqDuwj',
          price_id: "price_1Iqn1rIjEoyBXRG7md5vpxzD",
          price_id_2: 'price_1Iqn1rIjEoyBXRG7lS6lmdJn'
        },
        {
          name: 'beans', 
          price: 700 , 
          price_2: 770,
          description: 'Original recipe baked beans',
          image_filepath: "../src/assets/beans.jpg",
          product_id: 'prod_JT7y4pvgiHcWSG',
          price_id: "price_1IqBirIjEoyBXRG7hfrSgU3s",
          price_id_2: 'price_1IqBirIjEoyBXRG7bBqyZT3s'
        },
        {
          name: 'beef jerky', 
          price: 1500 , 
          price_2: 1650,
          description: 'High quality smoked beef jerky with maple flavoring',
          image_filepath: "../src/assets/beef_jery.jpg",
          product_id: 'prod_JTkY5qBB56VJlb',
          price_id: "price_1Iqn3sIjEoyBXRG7mv53eKvl",
          price_id_2: 'price_1Iqn3rIjEoyBXRG7Zl9t3ezC'
        },
        {
          name: 'vegetable soup', 
          price: 800 , 
          price_2: 880,
          description: 'Healthy and refreshing carrots, leeks and parsnips soup',
          image_filepath: "../src/assets/vegetable_soup.jpg",
          product_id: 'prod_JTkcnRlN9zj1zC',
          price_id: "price_1Iqn75IjEoyBXRG7kLP7WGUY",
          price_id_2: 'price_1Iqn75IjEoyBXRG77OJUQzci'
        },
        {
          name: 'pickles', 
          price: 1200 , 
          price_2: 1320,
          description: 'Fermented pickles with vinegar imported from Italy',
          image_filepath: "../src/assets/pickles.jpg",
          product_id: 'prod_JT7RjgMiHRrlpg',
          price_id: "price_1IqBCWIjEoyBXRG7AweMuxIK",
          price_id_2: 'price_1IqmkHIjEoyBXRG7wnBNb9U9'
        },
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
              console.log(userData);
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
 
