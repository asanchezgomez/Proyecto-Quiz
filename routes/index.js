var express = require('express');
var router = express.Router();

//Cargamos el controlador del Quiz
var quizController = require('../controllers/quiz_controller');
var sessionController = require('../controllers/session_controller');

/* GET home page. SOLO SE EJECUTA PARA TRANSACCIONES GET
CON USE PODRIA RESPONDER A CUALQUIER PETICION (POST, GET, ETC)*/
router.get('/', function(req, res) {
  res.render('index', { title: 'Quiz' , errors: []});
});

//Autoload de comandos con :quizId
router.param('quizId',quizController.load); //autoload :quizId

// Definicion de rutas de sesion
router.get('/login', sessionController.new); //formulario login
router.post('/login', sessionController.create); //crear sesion
router.get('/logout', sessionController.destroy); //destruir sesion

//Definicion de rutas de /quizes
router.get('/quizes', quizController.index);
router.get('/quizes/:quizId(\\d+)', quizController.show);
router.get('/quizes/:quizId(\\d+)/answer', quizController.answer);
//Se mete un middleware (sessionController.loginRequired), que se ejecuta antes de la accion
//que solo podria hacer un usuario autenticado
router.get('/quizes/new', sessionController.loginRequired, quizController.new);
router.post('/quizes/create', sessionController.loginRequired, quizController.create);
router.get('/quizes/:quizId(\\d+)/edit', sessionController.loginRequired, quizController.edit);
router.put('/quizes/:quizId(\\d+)', sessionController.loginRequired, quizController.update);
router.delete('/quizes/:quizId(\\d+)', sessionController.loginRequired, quizController.destroy);

module.exports = router;
