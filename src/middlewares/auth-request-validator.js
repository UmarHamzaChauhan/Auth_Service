const validateUserAuth = (req,res,next) => {
  if(!req.body.email || !req.body.password) {
    return res.status(400).json({
      success:false,
      data: {},
      message: 'something went wrong',
      error: 'email or password missing'
    })
  }
  next();
}
const validateIsAdmin = (req,res,next) => {
  if(!req.body.id) {
    return res.status(400).json({
      success:false,
      data: {},
      message: 'something went wrong',
      error: 'userId missing'
    })
  }
  next();
}

module.exports = {
  validateUserAuth,
  validateIsAdmin
}