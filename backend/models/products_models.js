const connection = require("../database/db");

async function getProductsByCategory(category) {
    console.log("Fetching products for category:", category); // Log kategori
    const [result] = await connection.execute(
        `SELECT * FROM products WHERE category = ?`,
        [category]
    );
    console.log("Query result:", result); // Log hasil query
    return result;
}

module.exports = { getProductsByCategory };