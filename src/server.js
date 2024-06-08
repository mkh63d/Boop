const { Client } = require('pg');

// PostgreSQL connection configuration
const client = new Client({
  host: 'localhost', 
  port: 5432,        
  user: '',
  password: '0535', 
  database: 'postgres' 
});

// Connect to the database
client.connect()
  .then(() => {
    console.log('Connected to PostgreSQL database');
    //Rest of the database goes here
})