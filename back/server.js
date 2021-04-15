const express = require('express')
const cors = require('cors')
const colors = require('colors')
const morgan = require('morgan')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const connectDB = require('./config/db')

dotenv.config({path:'./config/config.env'})

const transactions = require('./routes/transactions')

//bring route

//app
const app = express()
app.use(express.json())

app.use('/api/v1/transactions', transactions)

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server is running ${process.env.NODE_ENV} mode on port${PORT}`.yellow.bold))

//DB connection
connectDB()
//middleware

app.use(express.json())
//cors
app.use(cors())
//Routes middleware

//routes

//port

