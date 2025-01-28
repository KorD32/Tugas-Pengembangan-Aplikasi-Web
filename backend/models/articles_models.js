const connection = require("../database/db");

async function getArticles(category = null) {
    let query = "SELECT * FROM articles";
    let values = [];

    if (category) {
        query += " WHERE category = ?";
        values.push(category);
    }

    const [result] = await connection.execute(query, values);
    return result;
}


async function getArticleById(id) {
    const [result] = await connection.execute(
        "SELECT * FROM articles WHERE id = ?",
        [id]
    );
    return result.length > 0 ? result[0] : null;
}


async function createArticle(title, category, author, imageUrl, content) {
    const [result] = await connection.execute(
        "INSERT INTO articles (title, category, author, image_url, content, created_at) VALUES (?, ?, ?, ?, ?, NOW())",
        [title, category, author, imageUrl, content]
    );
    return result;
}


async function updateArticle(id, title, category, author, imageUrl, content) {
    const [result] = await connection.execute(
        "UPDATE articles SET title = ?, category = ?, author = ?, image_url = ?, content = ?, updated_at = NOW() WHERE id = ?",
        [title, category, author, imageUrl, content, id]
    );
    return result;
}

// Hapus artikel berdasarkan ID
async function deleteArticle(id) {
    const [result] = await connection.execute(
        "DELETE FROM articles WHERE id = ?",
        [id]
    );
    return result;
}

module.exports = {
    getArticles,
    getArticleById,
    createArticle,
    updateArticle,
    deleteArticle,
}