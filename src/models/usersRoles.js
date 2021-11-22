const Sequelize = require("sequelize");
const sequelize = require("../config/db.config");

	const UserRole = sequelize.define(
		'usersRoles', {
		id: {
			type: 				Sequelize.INTEGER,
			allowNull: 				false,
			primaryKey: 			true,
			autoIncrement: 		true,
		},

		userId: {
			type: 				Sequelize.INTEGER,
			allowNull: 				false,
		},

		roleId: {
			type: 				Sequelize.INTEGER,
			allowNull: 				false,
		},
    }, {

			timestamps: 			false

		});
		
		module.exports = UserRole;
