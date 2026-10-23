import express from "express"
import { filmRouter } from "./filmRouter.js"

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
  console.log(`Servidor en escucha`)
})