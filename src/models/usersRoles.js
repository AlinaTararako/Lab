module.exports = (sequelize, DataTypes) => {
	const UserRole = sequelize.define(
		'usersRoles', {
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

		roleId: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
    }, {
			timestamps: false
		});
		return UserRole;
}
