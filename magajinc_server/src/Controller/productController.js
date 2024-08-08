// Connect the Database
const connectDB = require("../Config/db");

// Create Product API
const createProduct = async (req, res) => {
  try {
    const { productName, subCategoryId } = req.body;

    if (!productName || !subCategoryId) {
      // Bad Request
      return res.status(400).json({ msg: "Insufficient data provided." });
    }

    const productImage = req.file ? req.file.filename : null; // Get the file name from multer

    const db = await connectDB();
    // Insert data into Product table
    const sql =
      "INSERT INTO Product (product_name, product_image, subcategory_id) VALUES (?, ?, ?)";
    const [result] = await db.query(sql, [
      productName,
      productImage,
      subCategoryId,
    ]);

    // Created
    return res.status(201).json({ msg: "Product created successfully" });
  } catch (err) {
    // Error
    return res.status(500).json({ msg: "Internal server error!!" });
  }
};

// Get All Product API
const getAllProduct = async (req, res) => {
  try {
    const db = await connectDB();
    // Fetch data from Product table
    const sql = "SELECT * FROM Product";
    const [result] = await db.query(sql);

    if (result.length !== 0) {
      // Ok
      return res.status(200).json(result);
    }

    // Not Found
    return res.status(404).json({ msg: "Product not exists" });
  } catch (err) {
    // Error
    return res.status(500).json({ msg: "Internal server error!!" });
  }
};

// Get Perticular Product By ID API
const getProductById = async (req, res) => {
  try {
    const db = await connectDB();
    // Fetch perticular data from Product table
    const sql = "SELECT * FROM Product WHERE id = ?";
    const [rows] = await db.query(sql, [req.params.id]);

    if (!rows[0]) {
      // Not Found
      return res.status(404).json({ msg: "Product not found" });
    }

    // Ok
    return res.status(200).json(rows[0]);
  } catch (err) {
    // Error
    return res.status(500).json({ msg: "Internal server error!!" });
  }
};

// Get Perticular Product By SubCategory ID API
const getProductBySubCategoryId = async (req, res) => {
  try {
    const db = await connectDB();
    // Fetch perticular data from Product table
    const sql = "SELECT * FROM Product WHERE subcategory_id = ?";
    const [rows] = await db.query(sql, [req.params.sId]);

    if (rows.length === 0) {
      // Not Found
      return res.status(404).json({ msg: "Product not found" });
    }

    // Ok
    return res.status(200).json(rows);
  } catch (err) {
    // Error
    return res.status(500).json({ msg: "Internal server error!!" });
  }
};

// Update Perticular Product By ID
const updateProductById = async (req, res) => {
  try {
    const { productName, subCategoryId } = req.body;
    const productImage = req.file ? req.file.filename : null; // Get the file name from multer, if available

    if (!productName || !subCategoryId) {
      // Bad Request
      return res.status(400).json({ msg: "Insufficient data provided." });
    }

    const db = await connectDB();
    // Updtate data into Product table
    const sql = `
      UPDATE Product
      SET product_name = ?, product_image = COALESCE(?, product_image), subcategory_id = ?
      WHERE id = ?`;
    const [result] = await db.query(sql, [
      productName,
      productImage,
      subCategoryId,
      req.params.id,
    ]);

    // Ok
    return res.status(200).json({ msg: "Product updated successfully" });
  } catch (err) {
    // Error
    return res.status(500).json({ msg: "Internal server error!!" });
  }
};

// Delete Perticular Product By ID
const deleteProductById = async (req, res) => {
  try {
    const db = await connectDB();
    // Delete data from Product table
    const sql = "DELETE FROM Product WHERE id = ?";
    const [result] = await db.query(sql, [req.params.id]);

    // Ok
    return res.status(200).json({ msg: "Product deleted successfully" });
  } catch (err) {
    // Error
    return res.status(500).json({ msg: "Internal server error!!" });
  }
};

module.exports = {
  createProduct,
  getProductById,
  getAllProduct,
  getProductBySubCategoryId,
  updateProductById,
  deleteProductById,
};
