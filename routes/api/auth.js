const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const User = require('../../models/User');

// @route   GET api/auth
// @desc    Test route
// @access  Public
// use protected auth by passing the auth middleware as a second parameter
router.get('/', auth, async (req, res) => {
  try {
    //req.user is from the auth middleware
    //.select('-password') leaves out the password
    const user = await User.findById(req.user.id).select('-password');
    //send along user minus password
    res.json(user);
  } catch (err) {
    res.status(500).send('Server error');
  }
});

module.exports = router;
