const Sequelize = require("sequelize");
const sequelize = require("../config/db.config");

	const Role = sequelize.define(
		'roles', {
		id: {
			type: 				Sequelize.INTEGER,
			allowNull: 				false,
			primaryKey: 			true,
			autoIncrement: 		true,
		},
		roleName:{
			type: 				Sequelize.STRING,
			allowNull: 				false,
		},
	}, {
			timestamps: 			false
	});

	module.exports = Role;
