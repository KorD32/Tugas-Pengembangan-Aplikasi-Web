const connection = require("../database/db");

async function users() {
  const [result] = await connection.execute("SELECT * FROM users");
  return result; 
}

async function userDetailByID(id) {
  try {
    console.log("Fetching user with ID:", id);
    const [rows] = await connection.execute(
      "SELECT * FROM users WHERE id = ?",
      [id]
    );

    console.log("Query result:", rows); 

    if (!rows || rows.length === 0) {
      console.log("User not found");
      return null; 
    }

    return rows[0]; 
  } catch (error) {
    console.error("Error in userDetailByID:", error);
    throw error; 
  }
}

async function userDetailByEmail(email) {
  try {
    console.log("Fetching user with email:", email);
    const [rows] = await connection.execute(
      "SELECT * FROM users WHERE email = ?",
      [email]
    );

    console.log("Query result:", rows); 

    if (!rows || rows.length === 0) {
      console.log("User not found");
      return null; 
    }

    return rows[0]; 
  } catch (error) {
    console.error("Error in userDetailByEmail:", error);
    throw error; 
  } 
}

async function createUser(user) {
  try {
    const { username, password, email, address, phone_number, role } = user;

    const [result] = await connection.execute(
      `INSERT INTO users 
      (username, password, email, address, phone_number, role, created_at, updated_at) 
      VALUES (?, ?, ?, ?, ?, ?, NOW(), NOW())`,
      [username, password, email, address, phone_number, role]
    );

    return result;
  } catch (error) {
    console.error("Error in createUser:", error);
    throw error;
  }
}

async function updateUserByID(id, user) {
  const { username, email, phone_number, address } = user;

  const [result] = await connection.execute(
      `UPDATE users SET 
       username = ?, 
       email = ?, 
       phone_number = ?, 
       address = ?, 
       updated_at = NOW() 
       WHERE id = ?`,
      [username, email, phone_number, address, id]
  );

  return result;
}
async function updatePasswordByID(id, newPassword) {
  const [result] = await connection.execute(
      `UPDATE users SET password = ?, updated_at = NOW() WHERE id = ?`,
      [newPassword, id]
  );
  return result;
}

async function deleteUserByID(id) {
  try {
    const [orderResult] = await connection.execute(
      "DELETE FROM orderdetail WHERE user_id = ?",
      [id]
    );

    console.log("Order deletion result:", orderResult);


    const [userResult] = await connection.execute(
      "DELETE FROM users WHERE id = ?",
      [id]
    );

    console.log("User deletion result:", userResult); 

    return [userResult]; 
  } catch (error) {
    console.error("Error in deleteUserByID:", error);
    throw error;
  }
}

module.exports = {
  users,
  userDetailByID,
  createUser,
  updateUserByID,
  updatePasswordByID,
  deleteUserByID,
  userDetailByEmail,
};