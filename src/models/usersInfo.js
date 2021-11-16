module.exports = (sequelize, DataTypes) => {
	const UserInfo = sequelize.define(
		'usersInfo', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
		},

		userId: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},

    	userName: {
      type: DataTypes.STRING,
			allowNull: false,
    },

      userImage: {
			type: DataTypes.STRING,
			allowNull: true,
		},

    	gender: {
			type: DataTypes.ENUM('male', 'female'),
		},

    	birthday:{
      type: DataTypes.DATE
    }
	}, {
			timestamps: false   //?
	});

  
	return UserInfo;
};