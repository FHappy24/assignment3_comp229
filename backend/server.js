require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const authRoutes = require('./routes/auth.routes');
app.use('/auth', authRoutes);

const educationRoutes = require('./routes/education.routes');
app.use('/api/education', educationRoutes);

const contactRoutes = require('./routes/contact.routes');
app.use('/api/contacts', contactRoutes);


app.get('/', (req, res) => res.send('Backend is running'));

const start = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('✅ Connected to MongoDB');
    app.listen(process.env.PORT, () =>
      console.log(`🚀 Server running on http://localhost:${process.env.PORT}`)
    );
  } catch (err) {
    console.error('❌ DB Connection Error:', err.message);
  }
};

start();
