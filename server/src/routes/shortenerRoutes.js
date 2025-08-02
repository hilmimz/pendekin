import express from 'express'
import {shorten,deleteLink} from '../controllers/shortenerControllers.js'

const router = express.Router()

router.post('/create', shorten)
router.delete('/delete', deleteLink)

export default router