import mongoose from "mongoose"

// Un esquema es una estructura de datos que se envia a la base de datos para validar la información que enviaremos luego
const filmSchema = new mongoose.Schema({
  title: { type: String, required: true },
  year: { type: Number, required: true },
  genre: { type: String, default: "Generica" }
}, { versionKey: false })

// Un modelo es un objeto que me deja acceder a métodos de mongodb como guardar, leer, actualizar y/o borrar recuersos
const Film = mongoose.model("Film", filmSchema)

// Leer todas las pelis
// Film.find()

// Guardar peli
// Film.create()

// Actulizar una peli
// Film.findByIdAndUpdate()

export { Film }