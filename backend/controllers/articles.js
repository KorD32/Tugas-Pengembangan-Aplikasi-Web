const articlesModel = require("../models/articles_models");


async function getArticles(req, res) {
    try {
        const { category } = req.query; // Ambil kategori dari query parameter (opsional)
        const articles = await articlesModel.getArticles(category);
        res.json({ message: "Articles retrieved", data: articles });
    } catch (error) {
        console.error("Error fetching articles:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

// Ambil artikel berdasarkan ID
async function getArticleById(req, res) {
    try {
        const { id } = req.params;
        const article = await articlesModel.getArticleById(id);

        if (!article) {
            return res.status(404).json({ message: "Article not found" });
        }

        res.json({ message: "Article found", data: article });
    } catch (error) {
        console.error("Error fetching article:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

// Tambah artikel baru (Hanya Editor & Admin)
async function createArticle(req, res) {
    try {
        const { title, category, author, imageUrl, content } = req.body;

        // Pastikan hanya editor & admin yang bisa menulis artikel
        if (req.user.role !== "editor" && req.user.role !== "admin") {
            return res.status(403).json({ message: "Unauthorized" });
        }

        const result = await articlesModel.createArticle(title, category, author, imageUrl, content);
        res.status(201).json({ message: "Article created successfully", articleId: result.insertId });
    } catch (error) {
        console.error("Error creating article:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

// Update artikel berdasarkan ID (Hanya Editor & Admin)
async function updateArticle(req, res) {
    try {
        const { id } = req.params;
        const { title, category, author, imageUrl, content } = req.body;

        // Pastikan hanya editor & admin yang bisa mengedit artikel
        if (req.user.role !== "editor" && req.user.role !== "admin") {
            return res.status(403).json({ message: "Unauthorized" });
        }

        const result = await articlesModel.updateArticle(id, title, category, author, imageUrl, content);
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "Article not found" });
        }

        res.json({ message: "Article updated successfully" });
    } catch (error) {
        console.error("Error updating article:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

// Hapus artikel berdasarkan ID (Hanya Admin)
async function deleteArticle(req, res) {
    try {
        const { id } = req.params;

        // Pastikan hanya admin yang bisa menghapus artikel
        if (req.user.role !== "admin") {
            return res.status(403).json({ message: "Unauthorized" });
        }

        const result = await articlesModel.deleteArticle(id);
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "Article not found" });
        }

        res.json({ message: "Article deleted successfully" });
    } catch (error) {
        console.error("Error deleting article:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

module.exports = {
    getArticles,
    getArticleById,
    createArticle,
    updateArticle,
    deleteArticle,
};