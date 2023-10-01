const { User } = require('../models/user.model');
const bcrypt = require('bcrypt');

async function createUser(user) {
  console.log("🚀 ~ file: auth.logic.js:6 ~ createUser ~ user:", user)
  try {
    const hashedPassword = await bcrypt.hash(user.password, 10);
    user.password = hashedPassword;
    const createdUser = await User.create(user);
    console.log("User created: ", createdUser);
    return Promise.resolve(createdUser);
  } catch (error) {
    return Promise.reject(error);
  }
}

async function findUserByEmail(userEmail, enteredPassword) {
  const user = await User.findOne({ where: { email: userEmail } });
  if (bcrypt.compareSync(enteredPassword, user.password) == true)
    return user;
  else {
    return null;
  }

}

module.exports = {
  createUser,
  findUserByEmail
}