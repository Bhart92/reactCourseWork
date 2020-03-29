const express = require('express');
const router = express.Router();

// @routeGET api/users
// @desc     Test route
// @access   Public
router.get('/', (req, res) => res.send('User route'));

module.exports = router;