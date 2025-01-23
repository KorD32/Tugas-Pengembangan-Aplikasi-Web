const connection = require("../database/db");

async function createOrder(req, res) {
  const { user_id, product_id, product_name, price, quantity, status } = req.body;

  if (!user_id || !product_id || !product_name || !price || !quantity) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const [result] = await connection.execute(
      `INSERT INTO orderdetail (user_id, product_id, product_name, price, quantity, status) 
       VALUES (?, ?, ?, ?, ?, ?)`,
      [user_id, product_id, product_name, price, quantity, status || "pending"]
    );
    res.status(201).json({ message: "Order created successfully", orderId: result.insertId });
  } catch (error) {
    console.error("Error creating order:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

async function getUserOrders(req, res) {
  const { user_id } = req.params;

  try {
    const [orders] = await connection.execute(
      `SELECT * FROM orderdetail WHERE user_id = ? ORDER BY created_at DESC`,
      [user_id]
    );
    res.status(200).json(orders);
  } catch (error) {
    console.error("Error fetching user orders:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

module.exports = { createOrder, getUserOrders };