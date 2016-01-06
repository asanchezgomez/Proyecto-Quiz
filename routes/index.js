var express = require('express');
var router = express.Router();

//Cargamos el controlador del Quiz
var quizController = require('../controllers/quiz_controller');

/* GET home page. SOLO SE EJECUTA PARA TRANSACCIONES GET
CON USE PODRIA RESPONDER A CUALQUIER PETICION (POST, GET, ETC)*/
router.get('/', function(req, res) {
  res.render('index', { title: 'Quiz' });
});

//Llamamos a la funcion correspondiente del controlador del Quiz
router.get('/quizes/question', quizController.question);
router.get('/quizes/answer', quizController.answer);

module.exports = router;
