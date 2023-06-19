const express = require("express");
const controller = require("../controllers/usersController");
const {
  postUserValid,
  putUserValid,
  getUserValid,
  deleteUserValid,
} = require("../helpers/dbValidators");

const router = express.Router();

router.get("/", controller.getAllUsers);

router.get("/:id", getUserValid, controller.getOneUser);

router.post("/", postUserValid, controller.postUser);

router.put("/:id", putUserValid, controller.putUser);

router.delete("/:id", deleteUserValid, controller.deleteUser);

module.exports = router;
