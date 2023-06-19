const express = require("express");
var cors = require("cors");
const usersRouter = require("../routes/users");
const { dbConnection } = require("../database/config");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.connectDB();
  }

  //Connect to database
  async connectDB() {
    await dbConnection();
  }

  middlewares() {
    this.app.use(express.static("public"));
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(cors());
  }

  routes() {
    this.app.use("/users", usersRouter);
    this.app.use("*", (req, res) => {
      res.status(404).json({ msg: "Resource not found" });
    });
    this.app.use((err, req, res, next) => {
      res.status(500).json({ msg: "Internal server error" });
    });
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`App listening at port ${this.port}`);
    });
  }
}

module.exports = Server;
