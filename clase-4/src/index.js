import express from "express"
import { filmRouter } from "./routes/filmRouter.js"
import { connectDb } from "./config/connectDb.js"
import { authRouter } from "./routes/authRouter.js"
import { authMiddleware } from "./middlewares/authMiddleware.js"

// Servidor HTTP
const server = express()
server.use(express.json())

// Poner el servidor en escucha
// puerto → 656000
const PORT = 1234

// Servidor siempre que detectes una petición en donde la ruta comience con /films,
// redirigila al router de films

server.use("/films", authMiddleware, filmRouter)
server.use("/auth", authRouter)

server.listen(PORT, () => {
  connectDb()
  console.log(`Servidor en escucha`)
})