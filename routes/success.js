const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const productsController = require('../controllers/products');


const router = express.Router();

router.post('/success',productsController.getSuccess);

  module.exports = router;