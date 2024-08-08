const router = require("express").Router();

const {
  createSubCategory,
  getAllSubCategory,
  getSubCategoryById,
  updateSubCategoryById,
  deleteSubCategoryById,
  getSubCategoryByCategoryId,
} = require("../Controller/subcategoryController");

// Add SubCategory Routes
router.post("/add-subcategory", createSubCategory);

// Get All SubCategory Routes
router.get("/get-all-subcategory", getAllSubCategory);

// Get Perticular SubCategory Routes
router.get("/get-per-subcategory/:id", getSubCategoryById);

// Get Perticular SubCategory By Category Routes
router.get("/get-subcategory-category/:cId", getSubCategoryByCategoryId);

// Update SubCategory Routes
router.put("/update-subcategory/:id", updateSubCategoryById);

// Delete SubCategory Routes
router.delete("/delete-subcategory/:id", deleteSubCategoryById);

module.exports = router;
