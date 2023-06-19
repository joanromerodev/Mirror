require("dotenv").config();
const Server = require("./models/Server");

const server = new Server();

server.middlewares();
server.routes();
server.listen();
