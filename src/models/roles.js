module.exports = (sequelize, DataTypes) => {
	const Role = sequelize.define(
		'roles', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
		},
		roleName:{
			type: DataTypes.STRING,
			allowNull: false,
		},
	}, {
		timestamps: false
	});

	return Role;
};