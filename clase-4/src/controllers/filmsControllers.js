import { Film } from "../models/filmModel.js"


const getFilms = async (req, res) => {
  const allFilms = await Film.find()
  res.json(allFilms)
}

const getFilmById = async (req, res) => {
  const id = req.params.id
  const foundFilm = await Film.findOne({ _id: id })
  res.json(foundFilm)
}

const createFilm = async (req, res) => {
  const body = req.body
  const { title, year, genre } = body
  const newFilms = {
    title,
    year,
    genre
  }
  const savedFilm = await Film.create(newFilms)
  res.json(savedFilm)
}

const updateFilm = async (req, res) => {
  const id = req.params.id
  const body = req.body
  const updatedFilm = await Film.findByIdAndUpdate(id, body, { new: true })
  res.json(updatedFilm)
}

const deleteFilm = async (req, res) => {
  try {
    const id = req.params.id
    const deletedFilm = await Film.findByIdAndDelete(id)

    if (!deletedFilm) {
      const error = new Error()
      error.name = "FilmNotFound"
      error.message = "Film not found :("
      throw error
    }

    res.json(deletedFilm)
  } catch (error) {
    if (error.name === "FilmNotFound") {
      return res.status(404).json({ error: error.message })
    }
  }
}

export { getFilms, getFilmById, createFilm, updateFilm, deleteFilm }