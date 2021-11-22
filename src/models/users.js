const Sequelize = require("sequelize");
const sequelize = require("../config/db.config");

	const User = sequelize.define(
		'users', {
		id: {
			type: 				Sequelize.INTEGER,
			allowNull: 				false,
			primaryKey: 			true,
			autoIncrement: 		true,
		},
		
		email: {
			type: 				Sequelize.STRING,
			allowNull: 				false,
			unique: 					true,
		},
		
		password: {
			type: 				Sequelize.STRING,
			allowNull: 				false,
		},
		
	}, {
			timestamps: 			false   
	});
	
	module.exports = User;