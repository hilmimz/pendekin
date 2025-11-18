import express from 'express'
import { login, me, register } from '../controllers/authController.js'
import { authenticateJWT } from '../middleware/authMiddleware.js'
import { isGuest } from '../middleware/guestMiddleware.js'


const router = express.Router()

router.post('/register', isGuest, register)
router.post('/login', isGuest, login)
router.get('/me',authenticateJWT, me)


export default router