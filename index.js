const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

app.use(bodyparser.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(5000, () => {
  console.log("Server is running on port http://localhost:5000");
});
