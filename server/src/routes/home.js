
const express = require('express');
const router = express.Router();
const{renderHomepage} = reuire('../controllers/home')
router.get('./', renderHomepage);
module.exports = router;
