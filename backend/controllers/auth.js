  const usersModel = require("../models/users_model");
  const jwt = require("jsonwebtoken");

  async function login(req, res) {
      try {
        const { id, password } = req.body;
    
        console.log("Login request received:", req.body);
    
        const user = await usersModel.userDetailByID(id);
        console.log("Fetched user:", user);
    
        if (!user) {
          return res.status(404).json({ message: "User not found" });
        }
    
        if (user.password !== password) {
          return res.status(401).json({ message: "Invalid password" });
        }
    
        const token = jwt.sign({ id: user.id, name: user.username }, "sio12345", {
          expiresIn: "2 days",
        });
    
        res.json({
          message: "Login success",
          id: user.id,
          token: token,
          username: user.username,
          email: user.email,
          address: user.address,
          phone_number: user.phone_number,


        });
      } catch (error) {
        console.error("Error during login:", error);
        res.status(500).json({ message: "Internal server error" });
      }
    }
  async function userDetailByID(req, res) {
      try {
        const { id } = req.params;
    
        // Ambil detail pengguna berdasarkan ID
        const user = await usersModel.userDetailByID(id);
    
        if (!user) {
          return res.status(404).json({ message: "User not found" });
        }
    
        res.json({
          message: "User found",
          data: user,
        });
      } catch (error) {
        console.error("Error during user detail retrieval:", error);
        res.status(500).json({ message: "Internal server error" });
      }
    }
    
    module.exports = {
      login,
      userDetailByID,
    };