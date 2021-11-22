const Sequelize = require("sequelize");
const sequelize = require("../config/db.config");

	const Event = sequelize.define(
		'events', {
		id: {
			type: 			Sequelize.INTEGER,
			allowNull: 			false,
			primaryKey:	 		true,
			autoIncrement: 	true,
		},

      eventName: {
         type: 			Sequelize.STRING,
			allowNull:     	false,
      },

    	createdAt:
		{
			type: 			Sequelize.DATE, field: 'created_at',
		},

		startDate:
		{
			type: 			Sequelize.DATE, field: 'start_date',
		},

		endDate:
		{
			type: 			Sequelize.DATE, field: 'end_date',
		},

    	description:{
      	type: 			Sequelize.TEXT,
			allowNull: 			false,
    },
    
	}, {
    		updatedAt: 			false,
	});

  
	module.exports = Event;
