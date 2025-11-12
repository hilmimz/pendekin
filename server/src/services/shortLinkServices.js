import prisma from "../config/prisma.js"
import {customAlphabet } from 'nanoid'

function generateAlias(length = 6) {
  const nanoid = customAlphabet('0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ', length)
  const alias = nanoid()
  return alias
}

// =================== Short Link CRUD (START) =============================
export const createShortLink = async(original_url, alias, user) => {
  if (alias != ""){
    const isAliasExist = await prisma.shortLink.findUnique({
        where: { alias },
      })

    if (isAliasExist) {
      throw new Error("Alias is not available")
    }
  } else {
    while (true) {
      alias = generateAlias()
      const isAliasExist = await prisma.shortLink.findUnique({
        where: { alias },
      });
  
      if (!isAliasExist) {
        break
      }
    }
  }

  return await prisma.shortLink.create({
    data: {
      original_url: original_url,
      alias: alias,
      userId: user.id
    }
  })

}

export const deleteShortLink = async (shortlink_id, user) => {
  const existingShortLink = await prisma.shortLink.findUnique({
      where: { id:shortlink_id },
  })

  if (!existingShortLink) {
    throw new Error("Short link not found")
  }

  if (existingShortLink.userId !== user.id) {
    throw new Error('Not authorized to delete this link');
  }

  return await prisma.shortLink.delete({
    where: {id:shortlink_id}
  })
}

export const updateShortLink = async (shortlink_id, alias, user) => {
  const existingShortLink = await prisma.shortLink.findUnique({
      where: { id:shortlink_id },
  })

  if (!existingShortLink) {
    throw new Error("Short link not found")
  }

  if (existingShortLink.userId !== user.id) {
    throw new Error('Not authorized to update this link');
  }

  if (alias.length < 5) {
    throw new Error("Alias minimum length is 5")
  }

  const existingAlias = await prisma.shortLink.findUnique({
      where: { alias },
  })

  if (existingAlias) {
    throw new Error("Alias is not available")
  }

  await prisma.shortLink.update({
    where: {id:existingShortLink.id},
    data: {
      alias
    }
  })
}

export const getStats = async (shortlink_id,user) => {
  const existingShortLink = await prisma.shortLink.findUnique({
      where: { id:shortlink_id },
  })

  if (!existingShortLink) {
    throw new Error("Short link not found")
  }

  if (existingShortLink.userId !== user.id) {
    throw new Error('Not authorized to see link click count');
  }

  return existingShortLink.click_count
}

export const getClickLog = async (shortlink_id,user) => {
  const existingShortLink = await prisma.shortLink.findUnique({
      where: { id:shortlink_id },
  })

  if (!existingShortLink) {
    throw new Error("Short link not found")
  }

  if (existingShortLink.userId !== user.id) {
    throw new Error('Not authorized to see link click log');
  }

  return await prisma.clickLog.findMany({
    where: {shortlinkId:shortlink_id}
  })
}
// =================== Short Link CRUD (END) =============================


// =================== Redirect Link (START) =============================
export const redirectShortLink = async (alias,req) => {
  const existingShortLink = await prisma.shortLink.findUnique({
      where: { alias },
  })

  if (!existingShortLink) {
    throw new Error("Short link not found")
  }

  await prisma.clickLog.create({
    data: {
      ip_address: req.ip || req.connection.remoteAddress,
      user_agent: req.headers['user-agent'],
      referer:req.headers.referer,
      shortlinkId: existingShortLink.id
    }
  })

  await prisma.shortLink.update({
    where: {id:existingShortLink.id},
    data: {
      click_count: {increment: 1}
    }
  })

  return existingShortLink.original_url
}
// =================== Redirect Link (END) =============================