const express = require('express')
const cors = require('cors')
const app = express()

const { getHouses, createHouses, updateHouses, deleteHouses} = require('./controller')

app.use(express.json())
app.use(cors())

app.get('/api/houses', getHouses)
app.post('/api/houses', createHouses)
app.put('/api/houses/:id', updateHouses)
app.delete('/api/houses/:id', deleteHouses)


app.listen(4005, () => {
    console.log("server is running on 4005")
})