import express from 'express'
import {shorten,deleteLink, handleUpdateShortLink, handleGetStats, handleGetClickLog} from '../controllers/shortLinkControllers.js'

const router = express.Router()

router.get('/stats', handleGetStats)
router.get('/clicklog', handleGetClickLog)
router.post('/create', shorten)
router.delete('/delete', deleteLink)
router.post('/update', handleUpdateShortLink)

export default router