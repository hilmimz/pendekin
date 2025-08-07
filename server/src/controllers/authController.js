import validator from 'validator'
import { createUser, loginUser } from '../services/authServices.js';

function handleMissingRequestBody(req,res) {
  if (!req.body || typeof req.body !== 'object') {
    res.status(400).json({ error: 'Request body is missing or invalid' });
    return false
  }
  return true
}

function validateName(name, res) {
  if (!name) {
    res.status(400).json({error: 'Name is required.'})
    return false
  }

  if (name.length < 2) {
    res.status(400).json({error: 'Name must be greater than 2 characters.'})
    return false
  }

  if (name.length > 30) {
    res.status(400).json({error: 'Name must not be greater than 30 characters.'})
    return false
  }
  return true
}

function validateEmail(email, res) {
  if (!email) {
    res.status(400).json({error: 'Email is required.'})
    return false
  }

  const isEmail = validator.isEmail(email)

  if (!isEmail) {
    res.status(400).json({error: 'Enter valid email.'})
    return false
  }
  return true
}

function validatePassword(password,res) {
  if (!password) {
    res.status(400).json({error: 'Password is required.'})
    return false
  }

  if (password.length < 8) {
    res.status(400).json({error: 'Password must be greater than 8 characters.'})
    return false
  }

  if (password.length > 30) {
    res.status(400).json({error: 'Password must not be greater than 30 characters.'})
    return false
  }

  return true
}

export const register = async (req,res) => {
  if (!handleMissingRequestBody(req, res)) return;

  const {name, email, password} = req.body

  if (!validateName(name, res)) return;
  if (!validateEmail(email, res)) return;
  if (!validatePassword(password, res)) return;

  try {
    const result = await createUser(name,email,password)
    res.json({ message: `${email} registered succesfully` })
  } catch (error) {
    if (error.message === "User already registered") {
      return res.status(400).json({ error: error.message })
    }

    res.status(500).json({ error })
  }
}

export const login = async (req,res) => {
  if (!handleMissingRequestBody(req, res)) return;

  const {email, password} = req.body

  if (!validateEmail(email, res)) return;
  if (!validatePassword(password, res)) return;

  try {
    const result = await loginUser(email,password)
    res.json({ message: result })
  } catch (error) {
    if (error.message === "Invalid credentials") {
      return res.status(400).json({ error: error.message })
    }
    res.status(500).json({ error })
  }
}

