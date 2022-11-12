const express = require('express');
const app = express();
const port = 4000;

app.get('/', (req, res) => {
    res.send("Hey! I'm node one! we are done for now:)")
})

app.get('/users', (req, res) => {
    res.send(users)
})

app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id]
    res.send(user)
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