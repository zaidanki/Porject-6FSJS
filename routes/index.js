var express = require('express');
var router = express.Router();

const { projects } = require('../data.json');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', {projects});
});

router.get('/about', function(req, res) {
  res.render('about', { title: 'About' });
});


module.exports = router;
