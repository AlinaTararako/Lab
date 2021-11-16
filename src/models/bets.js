module.exports = (sequelize, DataTypes) => {
	const Bet = sequelize.define(
		'bets', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: 			false,
			primaryKey:	 		true,
			autoIncrement: 	true,
		},

   	eventId: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},

    userName: {
      type: DataTypes.STRING,
			allowNull: false,
    },

     coefficient: {
      type: DataTypes.INTEGER,
			allowNull: false,    
    },

    win: {
			type: DataTypes.BOOLEAN,
      allowNull: false,
		},
    
	}, {
		timestamps: false   //?
	});

  
	return Bet;
};