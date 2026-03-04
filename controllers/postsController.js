const recipes = require("../data/recipes");

function index(req, res) {
  let filteredRecipes = recipes;
  const tagsSearchFilter = req.query.search;

  if (tagsSearchFilter) {
    const lowCaseSearchFilter = tagsSearchFilter.toLowerCase().trim();
    filteredRecipes = recipes.filter((recipe) =>
      recipe.tags.some((tag) =>
        tag.toLowerCase().includes(lowCaseSearchFilter),
      ),
    );
  }
  const responseData = {
    message: "Index of all posts",
    result: filteredRecipes,
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
  const { title, content, image, tags } = req.body;
  const newPostId = recipes[recipes.length - 1].id + 1;
  const newPost = {
    id: newPostId,
    title,
    content,
    image,
    tags,
  };

  recipes.push(newPost);

  const responseData = {
    result: `Post Creation`,
    success: true,
  };

  res.status(201).json(responseData);
  console.log(newPost);
}

function update(req, res) {
  const postId = req.params.id;
  const responseData = {
    result: `Post ${postId} Update`,
    success: true,
  };

  res.json(responseData);
}

function modify(req, res) {
  const postId = req.params.id;
  const responseData = {
    result: `Post ${postId} partial update`,
    success: true,
  };

  res.json(responseData);
}

function destroy(req, res) {
  const postId = parseInt(req.params.id);
  const recipe = recipes.find((recipe) => recipe.id === postId);

  if (!recipe) {
    const responseData = {
      message: `Recipe ${postId} not found`,
      success: false,
    };

    res.status(404).json(responseData);
  }

  recipes.splice(recipes.indexOf(recipe), 1);
  console.log(
    `Post ${postId} successfully deleted. Here you can find the updated posts list:`,
    recipes,
  );
  res.sendStatus(204);
}
module.exports = { index, show, store, update, modify, destroy };
