import { Router } from "express"
import { registerUser, loginUser } from "../controllers/authControllers.js"

const authRouter = Router()

// registrar el usuario
// http://localhost:1234/auth/register
authRouter.post("/register", registerUser)

// loguear el usuario
authRouter.post("/login", loginUser)

export { authRouter }