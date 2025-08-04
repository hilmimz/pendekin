import express from 'express'
import {shorten,deleteLink, handleUpdateShortLink} from '../controllers/shortLinkControllers.js'

const router = express.Router()

router.post('/create', shorten)
router.delete('/delete', deleteLink)
router.post('/update', handleUpdateShortLink)

export default router