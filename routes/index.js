var express = require('express');
var router = express.Router();

/* GET home page. SOLO SE EJECUTA PARA TRANSACCIONES GET
CON USE PODRIA RESPONDER A CUALQUIER PETICION (POST, GET, ETC)*/
router.get('/', function(req, res) {
  res.render('index', { title: 'Quiz' });
});

module.exports = router;
