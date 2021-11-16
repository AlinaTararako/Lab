module.exports = (sequelize, DataTypes) => {
	const UserBet = sequelize.define(
		'usersBets', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: 			false,
			primaryKey:	 		true,
			autoIncrement: 	true,
		},

    userId: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},

   	betId: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},

    sum: {
      type: DataTypes.INTEGER,
			allowNull: false,    
    },
	}, {
		timestamps: false   //?
	});

  
	return UserBet;
};