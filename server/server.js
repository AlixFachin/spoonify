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
console.log(path.join(__dirname,'../dist'));

// Endpoints
app.get('/api/products', (request, responseHandler) => {
  db('products').select('*').then((dbData) => {
    console.log(dbData);
    responseHandler.status(200).send(dbData);
  }).catch((error) => {
    console.error(error);
    responseHandler.status(500).send(`Server error ${error}`);
  });
});

app.get('/api/product/:id', (request, responseHandler) => {
  console.log(request.params);
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
  console.log(request.body);
  if (request.body.userName === "") {
    responseHandler.status(400).send("Please enter a username");
  } else if (request.body.fullName ==="") {
    responseHandler.status(400).send("Please enter a name");
  } else if (request.body.address === "") {
    responseHandler.status(400).send("Please enter an address");
  } else { db('users').insert(
    { userName: request.body.userName, fullName: request.body.fullName, address: request.body.address },
    ['id', 'userName', 'fullName', 'address']
  ).then((dbData) => {
      console.log(dbData);
      responseHandler.status(200).send(dbData[0]);
    }).catch((error) => {
      responseHandler.status(500).send(`Server error ${error}`);
    });
  }
});

app.post

app.listen(process.env.PORT || 4000, () => {
  console.log(`Server listening on port ${process.env.PORT || 4000}`);
})


