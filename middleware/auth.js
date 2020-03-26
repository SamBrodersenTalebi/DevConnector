const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = function(req, res, next) {
  //Get token from header
  const token = req.header('x-auth-token');

  //Check if not token
  if (!token) {
    return res.status(401).json({ message: 'no token authorization denied' });
  }

  //Verify token
  try {
    const decoded = jwt.verify(token, config.get('jwtSecret'));

    //decoded has user in the payload with the id
    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ message: 'Token is not valid' });
  }
};
