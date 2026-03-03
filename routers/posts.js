const express = require("express");
const router = express.Router();
const postsController = require("../controllers/postsController");

// Index
router.get("/", postsController.index);

// Show
router.get("/:id", postsController.show);

// Store
router.post("/", postsController.store);

// Update
router.put("/:id", (req, res) => {
  const postId = req.params.id;
  const responseData = {
    result: `Post ${postId} Update`,
    success: true,
  };

  res.json(responseData);
});

// Modify
router.patch("/:id", (req, res) => {
  const postId = req.params.id;
  const responseData = {
    result: `Post ${postId} partial update`,
    success: true,
  };

  res.json(responseData);
});

// Destroy
router.delete("/:id", (req, res) => {
  const postId = req.params.id;
  const responseData = {
    result: `Post ${postId} delete`,
    success: true,
  };

  res.json(responseData);
});

module.exports = router;
