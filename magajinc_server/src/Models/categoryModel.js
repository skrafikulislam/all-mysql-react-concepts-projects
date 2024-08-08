// Category Table Creation
const createCategoryTable = async (db) => {
  try {
    // SQL Query
    const sql = `
          CREATE TABLE IF NOT EXISTS Category (
            id INT AUTO_INCREMENT PRIMARY KEY,
            category_name VARCHAR(100) NOT NULL
          )
        `;
    await db.query(sql);
    console.log("Category table created or already exists.");
  } catch (err) {
    console.error("Error creating Category table:", err);
  }
};

module.exports = createCategoryTable;
