const express = require('express');
const knexLib = require('knex');
const knexConfig = require('../knexfile.js');
const path = require('path');

const db = knexLib( (process.env.NODE_ENV && process.env.NODE_ENV === 'production' ) ?  
  knexConfig.production : 
  knexConfig.development);

const app = express();

app.use(express.json());

// Static files for front-end
app.use('/',express.static(path.join(__dirname,'../dist')));

// Endpoints
app.get('/api/products', (request, responseHandler) => {
  db('products').select('*').then((dbData) => {
    responseHandler.status(200).send(dbData);
  }).catch((error) => {
    console.error(error);
    responseHandler.status(500).send(`Server error ${error}`);
  });
});

app.get('/api/product/:id', (request, responseHandler) => {
  db('products').select('*').where('id',request.params.id).then((dbData) => {
    if (dbData.length === 0) {
      responseHandler.status(404).send(`Cannot find id ${request.params.id} in the DB`);
    } else {
      responseHandler.status(200).send(dbData[0]);
    }
  }).catch((error) => {
    console.error(error);
    responseHandler.status(500).send(`Server error ${error}`);
  })
});

app.get('/api/user/:id', (request, responseHandler) => {
  db('users').select('*').where('id', request.params.id).then((dbData) => {
    if (dbData.length === 0) {
      responseHandler.status(404).send(`Cannot find user with id ${request.params.user} in the DB`);
    } else {
      responseHandler.status(200).send(dbData[0]);
    }
  }).catch((error) => {
    responseHandler.status(500).send(`Server error ${error}`);
  });
});

app.get('/api/order/:id', (request, responseHandler) => {
  db('orders').select('*').where('id', request.params.id).then((dbData) => {
    if (dbData.length === 0) {
      responseHandler.status(404).send(`Cannot find order with id ${request.params.id} in the DB`);
    } else {
      responseHandler.status(200).send(dbData[0]);
    }
  }).catch((error) => {
    responseHandler.status(500).send(`Server error ${error}`);
  });
});

app.get('/api/user/:id/orders', (request, responseHandler) => {
  db('users').select('*').where('id', request.params.id).then((dbData) => {
    if (dbData.length === 0) {
      responseHandler.status(404).send(`Cannot find user with id ${request.params.id} in the DB`);
    } else {
      responseHandler.status(200).send(dbData[0]);
    }
  }).catch((error) => {
    responseHandler.status(500).send(`Server error ${error}`);
  });
});

app.post('/api/user', (request, responseHandler) => {
  db('users').insert(
    { userName: request.body.userName, fullName: request.body.fullName, address: request.body.address }, 
    ['id', 'userName', 'fullName', 'address']
  ).then((dbData) => {
    console.log(dbData);
    if (request.body.userName === "") {
      responseHandler.status(400).send("Please enter a username");
    } else if (request.body.fullName ==="") {
      responseHandler.status(400).send("Please enter a name");
    } else if (request.body.address === "") {
      responseHandler.status(400).send("Please enter an address");
    } else {
      responseHandler.status(200).send(dbData[0]);
    }
  }).catch((error) => {
    responseHandler.status(500).send(`Server error ${error}`);
  });
});

app.post('/api/order', (request, responseHandler) => {
  db('orders').insert(
    {
      userId: request.body.userId, 
      items: request.body.items, 
      deliveryFee: request.body.deliveryFee,
      tip: request.body.tip,
      totalPrice: request.body.totalPrice,
      status: request.body.status,
      timestamp: request.body.timestamp
    },
    ['id', 'userId', 'items', 'deliveryFee', 'tip', 'totalPrice', 'status', 'timestamp']
  ).then((dbData) => {
    if (request.body.userId === "") {
      responseHandler.status(400).send("User ID required");
    } else if (request.body.items ==="") {
      responseHandler.status(400).send("Order items required");
    } else if (request.body.deliveryFee === "") {
      responseHandler.status(400).send("Delivery fee required");
    } else if (request.body.tip === "") {
      responseHandler.status(400).send("Tip required");
    } else if (request.body.totalPrice === "") {
      responseHandler.status(400).send("Total price required");
    } else if (request.body.status === "") {
      responseHandler.status(400).send("Order status required");
    } else if (request.body.timestamp === "") {
      responseHandler.status(400).send("Order timestamp required");
    } else {
      responseHandler.status(200).send(dbData[0]);
    }
  }).catch((error) => {
    responseHandler.status(500).send(`Server error ${error}`);
  });
});

app.post

app.listen(process.env.PORT || 4000, () => {
  console.log(`Server listening on port ${process.env.PORT || 4000}`);
})


