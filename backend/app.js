const express = require('express')
const connectDB = require('./config/db')
const albumRoutes = require('./routes/albumRoutes')
const cors = require('cors')

const app = express()
connectDB()

app.use(cors())
app.use(express.json())
app.use('/api/albums',albumRoutes)

app.listen(5000, () => {
    console.log('server is running....');
})