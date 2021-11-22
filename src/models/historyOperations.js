const Sequelize = require("sequelize");
const sequelize = require("../config/db.config");

	const HistoryOperation = sequelize.define(
		'historyOperations', {
		id: {
			type: 			Sequelize.INTEGER,
			allowNull: 			false,
			primaryKey:	 		true,
			autoIncrement: 	true,
		},

    	score:{
      	type:				 Sequelize.INTEGER,
			allowNull: 			true,   
    },

		walletId: {
			type: 			Sequelize.INTEGER,
			allowNull: 			false,
		},	

     description:{
      	type: 			Sequelize.TEXT,
			allowNull: 			false,
    },
    
	}, {
			timestamps: false   
	});

  
	module.exports = HistoryOperation;