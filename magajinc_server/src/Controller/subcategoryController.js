// Connect the Database
const connectDB = require("../Config/db");

// Create SubCategory API
const createSubCategory = async (req, res) => {
  try {
    const { subCategoryName, categoryId } = req.body;

    if (!subCategoryName || !categoryId) {
      // Bad Request
      return res.status(400).json({ msg: "Insufficient data provided." });
    }

    const db = await connectDB();
    // Insert data into SubCategory table
    const sql =
      "INSERT INTO Subcategory (subcategory_name, category_id) VALUES (?, ?)";
    const [result] = await db.query(sql, [subCategoryName, categoryId]);

    // Created
    return res.status(201).json({ msg: "SubCategory created successfully" });
  } catch (err) {
    // Error
    return res.status(500).json({ msg: "Internal server error!!" });
  }
};

// Get All SubCategory API
const getAllSubCategory = async (req, res) => {
  try {
    const db = await connectDB();
    // Fetch data from SubCategory table
    const sql = "SELECT * FROM Subcategory";
    const [result] = await db.query(sql);

    if (result.length !== 0) {
      // Ok
      return res.status(200).json(result);
    }

    // Not Found
    return res.status(404).json({ msg: "SubCategory not exists" });
  } catch (err) {
    // Error
    return res.status(500).json({ msg: "Internal server error!!" });
  }
};

// Get Perticular SubCategory By ID
const getSubCategoryById = async (req, res) => {
  try {
    const db = await connectDB();
    // Fetch perticular data from SubCategory table
    const sql = "SELECT * FROM Subcategory WHERE id = ?";
    const [rows] = await db.query(sql, [req.params.id]);

    if (!rows[0]) {
      // Not Found
      return res.status(404).json({ msg: "SubCategory not found" });
    }

    // Ok
    return res.status(200).json(rows[0]);
  } catch (err) {
    // Error
    return res.status(500).json({ msg: "Internal server error!!" });
  }
};

// Get Perticular SubCategory By Category ID
const getSubCategoryByCategoryId = async (req, res) => {
  try {
    const db = await connectDB();
    // Fetch perticular data from SubCategory table
    const sql = "SELECT * FROM Subcategory WHERE category_id = ?";
    const [rows] = await db.query(sql, [req.params.cId]);

    if (rows.length === 0) {
      // Not Found
      return res.status(404).json({ msg: "SubCategory not found" });
    }

    // Ok
    return res.status(200).json(rows);
  } catch (err) {
    // Error
    return res.status(500).json({ msg: "Internal server error!!" });
  }
};

// Update Perticular SubCategory By ID
const updateSubCategoryById = async (req, res) => {
  try {
    const { subCategoryName, categoryId } = req.body;

    if (!subCategoryName || !categoryId) {
      // Bad Request
      return res.status(400).json({ msg: "Insufficient data provided." });
    }

    const db = await connectDB();
    // Updtate data into SubCategory table
    const sql =
      "UPDATE Subcategory SET subcategory_name = ?, category_id = ? WHERE id = ?";
    const [result] = await db.query(sql, [
      subCategoryName,
      categoryId,
      req.params.id,
    ]);

    // Ok
    return res.status(200).json({ msg: "SubCategory updated successfully" });
  } catch (err) {
    // Error
    return res.status(500).json({ msg: "Internal server error!!" });
  }
};

// Delete Perticular SubCategory By ID
const deleteSubCategoryById = async (req, res) => {
  try {
    const db = await connectDB();
    // Delete data from SubCategory table
    const sql = "DELETE FROM Subcategory WHERE id = ?";
    const [result] = await db.query(sql, [req.params.id]);

    // Ok
    return res.status(200).json({ msg: "SubCategory deleted successfully" });
  } catch (err) {
    // Error
    return res.status(500).json({ msg: "Internal server error!!" });
  }
};

module.exports = {
  createSubCategory,
  getSubCategoryById,
  getAllSubCategory,
  getSubCategoryByCategoryId,
  updateSubCategoryById,
  deleteSubCategoryById,
};
