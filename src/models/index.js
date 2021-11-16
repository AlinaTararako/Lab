
const User = require('./users');
const Role = require('./roles');
const UserRole = require('./usersRoles');
const Bet = require('./bets');
const Wallet = require('./wallets');
const Event = require('./events');
const UserBet = require('./usersBets');
const UserInfo = require('./usersInfo');
const HistoryOperation = require('./historyOperations');

Role.belongsToMany(User, { through: UserRole, foreignKey: "role_id"});
User.belongsToMany(Role, { through: UserRole, foreignKey: "user_id"});

User.belongsTo(UserInfo, { foreignKey: "user_id"}); 

Event.belongsToMany(Bet, { foreignKey: "event_id"}); //?

User.hasOne(Wallet, { foreignKey: "user_id"}); 

User.belongsToMany(Bet, { through: UserBet, foreignKey: "user_id"});

Bet.belongsToMany(User, { through: UserBet, foreignKey: "bet_id"});

Wallet.belongsTo(HistoryOperation, { foreignKey: "wallet_id"}); 