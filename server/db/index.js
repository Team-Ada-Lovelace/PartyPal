const { db } = require('./database.js');
const { User } = require('./models/User');
const { Favorite } = require('./models/Favorite');
const { syncAndSeed } = require('./seed');
// // make models associations here!

Favorite.belongsTo(User);
User.hasMany(Favorite);

//added this to seed and then in in here require it from

module.exports = {
  db,
  syncAndSeed,
  User,
  Favorite,
  //other models
};
