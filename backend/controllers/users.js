const usersModel = require("../models/users_model");

async function users(req, res) {
  try {
    const result = await usersModel.users();
    console.log(result);
    res.json({ results: result });
  } catch (err) {
    console.log(err);
  }
}

async function userDetailByID(req, res) {
  const { id } = req.params;
  const result = await usersModel.usersDetailByID(id);
  if(result.length <= 0) {
    res.json({
      message: "User not found",
    });
    return;
  }
  res.json({
    message: "User found",
    data: result[0],
  });
}

async function registerUser(req, res) {
  try {
    const { username, password, email, address, phone_number } = req.body;

    if (!username || !password || !email || !address || !phone_number) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newUser = {
      username,
      password,
      email,
      address,
      phone_number,
      role: "user", // Default role
    };

    const result = await usersModel.createUser(newUser);

    res.status(201).json({
      message: "User successfully registered",
      userId: result.insertId,
    });
  } catch (error) {
    console.error("Error in registerUser:", error);
    res.status(500).json({
      message: "Internal server error",
    });
  }
}

async function updateUser(req, res) {
  try {
    const { id } = req.params;
    const { username, password, email, address, phone_number, role } = req.body;

    const updateUser = {
      username,
      password,
      email,
      address,
      phone_number,
      role,
    };
    const result = await usersModel.updateUserByID(id, updateUser);
    if (result.affectedRows === 0){
      return res.status(404).json({message: "User not found"});
    }
    res.json({
      message: "User updated successfully",
    });
  } catch(error){
    console.error(error);
    res.status(500).json({
      message: "Internal server error",
    });
  }
}

module.exports = {
  users,
  userDetailByID,
  registerUser,
  updateUser,
};