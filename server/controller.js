const houses = require('./db.json')
let globalID = 4


module.exports = {
    getHouses: (req, res) => {
        res.status(200).send(houses)
    },

    createHouses: (req, res) => {
        let newHouse = req.body
        newHouse.id = globalID
        
        newHouse.price = parseInt(newHouse.price)
        houses.push(newHouse)
        
        res.status(200).send(houses)
        globalID++
    },

    updateHouses: (req, res) => {
        let {id} = req.params
        let {type} = req.body

        let index = houses.findIndex(house => +house.id === +id)

        
        if (type ==="plus"){
            houses[index].price += 10000
            res.status(200).send(houses)
        }else if(type === 'minus' && houses[index].price === 0){
            res.status(400).send('Cannot go below 0')
        }else if (type === 'minus'){
            houses[index].price -= 10000
            res.status(200).send(houses)
        }else{
            res.sendStatus(400)
        }
        
    },

    deleteHouses: (req, res) => {
        let index = houses.findIndex(houses => +houses.id === +req.params.id)
        houses.splice(index, 1)
        res.status(200).send(houses)
    }

}
