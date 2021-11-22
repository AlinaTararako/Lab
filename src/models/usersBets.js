const Sequelize = require("sequelize");
const sequelize = require("../config/db.config");

	const UserBet = sequelize.define(
		'usersBets', {
		id: {
			type: 			Sequelize.INTEGER,
			allowNull: 			false,
			primaryKey:	 		true,
			autoIncrement: 	true,
		},

    		userId: {
			type: 			Sequelize.INTEGER,
			allowNull: 			false,
		},

   		betId: {
			type: 			Sequelize.INTEGER,
			allowNull: 			false,
		},

    		sum: {
      	type: 			Sequelize.INTEGER,
			allowNull: 			false,    
    },
	}, {

			timestamps: 		false   

	});

	module.exports = UserBet;

  