const express = require('express');
const router = express.Router();
const cors = require('cors');

const UserModel = require('../models/userModel')

router.use(cors());
//routes here
router.get('/', (req, res) => {
    res.json({ message: 'Welcome to your API!' });
  });

  router.get('/test', (req, res) => {
    res.json({ message: 'Welcome to your Test!' });
  });

  //getting the users from the database
  router.get('/users', (req, res) => {
    UserModel.find()
    .then(users => res.json(users))
    .catch(err => res.json(err))
  });


module.exports = router;
