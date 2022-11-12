const express = require('express');
const app = express();
const port = 4000;

app.get('/', (req, res) => {
    res.send("Hey! I'm node one! we are done now :)")
})



app.listen(port, () => {
    console.log("port listening", port);
})