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
const path = require("path");

app.use("/api/login", loginRoute)
app.use("/api/signup", signupRoute)

if (process.env.NODE_ENV === 'production') {
    console.log("hello")
    app.use(express.static('rms/build'));
    app.get('*', function (req, res) {
        res.sendFile(path.join(__dirname, '/rms/build', 'index.html'))
    })

}


const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`the app is listening at ${PORT} `);
})