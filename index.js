const connectToDatabase = require('./src/database/connect')
const dotEnv = require('dotenv')

require('./modules/express')
dotEnv.config()
connectToDatabase()