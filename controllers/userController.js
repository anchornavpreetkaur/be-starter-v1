const { get } = require("mongoose");
const Car = require("../models/userModel");

// GET /cars
const getAllUsers = async (req, res) => {
  const cars = await Car.find({}).sort({ createdAt: -1 });
  res.status(200).json(cars);
};
 
// POST / User
const createUser = async (req, res) => {
  const newUser = await Car.create({ ...req.body });
  res.status(201).json(newUser);
};

// GET /users/:UserId
const getUserById = async (req, res) => {
  const { userId } = req.params;

  const _user = await Car.findById(carId);
  if (_user) {
    res.status(200).json(_user);
  } else {
    res.status(404).json({ message: "User not found" });
  }
};

// PUT /Users/:UserId
const updateUser = async (req, res) => {
  const { userId } = req.params;

  const updatedUser = await Car.findOneAndUpdate(
    { _id: userId },
    { ...req.body },
    { new: true }
  );
  if (updatedUser) {
    res.status(200).json(updatedUser);
  } else {
    res.status(404).json({ message: "User not found" });
  }
};

// DELETE /users/:userId
const deleteuser = async (req, res) => {
  const { userId } = req.params;

  const deletedUser = await Car.findOneAndDelete({ _id: userId });
  if (deletedUser) {
    res.status(200).json({ message: "USer deleted successfully" });
  } else {
    res.status(404).json({ message: "User not found" });
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteuser,
};
