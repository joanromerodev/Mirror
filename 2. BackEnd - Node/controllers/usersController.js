const User = require("../models/User");
const bcryptjs = require("bcryptjs");

//Get Users
const getAllUsers = async (req, res, next) => {
  const { limit = 3, from = 0, sort = -1 } = req.query;
  const query = { state: true };
  const [total, users] = await Promise.all([
    User.countDocuments(query),
    User.find(query)
      .skip(Number(from))
      .limit(Number(limit))
      .sort({ _id: sort }),
  ]);
  res.json({ limit, total, users });
};

//Get One User
const getOneUser = async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(id);
  res.json(user);
};

//Post User
const postUser = async (req, res) => {
  const {
    name,
    email,
    password,
    img = "https://img.freepik.com/free-icon/user_318-159711.jpg",
    role,
  } = req.body;
  const user = new User({ name, email, password, img, role });
  //Encrypt password
  const salt = bcryptjs.genSaltSync();
  user.password = bcryptjs.hashSync(password, salt);

  await user.save();

  res.json({ status: 200, msg: "User successfully created" });
};

//Update User
const putUser = async (req, res) => {
  const { id } = req.params;
  const { _id, password, google, ...rest } = req.body;
  if (password) {
    const salt = bcryptjs.genSaltSync();
    rest.password = bcryptjs.hashSync(password, salt);
  }
  if (Object.keys(rest).length > 0) {
    const toUpdateUser = await User.findByIdAndUpdate(id, rest);
    const user = await User.findById(id);
    res.json({ status: 200, msg: "User successfully updated" });
  } else {
    res.status(400).json({
      status: 400,
      msg: "You must send at least one field to update",
    });
  }
};

//Delete User
const deleteUser = async (req, res) => {
  const { id } = req.params;
  await User.findByIdAndUpdate(id, { state: false });
  res.json({ status: 200, msg: "User successfully deleted" });
};

module.exports = { getAllUsers, getOneUser, postUser, putUser, deleteUser };
