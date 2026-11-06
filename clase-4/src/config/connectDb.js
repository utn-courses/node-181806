import mongoose from "mongoose"

const connectDb = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/db_node_utn")
    console.log("Conectado a MongoDb")
  } catch (error) {
    console.log("Error al conectarse a MongoDb")
    process.exit(1)
  }
}

export { connectDb }