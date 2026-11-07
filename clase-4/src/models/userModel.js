import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, minlength: 6 }
}, {
  versionKey: false,
  timestamps: true
})

// crear un modelo
// como se va a llamar la colección en la db
// que schema lo valida
const User = mongoose.model("User", userSchema)

export { User }