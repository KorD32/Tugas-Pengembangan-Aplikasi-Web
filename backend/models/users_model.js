const connection = require("../database/db");

async function users() {
  const [result] = await connection.execute("SELECT * FROM users");
  return result; // Mengembalikan semua pengguna
}

async function userDetailByID(id) {
  try {
    console.log("Fetching user with ID:", id);
    const [rows] = await connection.execute(
      "SELECT * FROM users WHERE id = ?",
      [id]
    );

    console.log("Query result:", rows); // Tambahkan log hasil query

    if (!rows || rows.length === 0) {
      console.log("User not found");
      return null; // Jika tidak ada hasil, kembalikan null
    }

    return rows[0]; // Kembalikan baris pertama
  } catch (error) {
    console.error("Error in userDetailByID:", error);
    throw error; // Lempar error untuk ditangani di controller
  }
}

module.exports = {
  users,
  userDetailByID,
};