const router = require("express").Router();
const uploadProduct = require("../Upload/productImageUpload"); // Import the multer configuration
const path = require("path");

const {
  createProduct,
  getAllProduct,
  getProductById,
  updateProductById,
  deleteProductById,
  getProductBySubCategoryId,
} = require("../Controller/productController");

// Route to add a product with image upload
router.post("/add-product", uploadProduct, createProduct);

// Route to get all products
router.get("/get-all-product", getAllProduct);

// Route to get a particular product by ID
router.get("/get-per-product/:id", getProductById);

// Route to get products by subcategory ID
router.get("/get-product-subcategory/:sId", getProductBySubCategoryId);

// Route to update a product by ID with optional image upload
router.put("/update-product/:id", uploadProduct, updateProductById);

// Route to delete a product by ID
router.delete("/delete-product/:id", deleteProductById);

/* ---------- Fetch Image Statically ---------- */
router.get("/product-image/:image", (req, res) => {
  return res
    .status(200)
    .sendFile(path.join(__dirname, `../Assets/${req?.params?.image}`));
});

module.exports = router;
