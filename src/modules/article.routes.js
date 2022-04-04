const router = require("express").Router();
const articleController = require("./article.controller");

router
  .route("/")
  .get(articleController.getAllArticles)
  .post(articleController.createArticle);
router
  .route("/:id")
  .get(articleController.getSingleArticle)
  .delete(articleController.deleteArticle);

module.exports = router;
