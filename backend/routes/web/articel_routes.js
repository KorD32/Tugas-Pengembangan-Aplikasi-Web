const express = require("express");
const router = express.Router();
const articlesController = require("../../controllers/articles");
const authenticateToken = require("../../middlware/auth");

router.get("/", articlesController.getArticles);
router.get("/:id", articlesController.getArticleById);
router.post("/", authenticateToken, articlesController.createArticle);
router.put("/:id", authenticateToken, articlesController.updateArticle);
router.delete("/:id", authenticateToken, articlesController.deleteArticle);

module.exports = router;