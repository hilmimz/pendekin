import { createShortLink, deleteShortLink, redirectShortLink, updateShortLink } from "../services/shortLinkServices.js";
import dotenv from 'dotenv'

function handleMissingRequestBody(req,res) {
  if (!req.body || typeof req.body !== 'object') {
    return res.status(400).json({ error: 'Request body is missing or invalid' });
  }
}

export const shorten = async(req,res) => {
  handleMissingRequestBody(req,res)
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
  handleMissingRequestBody(req,res)
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

export const handleUpdateShortLink = async (req,res) => {
  handleMissingRequestBody(req,res)

  const {shortlink_id,alias} = req.body

  if (!shortlink_id) {
    return res.status(400).json({ error: 'ID is required' });
  }
  if (!alias) {
    return res.status(400).json({ error: 'Alias is required' });
  }

  try {
    const result = await updateShortLink(shortlink_id,alias)
    res.json({
      message: "Short link updated succesfully",
      shortlink_id: `${shortlink_id}`
    })
  } catch (error) {
    if (error.message === "Short link not found") {
      return res.status(400).json({ error: error.message })
    }
    if (error.message === "Alias is not available") {
      return res.status(400).json({ error: error.message })
    }
    if (error.message === "Alias minimum length is 5") {
      return res.status(400).json({ error: error.message })
    }
    return res.status(500).json({ error })
  }
}

export const redirectToShortLink = async (req,res) => {
  handleMissingRequestBody(req,res)
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