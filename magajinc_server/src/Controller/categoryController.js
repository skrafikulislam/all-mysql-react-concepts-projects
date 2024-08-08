// Connect the Database
const connectDB = require("../Config/db");

// Create Category API
const createCategory = async (req, res) => {
  try {
    const { categoryName } = req.body;

    if (!categoryName) {
      // Bad Request
      return res.status(400).json({ msg: "Insufficient data provided." });
    }

    const db = await connectDB();
    // Insert data into Category table
    const sql = "INSERT INTO Category (category_name) VALUES (?)";
    const [result] = await db.query(sql, [categoryName]);

    // Created
    return res.status(201).json({ msg: "Category created successfully" });
  } catch (err) {
    // Error
    return res.status(500).json({ msg: "Internal server error!!" });
  }
};

// Get All Category API
const getAllCategory = async (req, res) => {
  try {
    const db = await connectDB();
    // Fetch data from Category table
    const sql = "SELECT * FROM Category";
    const [result] = await db.query(sql);

    if (result.length !== 0) {
      // Ok
      return res.status(200).json(result);
    }

    // Not Found
    return res.status(404).json({ msg: "Category not exists" });
  } catch (err) {
    // Error
    return res.status(500).json({ msg: "Internal server error!!" });
  }
};

// Get Perticular Category By ID API
const getCategoryById = async (req, res) => {
  try {
    const db = await connectDB();
    // Fetch perticular data from Category table
    const sql = "SELECT * FROM Category WHERE id = ?";
    const [rows] = await db.query(sql, [req.params.id]);

    if (!rows[0]) {
      // Not Found
      return res.status(404).json({ msg: "Category not found" });
    }

    // Ok
    return res.status(200).json(rows[0]);
  } catch (err) {
    // Error
    return res.status(500).json({ msg: "Internal server error!!" });
  }
};

// Update Perticular Category By ID API
const updateCategoryById = async (req, res) => {
  try {
    const { categoryName } = req.body;

    if (!categoryName) {
      // Bad Request
      return res.status(400).json({ msg: "Insufficient data provided." });
    }

    const db = await connectDB();
    // Updtate data into Category table
    const sql = "UPDATE Category SET category_name = ? WHERE id = ?";
    const [result] = await db.query(sql, [categoryName, req.params.id]);

    // Ok
    return res.status(200).json({ msg: "Category updated successfully" });
  } catch (err) {
    // Error
    return res.status(500).json({ msg: "Internal server error!!" });
  }
};

// Delete Perticular Category By ID API
const deleteCategoryById = async (req, res) => {
  try {
    const db = await connectDB();
    // Delete data from Category table
    const sql = "DELETE FROM Category WHERE id = ?";
    const [result] = await db.query(sql, [req.params.id]);

    // Ok
    return res.status(200).json({ msg: "Category deleted successfully" });
  } catch (err) {
    // Error
    return res.status(500).json({ msg: "Internal server error!!" });
  }
};

module.exports = {
  createCategory,
  getCategoryById,
  getAllCategory,
  updateCategoryById,
  deleteCategoryById,
};
