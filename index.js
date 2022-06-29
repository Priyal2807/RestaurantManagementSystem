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


app.use("/api/login", loginRoute)
app.use("/api/signup", signupRoute)

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'))
}
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`the app is listening at ${PORT} `);
})