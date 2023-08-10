// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      host: 'containers-us-west-188.railway.app',
      port: '8042',
      database: 'Tinder',
      user:     'postgres',
      password: 'EeFUaSnBwuvxJp2vke2m'
    },
    useNullAsDefault: true,
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
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      host: 'containers-us-west-188.railway.app',
      port: '8042',
      database: 'Tinder',
      user:     'postgres',
      password: 'CJCGl1ze4aI5fgDtg3hx'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
