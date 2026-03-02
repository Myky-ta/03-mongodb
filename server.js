// Підключення бібліотек через require
const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

// Middleware
app.use(express.json());

// Підключення до MongoDB
mongoose.connect(process.env.DB_URI)
  .then(() => console.log("Database connection successful"))
  .catch(err => console.error("Database connection error:", err));

// Простий маршрут
app.get("/", (req, res) => {
  res.send("Hello from CommonJS server!");
});

// Запуск сервера
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
