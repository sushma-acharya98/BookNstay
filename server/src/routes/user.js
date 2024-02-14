
// 'use client'
// const express = require('express');
// const router = express.Router();
// const { registerNewUser} = require('../controllers/user');
// router.post('/register', registerNewUser);
// module.exports = router;
const express = require('express');
router = express.Router()
const {registerNewUser,loginUser,getAllUsers, changePassword,}  = require('../controllers/user');

router.post('/register', registerNewUser);
// router.post('/login', loginUser);
router.get('/users',getAllUsers);
// router.post('/change-password/:id',changePassword);
module.exports = router;