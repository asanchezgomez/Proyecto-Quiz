// Definicion como es la tabla Quiz

module.exports = function (sequelize, DataTypes) {
	// Le pasamos el nombre de la tabal, de los campos y
	// los tipos de campos
	return sequelize.define('Quiz',
		{ pregunta: DataTypes.STRING,
		  respuesta: DataTypes.STRING,
		});
}
