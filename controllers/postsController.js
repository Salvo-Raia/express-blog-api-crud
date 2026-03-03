const recipes = require("../data/recipes");

function index(req, res) {
  const responseData = {
    message: "Index of all posts",
    result: recipes,
    success: true,
  };

  res.json(responseData);
}

function show(req, res) {
  const postId = parseInt(req.params.id);
  const recipe = recipes.find((recipe) => recipe.id === postId);

  if (!recipe) {
    const responseData = {
      message: `Recipe ${postId} not found`,
      success: false,
    };

    res.status(404).json(responseData);
  }

  const responseData = {
    message: `Post ${postId} detail content`,
    result: recipe,
    success: true,
  };

  res.json(responseData);
}

function store(req, res) {
  const responseData = {
    result: `Post Creation`,
    success: true,
  };

  res.json(responseData);
}

module.exports = { index, show, store };
