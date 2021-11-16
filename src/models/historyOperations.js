module.exports = (sequelize, DataTypes) => {
	const HistoryOperation = sequelize.define(
		'historyOperations', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: 			false,
			primaryKey:	 		true,
			autoIncrement: 	true,
		},

    score:{
      type: DataTypes.INTEGER,
			allowNull: true,   
    },

		 walletId: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},	

     description:{
      type: DataTypes.TEXT,
			allowNull: false,
    },
    
	}, {
			timestamps: false   //?
	});

  
	return HistoryOperation;
};