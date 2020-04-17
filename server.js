const express = require ('express')
const app = express()

const dogs = [
        {
        id: 1,
        breed: 'Labrador',
        age: 10,
    }, {
        id: 2,
        breed: 'Retriver',
        age: 5,
    },
    {
        id: 3,
        breed: 'Flatcoat retriver',
        age: 4,
    }
]

app.use(express.json())
app.use(express.static('public'))

app.get('/dogs/', (req, res) => {
    res.json(dogs)
})

app.post('/dogs/', (req, res) => {
    dogs.push(req.body)
    res.status(201)
    res.send()
})

app.put('/dogs/:id', (req, res) => {
    console.log(req.body);
    
    const foundDog = dogs.find(d => d.id == req.params.id) 
        if(!foundDog) {
            return res.status(404).send()
        } 
        foundDog.breed = req.body.breed
        foundDog.age = req.body.age

        res.send(foundDog)
})

app.delete('/dogs/:id', (req, res) =>  {
    const foundDog = dogs.find(d => d.id == req.params.id) 
        if(!foundDog) {
            return res.status(404).send()
        } 

    const index = dogs.indexOf(foundDog)
    dogs.splice(index, 1)

    res.send(foundDog)
    
  })

app.listen(3000, 'localhost', () => {
    console.log('Server is up and running');
    
})