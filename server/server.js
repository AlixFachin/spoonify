const express = require('express');
const knexLib = require('knex');
const knexConfig = require('../knexfile.js');

const db = knexLib( (process.env.NODE_ENV && process.env.NODE_ENV === 'production' ) ?  
  knexConfig.production : 
  knexConfig.development);

const app = express();

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

app.listen(process.env.PORT || 4000, () => {
  console.log(`Server listening on port ${process.env.PORT || 4000}`);
})