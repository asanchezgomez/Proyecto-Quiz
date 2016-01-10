//A este fichero se le llama desde el index.js

var models = require('../models/models.js');

//GET /quizes/question
exports.question = function(req, res) {

	//Se muestra la pregunta en la vista question accediendo a la DB
	//findAll devuelve un array con el contenido de la DB
	models.Quiz.findAll().success(function(quiz) {
		res.render('quizes/question', {pregunta: quiz[0].pregunta});
	})
};

//GET /quizes/answer
exports.answer = function(req, res) {

	//Se muestra la respuesta en la vista answer accediendo a la DB
	models.Quiz.findAll().success(function(quiz) {
		if(req.query.respuesta === quiz[0].respuesta){
			res.render('quizes/answer', {respuesta: 'Correcto'});
		} else {
			res.render('quizes/answer', {respuesta: 'Incorrecto'});
		}
	})
};
