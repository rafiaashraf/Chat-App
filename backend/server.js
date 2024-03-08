const express = require("express");

const app = express();

app.get('/', (req, res) => {
    res.send("Welcome");
});

app.get('/')

const PORT = 5000;
app.listen(PORT, console.log(`Server started on PORT ${PORT}`));