// SubCategory Table Creation
const createSubCategoryTable = async (db) => {
  try {
    // SQL Query
    const sql = `
        CREATE TABLE IF NOT EXISTS Subcategory (
            id INT AUTO_INCREMENT PRIMARY KEY,
            subcategory_name VARCHAR(100) NOT NULL,
            category_id INT,
            FOREIGN KEY (category_id) REFERENCES Category(id)
            ON DELETE CASCADE
      )
          `;
    await db.query(sql);
    console.log("SubCategory table created or already exists.");
  } catch (err) {
    console.error("Error creating SubCategory table:", err);
  }
};

module.exports = createSubCategoryTable;
