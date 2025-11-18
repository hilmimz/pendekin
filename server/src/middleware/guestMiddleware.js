export async function isGuest(req, res, next) {
  const authToken = req.cookies.token

  if (authToken) {
    return res.status(409).json({
      message: "You are already logged in",
      redirect: "/dashboard"
    })
  }
  else{
    next()
  }
}