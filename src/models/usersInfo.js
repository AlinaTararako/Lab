const Sequelize = require("sequelize");
const sequelize = require("../config/db.config");

	const UserInfo = sequelize.define(
		'usersInfo', {
		id: {
			type: 				Sequelize.INTEGER,
			allowNull: 				false,
			primaryKey: 			true,
			autoIncrement: 		true,
		},

			userId: {
			type: 				Sequelize.INTEGER,
			allowNull: 				false,
		},

    		userName: {
      	type: 				Sequelize.STRING,
			allowNull: 				false,
    },

      	userImage: {
			type: 				Sequelize.STRING,
			allowNull: 				true,
		},

    		gender: {
			type: 				Sequelize.ENUM('male', 'female'),
		},

    		birthday:{
     		 type: 				Sequelize.DATE
    }
	}, {

			timestamps: false   

	});

  module.exports = UserInfo;