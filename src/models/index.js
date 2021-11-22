
const dbConfig = require("../config/db.config");
const Sequelize = require('sequelize');

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
     host: dbConfig.HOST,
     dialect: dbConfig.dialect,
  
  pool: {
     max: dbConfig.pool.max,
     min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

    db.Sequelize = Sequelize;
    db.sequelize = sequelize;

    db.User = require("./users")(sequelize, Sequelize);
    db.Role = require("./roles")(sequelize, Sequelize);
    db.UserRole = require("./usersRoles")(sequelize, Sequelize);
    db.Bet = require("./bets")(sequelize, Sequelize);
    db.Wallet = require("./wallets")(sequelize, Sequelize);
    db.Event = require("./events")(sequelize, Sequelize);
    db.UserBet = require("./usersBets")(sequelize, Sequelize);
    db.UserInfo = require("./usersInfo")(sequelize, Sequelize);
    db.HistoryOperation = require("./historyOperations")(sequelize, Sequelize);


    Role.belongsToMany(User, { through: UserRole, foreignKey: "role_id"});
    User.belongsToMany(Role, { through: UserRole, foreignKey: "user_id"});

    User.hasOne(UserInfo, { foreignKey: "user_id"}); 
    UserInfo.belongsTo(User, { foreignKey: "user_id"});

    Event.belongsTo(Bet, { foreignKey: "event_id"}); 
    Bet.hasMany(Event, { foreignKey: "event_id"});

    User.hasOne(Wallet, { foreignKey: "user_id"}); 
    Wallet.hasOne(User, { foreignKey: "user_id"}); 

    UserBet.belongsToMany(User, { foreignKey: "user_id"});
    User.hasMany(UserBet, { foreignKey: "user_id"});
    UserBet.belongsTo(Bet, { foreignKey: "bet_id"});
    Bet.hasOne(UserBet, { foreignKey: "bet_id"});

    Wallet.belongsTo(HistoryOperation, { foreignKey: "wallet_id"});
    HistoryOperation.hasMany(Wallet, { foreignKey: "wallet_id"});  

    module.exports = db;