const connection = require("../database/db");

async function getProductsByCategory(category) {
    console.log("Fetching products for category:", category);
    const [result] = await connection.execute(
        `SELECT * FROM products WHERE category = ?`,
        [category]
    );
    console.log("Query result:", result);
    return result;
}

async function getProductsById(id) {
    console.log("Fetching product for id:", id);
    const [result] = await connection.execute(
        `SELECT * FROM products WHERE id = ?`,
        [id]
    );
    console.log("Query result:", result);
    return result;
}

async function getRandomProducts(limit) {
    console.log("Fetching random products with limit:", limit);
    const [result] = await connection.execute(
        `SELECT * FROM products ORDER BY RAND() LIMIT ?`,
        [limit]
    );
    return result;
}

module.exports = { getProductsByCategory, getProductsById, getRandomProducts };