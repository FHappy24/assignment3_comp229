const mongoose = require('mongoose');
require('dotenv').config();
const User = require('./models/User');

(async () => {
  await mongoose.connect(process.env.MONGO_URI);
  await User.create({
    name: 'Admin',
    email: 'admin@site.com',
    password: '123456',
    role: 'admin'
  });
  console.log('✅ Admin user created');
  process.exit();
})();
