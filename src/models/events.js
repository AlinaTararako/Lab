module.exports = (sequelize, DataTypes) => {
	const Event = sequelize.define(
		'events', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: 			false,
			primaryKey:	 		true,
			autoIncrement: 	true,
		},

    eventName: {
      type: DataTypes.STRING,
			allowNull: false,
      },

    createdAt:
		{
			type: DataTypes.DATE, field: 'created_at',
		},

		startDate:
		{
			type: DataTypes.DATE, field: 'start_date',
		},

		endDate:
		{
			type: DataTypes.DATE, field: 'end_date',
		},

    description:{
      type: DataTypes.TEXT,
			allowNull: false,
    },
    
	}, {
		//createdAt: 'created_at',
    updatedAt: 	'update_at',
   // deletedAt: 'deleted_at',
	});

  
	return Event;
};