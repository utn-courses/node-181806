import express from "express"
import { filmRouter } from "./routes/filmRouter.js"
import { connectDb } from "./config/connectDb.js"

// Servidor HTTP
const server = express()
server.use(express.json())

// Poner el servidor en escucha
// puerto → 656000
const PORT = 1234

// Servidor siempre que detectes una petición en donde la ruta comience con /films,
// redirigila al router de films

server.use("/films", filmRouter)

server.listen(PORT, () => {
  connectDb()
  console.log(`Servidor en escucha`)
})