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
      role: "user", 
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
      console.log("Received data:", req.body); 
      const { id } = req.params;
      const { username, email, phone_number, address } = req.body;

      if (!id) {
          return res.status(400).json({ message: "User ID is required" });
      }

      
      const updatedUser = {
          username: username || null,
          email: email || null,
          phone_number: phone_number || null,
          address: address || null,
      };

      
      console.log("Data to update:", updatedUser);

      
      const result = await usersModel.updateUserByID(id, updatedUser);

      if (result.affectedRows === 0) {
          return res.status(404).json({ message: "User not found" });
      }

      res.json({ message: "User updated successfully" });
  } catch (error) {
      console.error("Error updating user:", error);
      res.status(500).json({ message: "Internal server error" });
  }
}
async function updatePassword(req, res) {
  try {
      const { id } = req.params; // Ambil ID dari parameter URL
      const { oldPassword, newPassword } = req.body; // Ambil password lama dan baru dari body

      if (!id || !oldPassword || !newPassword) {
          return res.status(400).json({ message: "All fields are required" });
      }

      // Ambil data user berdasarkan ID
      const user = await usersModel.userDetailByID(id);
      if (!user) {
          return res.status(404).json({ message: "User not found" });
      }

      // Periksa apakah password lama cocok
      if (user.password !== oldPassword) {
          return res.status(401).json({ message: "Old password is incorrect" });
      }

      // Update password baru
      const result = await usersModel.updatePasswordByID(id, newPassword);
      if (result.affectedRows === 0) {
          return res.status(400).json({ message: "Failed to update password" });
      }

      res.json({ message: "Password updated successfully" });
  } catch (error) {
      console.error("Error updating password:", error);
      res.status(500).json({ message: "Internal server error" });
  }
}

module.exports = {
  users,
  userDetailByID,
  registerUser,
  updateUser,
  updatePassword,
};