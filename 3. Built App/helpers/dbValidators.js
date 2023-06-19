const Role = require("../models/Role");
const User = require("../models/User");
const { check } = require("express-validator");
const { validateFields } = require("../middlewares/validateFields");

const isRoleValid = async (role = "") => {
  const existsRole = await Role.findOne({ role });
  if (!existsRole) {
    throw new Error(`The role ${role} is not valid`);
  }
};

const isEmailValid = async (email = "", isUpdate) => {
  if (!email) {
    throw new Error(`The email is required`);
  }
  if (!isUpdate) {
    const emailExists = await User.findOne({ email });
    if (emailExists) {
      throw new Error(`The email ${email} already exists`);
    }
  }
};

const isPasswordValid = async (password = "") => {
  const passLength = password.length;
  if (passLength < 8) {
    throw new Error(`The password must be at least 8 characters long`);
  }
};

const isNameValid = async (name = "") => {
  if (!name) {
    throw new Error(`The name is required`);
  }
};

const existsUserById = async (id) => {
  const userExists = await User.findById(id);
  if (!userExists) {
    throw new Error(`The id ${id} does not exists`);
  }
};

const isUserActive = async (id) => {
  const userExists = await User.findById(id);
  if (!userExists.state) {
    throw new Error(`The user is not active`);
  }
};

const getUserValid = [
  check("id", "The id is not valid").isMongoId(),
  check("id").custom(existsUserById),
  validateFields,
];

const postUserValid = [
  check("name").custom(isNameValid),
  check("password").custom(isPasswordValid),
  check("email").custom(async (email) => {
    await isEmailValid(email, false);
  }),
  check("role").custom(async (role) => {
    if (role) {
      await isRoleValid(role);
    }
  }),
  validateFields,
];

const putUserValid = [
  check("id", "The id is not valid").isMongoId(),
  check("id").custom(existsUserById),
  check("role").custom(async (role) => {
    if (role) {
      await isRoleValid(role);
    }
  }),
  check("email").custom(async (email) => {
    if (email) {
      await isEmailValid(email, true);
    }
  }),
  check("password").custom(async (password) => {
    if (password) {
      await isPasswordValid(password);
    }
  }),
  check("name").custom(async (name) => {
    if (name) {
      await isNameValid(name);
    }
  }),
  validateFields,
];

const deleteUserValid = [
  check("id", "The id is not valid").isMongoId(),
  check("id").custom(existsUserById),
  check("id").custom(isUserActive),
  validateFields,
];

module.exports = { postUserValid, putUserValid, getUserValid, deleteUserValid };
