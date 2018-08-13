const express = require('express');
const router = express.Router();
const createError = require('http-errors');
const jwt = require('./jwt.service');

/* GET login listing. */
router.get('/', function(req, res, next) {
  res.status(200).json({"token":jwt.generate({})})
  
});

router.get('/test', valididateJWT, function(req, res, next) {
  res.status(200).json({"test": "you made it"})
  
});

router.get('/noval', function(req, res, next) {
  res.status(200).json({"Easy": "No validation needed"})
  
});



function valididateJWT(req, res, next) {
  // authentication middleware

    try {
        //const { authorization } = req.headers
        jwt.valididate(req.headers.authorization)
    } catch(e) {
        next(createError(401, e.message));
    }
  
  // Access granted...
  next()
}

module.exports = router;
