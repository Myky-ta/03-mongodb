require('dotenv').config();

const express = require('express');
const connectDB = require('./db/db');
const contactsRouter = require('./routes/contacts');

const app = express();
app.use(express.json());

 
app.use('/api/contacts', contactsRouter);
 
connectDB();

// Запуск сервера
app.listen(process.env.PORT || 3000, () => {
  console.log(`Server running on port ${process.env.PORT || 3000}`);
});
