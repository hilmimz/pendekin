import prisma from "../config/prisma.js"
import {nanoid} from 'nanoid'

function generateAlias(length = 6) {
  return nanoid(length)
}

export const createShortLink = async(original_url) => {
  let alias
  while (true) {
    alias = generateAlias()
    const isAliasExist = await prisma.shortLink.findUnique({
      where: { alias },
    });

    if (!isAliasExist) {
      break
    }
  }

  return await prisma.shortLink.create({
    data: {
      original_url: original_url,
      alias: alias,
      userId: 1
    }
  })

}

export const deleteShortLink = async (shortlink_id) => {
  const isShortLinkExists = await prisma.shortLink.findUnique({
      where: { id:shortlink_id },
  })

  if (!isShortLinkExists) {
    throw new Error("Short link not found")
  }

  return await prisma.shortLink.delete({
    where: {id:shortlink_id}
  })
}