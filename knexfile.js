require('dotenv').config();

module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: process.env.DB_NAME,
      user:     process.env.DB_USER,
<<<<<<< HEAD
      password: process.env.DB_PSW
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10,
=======
>>>>>>> fbd35eee9b94daa67d80cff2558de32e48866d1f
      password: process.env.DB_PW
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'pg',
    connection: {
      connectionString: process.env.DATABASE_URL,
      ssl: { rejectUnauthorized: false },
    },
    migrations: {
      tableName: 'knex_migrations'
    }, 
    seeds: {
      directory: './seeds/'
    }
  }

};
