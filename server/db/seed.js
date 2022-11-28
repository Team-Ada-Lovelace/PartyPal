const { db } = require('./database');
const { User } = require('./models/User');
const { Favorite } = require('./models/Favorite');

const syncAndSeed = async () => {
  try {
    await db.authenticate();
    // this erases users everytime database starts over - DELETE BEFORE DEPLOYING
    await db.sync({ force: true });
    const users = [
      { username: 'iraisv', password: '1234' },
      { username: 'yuri', password: 'abcd' },
    ];
    const [iraisv, yuri] = await Promise.all(
      users.map((user) => {
        User.create(user);
      })
    );
    const jane = await User.create({
      username: 'janeyeh',
      email: 'janey@gmail.com',
    });
    const hpb = await Favorite.create({
      name: 'Happy Pony Bakery',
      category: 'caterer',
      yelp_reference_id: 'ABC123',
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  syncAndSeed,
};
