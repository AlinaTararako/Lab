const Sequelize = require("sequelize");
const sequelize = require("../config/db.config");

	const Bet = sequelize.define(
		'bets', {
		id: {
				type: Sequelize.INTEGER,
				allowNull: 			false,
				primaryKey:	 		true,
				autoIncrement: 	true,
		},

   	eventId: {
				type: Sequelize.INTEGER,
				allowNull: false,
		},

    	userName: {
     			type: Sequelize.STRING,
				allowNull: false,
    },

     	coefficient: {
      		type: Sequelize.INTEGER,
				allowNull: false,    
    },

    	win: {
				type: Sequelize.BOOLEAN,
      		allowNull: false,
		},
    
	}, {
				timestamps: false   //?
	});

  
	module.exports = Bet;
