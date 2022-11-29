const { db } = require('./database');
const { User } = require('./models/User');
const { Favorite } = require('./models/Favorite');
const { syncAndSeed } = require('./seed');

// // make models associations here!

User.hasMany(Favorite);
Favorite.belongsTo(User);

//added this to seed and then in in here require it from

module.exports = {
  db,
  syncAndSeed,
  models: { User, Favorite },
  //other models
};
