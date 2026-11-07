import { User } from "../models/userModel.js"
import bcryptjs from "bcryptjs"
import jwt from "jsonwebtoken"

const registerUser = async (req, res) => {
  try {
    const body = req.body
    const { email, password } = body

    if (!email || !password) {
      res.json("y los datos 8|")
    }

    const hash = await bcryptjs.hash(password, 10)

    // zod, joi, express validator → validan el input
    const newUser = await User.create({ email, password: hash })
    res.json(newUser)
  } catch (e) {
    res.status(500).json({ error: e.message })
  }
}

const loginUser = async (req, res) => {
  const body = req.body
  const { email, password } = body

  if (!email || !password) {
    res.json("y los datos 8|")
  }

  const foundUser = await User.findOne({ email })

  if (!foundUser) {
    return res.status(401).json({ error: "Credenciales invalidas" })
  }

  const isValid = await bcryptjs.compare(password, foundUser.password)

  if (!isValid) {
    return res.status(401).json({ error: "Credenciales invalidas" })
  }

  const token = jwt.sign({ email: foundUser.email }, "contraseñasecreta", { expiresIn: "1h" })

  res.json({ token })
}

export { registerUser, loginUser }