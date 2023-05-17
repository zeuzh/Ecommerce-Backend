const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

// find all categories
router.get("/", async (req, res) => {
  // be sure to include its associated Products
  try {
    const categoryData = await Category;

    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

// find one category by its `id` value
router.get("/:id", async (req, res) => {
  try {
    // be sure to include its associated Products
    const categoryData = await Category;

    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

// create a new category
router.post("/", async (req, res) => {
  try {
    const categoryData = await Category.create(req.body);
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

// update a category by its `id` value
router.put("/:id", async (req, res) => {
  try {
    const categoryData = await Category;

    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

// delete a category by its `id` value
router.delete("/:id", async (req, res) => {
  try {
    const categoryData = await Category;

    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

module.exports = router;
