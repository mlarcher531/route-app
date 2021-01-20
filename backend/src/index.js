require('./models/User')
require('./models/Track')
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const requireAuth = require('./middlewares/requireAuth')
const trackRoutes = require('./routes/trackRoutes')

const authRoutes = require('./routes/authRoutes')

const app = express()

app.use(bodyParser.json())
app.use(authRoutes)
app.use(trackRoutes)

const mongoUri = "mongodb+srv://admin:password!@cluster0.3im9h.mongodb.net/<dbname>?retryWrites=true&w=majority"
mongoose.connect( mongoUri, {
    useNewUrlParser: true,
    useCreateIndex: true
})
mongoose.connection.on('connected', () =>{
    console.log('Successfully connected to MongoDB')
})

mongoose.connection.on('error', (err) =>{
    console.log('Error connecting to MongoDB', err)
})

//request resposne 
app.get('/', requireAuth, (req, res) => {
    res.send(`Your email is: ${req.user.email}`)
})

app.listen(3000, () => {
    console.log('Listening on port 3000')
})



//node src/index.js to run OR npm run dev