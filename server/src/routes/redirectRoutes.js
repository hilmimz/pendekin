import express from 'express'
import {redirectToShortLink} from '../controllers/shortenerControllers.js'

const router = express.Router()

router.get('/:alias', redirectToShortLink)

export default router