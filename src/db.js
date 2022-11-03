// IMPORTAMOS MYSQL2
// npm install --save mysql2 
// Para las conexiones.
import {createPool} from 'mysql2/promise'
import {
    DB_HOST,
    DB_PORT,
    DB_DATABASE,
    DB_USER,
    DB_PASSWORD
} from './config.js'

// Equivalente al createConection.
export const pool = createPool({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    port: DB_PORT,
    database: DB_DATABASE
})
