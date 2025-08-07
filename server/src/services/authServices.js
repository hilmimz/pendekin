import prisma from "../config/prisma.js"

export const createUser = async (name, email, password) => {
  
  const existingUser = await prisma.user.findUnique({
      where: { email },
  });

  if (existingUser) {
    throw new Error("User already registered")
  }

  return await prisma.user.create({
    data: {
      name,
      email,
      password
    }
  })

}