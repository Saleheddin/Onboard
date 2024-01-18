const express = require('express');
const router = express.Router();

//routes here
router.get('/', (req, res) => {
    res.json({ message: 'Welcome to your API!' });
  });

module.exports = router;
