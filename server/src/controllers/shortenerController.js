import { createShortLink } from "../services/shortenerServices.js";
import dotenv from 'dotenv'

const shorten = async(req,res) => {
  const {original_url} = req.body

  if (!original_url) {
    return res.status(400).json({ error: 'URL is required' });
  }

  try {
    const result = await createShortLink(original_url)
    res.json({ short_link: `${process.env.BASE_URL}/${result.alias}` });
  } catch (error) {
    res.status(500).json({ error });
  }

}

export default shorten