const mongooseConfig = {
    host:  process.env['DB_HOST'],
    port: process.env['DB_PORT'],
    username: process.env['DB_USERNAME'],
    password: process.env['DB_PASSWORD'],
    collection: process.env['DB_COLLECTION'],
    authSource: process.env['DB_AUTH_SOURCE'],
  }
  
  export default mongooseConfig