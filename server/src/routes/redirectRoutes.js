import express from 'express'
import {redirectToShortLink} from '../controllers/shortLinkControllers.js'

const router = express.Router()

router.get('/:alias', redirectToShortLink)

export default router