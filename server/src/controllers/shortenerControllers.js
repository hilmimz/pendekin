import { createShortLink, deleteShortLink, redirectShortLink } from "../services/shortenerServices.js";
import dotenv from 'dotenv'

export const shorten = async(req,res) => {
  const {original_url} = req.body

  if (!original_url) {
    return res.status(400).json({ error: 'URL is required' })
  }

  try {
    const result = await createShortLink(original_url)
    res.json({ short_link: `${process.env.BASE_URL}/${result.alias}` })
  } catch (error) {
    res.status(500).json({ error })
  }
}

export const deleteLink = async (req,res) => {
  const {shortlink_id} = req.body

  if (!shortlink_id) {
    return res.status(400).json({ error: 'ID is required' });
  }

  try {
    const result = await deleteShortLink(shortlink_id)
    res.json({
      message: "Short link deleted succesfully",
      shortlink_id: `${shortlink_id}`
    })
  } catch (error) {
    if (error.message === "Short link not found") {
      return res.status(400).json({ error: error.message })
    }
    return res.status(500).json({ error })
  }
}

export const redirectToShortLink = async (req,res) => {
  const {alias} = req.params

  try {
    res.redirect(await redirectShortLink(alias,req))
  } catch (error) {
    if (error.message === "Short link not found") {
      return res.status(400).json({ error: error.message })
    }
    return res.status(500).json({ error })
  }
}