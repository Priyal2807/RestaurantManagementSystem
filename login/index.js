require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const connection = require('./db.js')
const loginRoute = require('./routes/login')
const signupRoute = require('./routes/signup')

//database connection
connection();

const app = express()
app.use(express.json());
app.use(cors());

//routing

app.use("/api/login", loginRoute)
app.use("/api/signup", signupRoute)
app.listen(4000, () => {
    console.log("the app is listening at 4000");
})