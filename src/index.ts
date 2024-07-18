require('dotenv').config()

import * as express from "express"
import * as bodyParser from 'body-parser'
import ApiRoutes from './routes'
import MongooseDriver from "./db/driver/mongoose.driver"

const PORT = process.env.API_PORT ?? 5000

const app = express()

app.use(bodyParser.json())
app.use(ApiRoutes)

app.listen(PORT,async ()=>{
 

    try {
        await MongooseDriver.getInstance()
        console.log(`App listening on http://localhost:${PORT}/`)
      } catch (error) {
        console.log(error);
      }
})