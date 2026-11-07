import jwt from "jsonwebtoken"

const authMiddleware = (req, res, next) => {
  try {
    const token = req.headers.authorization
    jwt.verify(token, "contraseñasecreta")
    next()
  } catch (error) {
    res.status(500).json({ error: "Token incorrecto" })
  }
}

export { authMiddleware }