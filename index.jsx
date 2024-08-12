const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json())
const port = 7000



const users= [
    {
        id: 0, name: "Sabana", email: "saban@gmail", number: '32131314456'
    },
    {
        id: 1, name: "saba", email: "saban@gmail", number: '32131314456'
    },
    {
        id: 2, name: "Ssabima", email: "saban@gmail", number: '32131314456'
    },
    {
        id: 3, name: "salah", email: "saban@gmail", number: '32131314456'
    },
    {
        id: 4, name: "safia", email: "saban@gmail", number: '32131314456'
    },
]
app.get('/', (req,res)=>{
    res.send("imma learn node now. thats great for me. i think it will be an increadible journey for meh! ")
})
app.get('/users', (req,res)=>{

    const search = req.query.search
    if(search){
        const searchResult = users.filter(user => user.name.toLowerCase().includes(search))
        res.send(searchResult)
    }else{
    res.send(users)
    }
})

//app method
app.post('/users', (req, res)=>{
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser)
    console.log('hitting the post', req.body)
    res.json(newUser)
})

app.get('/users/:id', (req,res)=>{
    const id = req.params.id;
    const user= users[id]
    res.send(user)
})
app.listen(port ,() =>{
    console.log('Listening to port ', port)
})