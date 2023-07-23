const express = require('express');
// const User = require('./models/airtime');
const app = express();
// const  mongoose = require('mongoose');
const cors = require('cors');

const dotenv = require('dotenv');
dotenv.config({ path: './.env' });
const connectDb = require("./db/conn")
connectDb();

app.use(express.json());
app.use(cors());

const airtime = require("./routes/airtime");
app.use("/api/v1/airtime/", airtime)

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});