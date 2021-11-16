module.exports = (sequelize, DataTypes) => {
	const Wallet = sequelize.define(
		'wallets', {
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

    score:{
      type: DataTypes.INTEGER,
			allowNull: true,    // Can a wallet be empty?
    },
    
	}, {
			timestamps: false   //?
	});

  
	return Wallet;
};