require("dotenv").config({ path: "../.env" });

// Import DB
const connectDB = require("./Config/db");
// Import Category Table
const createCategoryTable = require("./Models/categoryModel");
// Import SubCategory Table
const createSubCategoryTable = require("./Models/subCategoryModel");
// Import Product Table
const createProductTable = require("./Models/productModel");

const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 8000;

// Database Connection and Table Creation
connectDB()
  .then((db) => {
    createCategoryTable(db);
    createSubCategoryTable(db);
    createProductTable(db);
  })
  .catch((err) => {
    console.error(err);
  });

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Cors Origin Policy
app.use(cors({ origin: "*" }));

/* ------ All Routes ------ */
const CategoryRoutes = require("./Routes/categoryRoutes");
const SubCategoryRoutes = require("./Routes/subcategoryRoutes");
const ProductRoutes = require("./Routes/productRoutes");

app.get("/", (req, res) => {
  res.status(200).send("<h1>Welcome to MagajINC Server</h1>");
});

// Category API
app.use("/api/v1/category", CategoryRoutes);
// SubCategory API
app.use("/api/v1/subcategory", SubCategoryRoutes);
// Product API
app.use("/api/v1/product", ProductRoutes);

// Not Routing Pages
app.all("*", (req, res) => {
  return res.status(404).json({ msg: "`~` API Not Found `~`" });
});

// Listening Port
app.listen(PORT, () => {
  console.log(`Server listening at PORT : ${PORT}`);
});
