import { Router } from "express"
import { films } from "./data.js"

const filmRouter = Router()

// /films
// request → un objeto donde esta todo el contexto del cliente
// response → un objeto por donde se controla la respuesta
filmRouter.get("/", (req, res) => {
  res.json(films)
})

filmRouter.get("/:id", (req, res) => {
  const id = req.params.id

  const foundFilm = films.find(film => film.id === id)

  if (!foundFilm) {
    return res.status(404).json({ error: "Film not found" })
  }

  res.json(foundFilm)
})

filmRouter.post("/", (req, res) => {
  const body = req.body
  const { title, year, genre } = body

  const newFilms = {
    id: crypto.randomUUID(),
    title,
    year,
    genre
  }

  films.push(newFilms) // ????
  res.json({ message: "Movie successfully created" })
})

filmRouter.patch("/:id", (req, res) => {
  const id = req.params.id
  const body = req.body
  const index = films.findIndex(film => film.id === id)

  if (index === -1) {
    return res.status(404).json({ error: "Movie not found" })
  }

  const { title, year, genre } = body

  if (title) {
    films[index].title = title
  }

  if (year) {
    films[index].year = year
  }

  if (genre) {
    films[index].genre = genre
  }

  res.json(films[index])
})

filmRouter.delete("/:id", (req, res) => {
  const id = req.params.id

  const index = films.findIndex(film => film.id === id)

  if (index === -1) {
    return res.status(404).json({ error: "Movie not found" })
  }

  films.splice(index, 1)

  res.json({ message: "Movie successfully deleted" })
})

export { filmRouter }