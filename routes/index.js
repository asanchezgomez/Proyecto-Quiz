var express = require('express');
var router = express.Router();

//Cargamos el controlador del Quiz
var quizController = require('../controllers/quiz_controller');

/* GET home page. SOLO SE EJECUTA PARA TRANSACCIONES GET
CON USE PODRIA RESPONDER A CUALQUIER PETICION (POST, GET, ETC)*/
router.get('/', function(req, res) {
  res.render('index', { title: 'Quiz' });
});

//Autoload de comandos con :quizId
router.param('quizId',quizController.load); //autoload :quizId

//Definicion de rutas de /quizes
router.get('/quizes', quizController.index);
router.get('/quizes/:quizId(\\d+)', quizController.show);
router.get('/quizes/:quizId(\\d+)/answer', quizController.answer);

module.exports = router;
