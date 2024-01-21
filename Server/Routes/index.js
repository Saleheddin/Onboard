const express = require('express');
const router = express.Router();
const cors = require('cors');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const bcrypt = require('bcrypt');


const UserModel = require('../models/userModel')
const CredentialsModel = require('../models/credentials');

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
//------------login------------------------
router.post('/login', async (req,res) => {
  try {
    const { username, password } = req.body;
    //see if the username is valid
    const user = await CredentialsModel.findOne({ username });
    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    //see if the username is valid
    // const passwordMatch = await bcrypt.compare(password, user.password);
    const passwordMatch = password === user.password;
    if (!passwordMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    const token = jwt.sign({ userId: user._id, username: user.username }, process.env.SECRET_KEY, { expiresIn: '1h' });
    res.json({ token });
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

//------------register-----------------------
router.post('/register', (req,res) => {
  try {
    console.log("post");
    const { email, username, password, major, year} = req.body;
    // const hashedPassword = bcrypt.hash(password, 10);
    const user = new UserModel({email:email,username:username,major:major,year:year});
    console.log("this is user",{ email, username, password, major, year});
    user.save();
    const usercredentiels = new CredentialsModel({ username:username, password: password });
    console.log("this are credentials",{ username, password});
    usercredentiels.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
});


module.exports = router;
