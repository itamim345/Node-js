const express = require('express');
var cors = require('cors');
const app = express();
const port = 4000;

app.use(cors())

app.get('/', (req, res) => {
    res.send("Hey! I'm node one! we are done for now:)")
})
//Practicing Query parameter
app.get('/users', (req, res) => {
    const search = req.query.search;
    if(search){
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult)
    }else {
        res.send(users)
    }
    
})
//Practicing Dynamic api
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id]
    res.send(user)
})

app.get('/fruits', (req, res) => {
    res.send(['Orange','Guava','Banana','pine-apple','Jackfruit'])
})

app.get('/fruits/banana/singpuri', (req,res) => {
    res.send("tasty banana!")
})

const users = [
    {id: 1, name: "Anurap", age: 37, email: "anurap@gmail.com"},
    {id: 2, name: "susant", age: 22, email: "susant@gmail.com"},
    {id: 3, name: "anil", age: 17, email: "anil@gmail.com"},
    {id: 4, name: "rahul", age: 32, email: "rahul@gmail.com"},
]

app.listen(port, () => {
    console.log("port listening", port);
})