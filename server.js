const express = require("express");
require("dotenv").config();
const connectDB = require("./db/db");

const app = express();
app.use(express.json());

// Підключення до бази
connectDB();

// Імпорт роутера
const contactsRouter = require("./routes/contacts");

// Підключення роутера до додатку
app.use("/api/contacts", contactsRouter);

// Запуск сервера
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Запуск сервера
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
