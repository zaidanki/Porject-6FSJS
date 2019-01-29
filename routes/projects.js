var express = require('express');
var router = express.Router();
const { projects } = require('../data.json');

for(let i = 0; i< projects.length; i++){
  projects[i].id = i;
}

router.get('/', function(req, res) {
  res.redirect('/about')
});

router.get('/:id', function(req, res) {
  const {id} = req.params;
  const proj = projects[id];
  const projectRender = {id, proj};
  res.render(`project`, projectRender)

    });

module.exports = router;
