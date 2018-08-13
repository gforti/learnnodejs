var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.status(200).json({"id":"12345", "name":"joe"})  
});


router.post('/:id', function(req, res, next) {
  res.status(200).json({"testing":"post was made with id", "id": req.params.id})  
});


module.exports = router;
