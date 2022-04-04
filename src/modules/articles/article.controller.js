const article = require('./article.model');

const getAllArticles = async (_, res) => {
  try {
    const articles = await article.find();
    res.status(200).json(articles);
  } catch (e) {
    res.status(500).json(e);
  }
};

const getSingleArticle = async (req, res) => {
  try {
    const single = await article.findById(req.params.id);

    res.status(200).json(single);
  } catch (e) {
    res.status(500).json(e);
  }
};

const createArticle = async (req, res) => {
  try {
    const { title, description, body, author } = req.body;

    await article.create({ title, description, body, author });
    res.status(200).json('Successfully created article');
  } catch (e) {
    res.status(500).json(e);
  }
};

const updateArticle = async (req, res) => {
  try {
    const updated = await article.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(updated);
  } catch (e) {
    res.status(500).json(e);
  }
};

const deleteArticle = async (req, res) => {
  try {
    await article.findByIdAndDelete(req.params.id);
    res.status(200).json('Successfully deleted article');
  } catch (e) {
    res.status(500).json(e);
  }
};

module.exports = {
  getAllArticles,
  getSingleArticle,
  createArticle,
  deleteArticle,
  updateArticle,
};
