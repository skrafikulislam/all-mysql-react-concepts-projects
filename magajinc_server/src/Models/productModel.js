// Product Table Creation
const createProductTable = async (db) => {
  try {
    // SQL Query
    const sql = `
        CREATE TABLE IF NOT EXISTS Product (
          id INT AUTO_INCREMENT PRIMARY KEY,
          product_name VARCHAR(100) NOT NULL,
          product_image VARCHAR(255) NOT NULL,
          subcategory_id INT,
          FOREIGN KEY (subcategory_id) REFERENCES Subcategory(id)
            ON DELETE CASCADE
        )
      `;
    await db.query(sql);
    console.log("Product table created or already exists.");
  } catch (err) {
    console.error("Error creating Product table:", err);
  }
};

module.exports = createProductTable;
