const router = require("express").Router();

const {
  createCategory,
  getAllCategory,
  getCategoryById,
  updateCategoryById,
  deleteCategoryById,
} = require("../Controller/categoryController");

// Add Category Routes
router.post("/add-category", createCategory);

// Get All Category Routes
router.get("/get-all-category", getAllCategory);

// Get Perticular Category Routes
router.get("/get-per-category/:id", getCategoryById);

// Update Category Routes
router.put("/update-category/:id", updateCategoryById);

// Delete Category Routes
router.delete("/delete-category/:id", deleteCategoryById);

module.exports = router;
