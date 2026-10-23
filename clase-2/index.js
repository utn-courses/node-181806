
import express from "express"
import { randomUUID } from "node:crypto"

const app = express()
const PORT = 3000

app.use(express.json())

let peliculas = [
  { id: randomUUID(), titulo: "Matrix", anio: 1999, genero: "Ciencia ficción" },
  { id: randomUUID(), titulo: "Interestelar", anio: 2014, genero: "Ciencia ficción" },
  { id: randomUUID(), titulo: "El padrino", anio: 1972, genero: "Drama" }
]

// GET: obtener todas las películas
app.get("/peliculas", (req, res) => {
  res.json(peliculas)
})

// GET: obtener una película por ID
app.get("/peliculas/:id", (req, res) => {
  const pelicula = peliculas.find(p => p.id === req.params.id)

  if (!pelicula) {
    return res.status(404).json({ mensaje: "Película no encontrada" })
  }

  res.json(pelicula)
})

// POST: crear una película
app.post("/peliculas", (req, res) => {
  const { titulo, anio, genero } = req.body

  if (!titulo || !anio || !genero) {
    return res.status(400).json({ mensaje: "Faltan datos de la película" })
  }

  const nuevaPelicula = {
    id: randomUUID(),
    titulo,
    anio,
    genero
  }

  peliculas.push(nuevaPelicula)

  res.status(201).json(nuevaPelicula)
})

// PUT: actualizar una película
app.put("/peliculas/:id", (req, res) => {
  const indice = peliculas.findIndex(p => p.id === req.params.id)

  if (indice === -1) {
    return res.status(404).json({ mensaje: "Película no encontrada" })
  }

  const { titulo, anio, genero } = req.body

  peliculas[indice] = {
    id: req.params.id,
    titulo,
    anio,
    genero
  }

  res.json(peliculas[indice])
})

// DELETE: eliminar una película
app.delete("/peliculas/:id", (req, res) => {
  const indice = peliculas.findIndex(p => p.id === req.params.id)

  if (indice === -1) {
    return res.status(404).json({ mensaje: "Película no encontrada" })
  }

  peliculas.splice(indice, 1)

  res.status(204).send()
})

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`)
})
