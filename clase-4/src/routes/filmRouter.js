import { Router } from "express"
import { getFilmById, getFilms, createFilm, updateFilm, deleteFilm } from "../controllers/filmsControllers.js"

const filmRouter = Router()

// /films/
// request → un objeto donde esta todo el contexto del cliente
// response → un objeto por donde se controla la respuesta
filmRouter.get("/", getFilms)
filmRouter.get("/:id", getFilmById)
filmRouter.post("/", createFilm)
filmRouter.patch("/:id", updateFilm)
filmRouter.delete("/:id", deleteFilm)

export { filmRouter }