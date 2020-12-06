const express = require('express');
const app = express();
const http = require("http");
const PORT = process.env.PORT || 8080;
const session = require("express-session");


const server = http.createServer(app);
const io = require("socket.io")(server);


app.use(express.static("public"));

server.listen(PORT, function () {
    console.log("listen to" + PORT);
});