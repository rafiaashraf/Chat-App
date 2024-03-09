const express = require("express");
const dotenv = require("dotenv")
const { chats } = require("./data/data");

const app = express();
dotenv.config();

app.get('/', (req, res) => {
    res.send("Welcome to Chat App");
});

//get all the chats
app.get('/api/chat', (req, res) => {
    res.send(chats);
})

// get a single chat
app.get('/api/chat/:id', (req, res) => {
    const singleChat = chats.find(c => c._id === req.params.id );
    res.send(singleChat);
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, console.log(`Server started on PORT ${PORT}`));