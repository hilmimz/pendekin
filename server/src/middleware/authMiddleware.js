import jwt from 'jsonwebtoken'

export const authenticateJWT = async (req,res,next) => {
  const authToken = req.cookies.token

  if (!authToken) {
    return res.status(401).json({ message: 'Token is required' });
  }

  try {
    const decoded = jwt.verify(authToken, process.env.JWT_SECRET)
    req.user = decoded
    next()
  } catch (error) {
    return res.status(403).json({ message: 'Invalid or expired token' });
  }
}