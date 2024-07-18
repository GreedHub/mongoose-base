import mongoose from 'mongoose'
import handlePromise from '../../utils/promise'
import mongooseConfig from '../config/mongoose.config'

export default class MongooseDriver {
  private static instance: MongooseDriver

  private constructor(){
    this.connect()
  }

  static getInstance():MongooseDriver{
    if(!MongooseDriver.instance){
      MongooseDriver.instance = new MongooseDriver()
    }

    return MongooseDriver.instance
  }

  async connect(){
    const connectionString = this.getConnectionString()

    const [_, err] = await handlePromise(mongoose.connect(connectionString))

    if(err) return console.log(`Error al conectarse a mongo (${connectionString})`, err)

    console.log(`Conexion a mongo con exito`)
  }

  private getConnectionString(): string {
    const username = mongooseConfig.username || 'root'
    const password = mongooseConfig.password || 'example'
    const host = mongooseConfig.host || 'localhost'
    const port = mongooseConfig.port || '27017'
    const collection = mongooseConfig.collection || 'alumnos'
    const authSource = mongooseConfig.authSource || 'admin'

    let cs = `mongodb://${username}:${password}@${host}:${port}/${collection}?authSource=${authSource}`

    return cs
  }

}