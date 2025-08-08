import { createShortLink, deleteShortLink, getClickLog, getStats, redirectShortLink, updateShortLink } from "../services/shortLinkServices.js";
import dotenv from 'dotenv'

function handleMissingRequestBody(req,res) {
  if (!req.body || typeof req.body !== 'object') {
    res.status(400).json({ error: 'Request body is missing or invalid' });
    return false
  }
  return true
}

function validateAlias(alias,res) {
  if (alias.length >= 30) {
    res.status(400).json({error: 'The Alias must not be greater than 30 characters.'})
    return false
  }

  if (alias.length < 5) {
    res.status(400).json({error: 'The Alias must be greater than 5 characters.'})
    return false
  }

  const regex = /^[a-zA-Z0-9]+$/;
  if (!regex.test(alias)){
    res.status(400).json({error: 'The Alias has invalid format.'})
    return false
  }
  return true
}

export const shorten = async(req,res) => {
  if (!handleMissingRequestBody(req, res)) return;

  const {original_url} = req.body

  if (!original_url) {
    return res.status(400).json({ error: 'URL is required' })
  }

  try {
    const result = await createShortLink(original_url, req.user)
    res.json({ short_link: `${process.env.BASE_URL}/${result.alias}` })
  } catch (error) {
    res.status(500).json({ error })
  }
}

export const deleteLink = async (req,res) => {
  if (!handleMissingRequestBody(req, res)) return;

  const {shortlink_id} = req.body

  if (!shortlink_id) {
    return res.status(400).json({ error: 'Shortlink ID is required' });
  }

  try {
    const result = await deleteShortLink(shortlink_id, req.user)
    res.json({
      message: "Short link deleted succesfully",
      shortlink_id: `${shortlink_id}`
    })
  } catch (error) {
    if (error.message === "Short link not found") {
      return res.status(400).json({ error: error.message })
    }
    if (error.message === "Not authorized to delete this link") {
      return res.status(400).json({ error: error.message })
    }
    return res.status(500).json({ error })
  }
}

export const handleUpdateShortLink = async (req,res) => {
  if (!handleMissingRequestBody(req, res)) return;

  const {shortlink_id,alias} = req.body

  if (!shortlink_id) {
    return res.status(400).json({ error: 'Shortlink ID is required' });
  }
  if (!alias) {
    return res.status(400).json({ error: 'Alias is required' });
  }

  if (!validateAlias(alias,res)) return;

  try {
    const result = await updateShortLink(shortlink_id,alias,req.user)
    res.json({
      message: "Short link updated succesfully",
      shortlink_id: `${shortlink_id}`
    })
  } catch (error) {
    if (error.message === "Short link not found") {
      return res.status(400).json({ error: error.message })
    }
    if (error.message === "Not authorized to update this link") {
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

export const handleGetStats = async (req,res) => {
  if (!handleMissingRequestBody(req, res)) return;

  const {shortlink_id} = req.body

  if (!shortlink_id) {
    return res.status(400).json({ error: 'Shortlink ID is required' });
  }

  try {
    const result = await getStats(shortlink_id,req.user)
    res.json({
      click_count: result
    })
  } catch (error) {
    if (error.message === "Short link not found") {
      return res.status(400).json({ error: error.message })
    }
    if (error.message === "Not authorized to see link click count") {
      return res.status(400).json({ error: error.message })
    }
    return res.status(500).json({ error })
  }
}

export const handleGetClickLog = async (req,res) => {
  if (!handleMissingRequestBody(req, res)) return;

  const {shortlink_id} = req.body

  if (!shortlink_id) {
    return res.status(400).json({ error: 'Shortlink ID is required' });
  }

  try {
    const result = await getClickLog(shortlink_id,req.user)
    res.json({
      click_log: result
    })
  } catch (error) {
    if (error.message === "Short link not found") {
      return res.status(400).json({ error: error.message })
    }
    if (error.message === "Not authorized to see link click log") {
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