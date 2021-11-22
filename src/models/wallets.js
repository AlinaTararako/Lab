const Sequelize = require("sequelize");
const sequelize = require("../config/db.config");

	const Wallet = sequelize.define(
		'wallets', {
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

    	score:{
      	type: 			Sequelize.FLOAT,
			defaultNull: 		true,    
    },
    
	}, {

			timestamps: 		false   
			
	});

  