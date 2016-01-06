//A este fichero se le llama desde el index.js
//GET /quizes/question
exports.question = function(req, res) {

	//Se muestra la pregunta en la vista question
	res.render('quizes/question', {pregunta: 'Capital de Italia'});
};

//GET /quizes/answer
exports.answer = function(req, res) {

	//Se muestra la respuesta en la vista answer
	if(req.query.respuesta === 'Roma'){
		res.render('quizes/answer', {respuesta: 'Correcto'});
	} else {
		res.render('quizes/answer', {respuesta: 'Incorrecto'});
	}
};
