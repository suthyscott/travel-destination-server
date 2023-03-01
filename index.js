require('dotenv').config()
const express = require('express')
const cors = require('cors')
const {Destination} = require('./models/destination')
const {sequelize} = require('./util/database')

const app = express()

app.use(express.json())
app.use(cors())

const {getDestinations, addDestination, getSingleDestination} = require('./controller')

app.get('/api/destinations', getDestinations)
app.post('/api/destinations', addDestination)
app.get('/api/destination/:destId', getSingleDestination)

sequelize.sync()
// sequelize.sync({force: true})
    .then(res => {
        app.listen(process.env.SERVER_PORT, console.log(`Take us to warp ${process.env.SERVER_PORT}!`))
    })
