import prisma from "../config/prisma.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const secretKey = process.env.BASE_URL

export const createUser = async (name, email, password) => {
  
  const existingUser = await prisma.user.findUnique({
      where: { email },
  });

  if (existingUser) {
    throw new Error("User already registered")
  }

    // Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  return await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword
    }
  })
}

export const loginUser = async (email,password) => {
  const existingUser = await prisma.user.findUnique({
      where: { email },
  });

  if (!existingUser) {
    throw new Error("Invalid credentials")
  }

  const isPasswordValid = await bcrypt.compare(password, existingUser.password);
  if (!isPasswordValid) {
    throw new Error('Invalid credentials');
  }

  if (isPasswordValid) {
    const user = {
      id: existingUser.id,
      name: existingUser.name,
      email: existingUser.email,
    }
    const token = jwt.sign(user, process.env.JWT_SECRET, {expiresIn: process.env.EXPIRES_IN})
    return {
      token,
      user
    }
  }
}