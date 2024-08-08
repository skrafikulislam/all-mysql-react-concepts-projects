<?php
include 'admin/classes/category.php';
include 'admin/classes/subcategory.php';
include 'admin/classes/product.php';

// Instantiate the Category class
$objCategory = new Category();
$categories = $objCategory->getAllCategory();

// Initialize variables
$selectedCategoryId = null;
$selectedSubCategoryId = null;
$subCategories = [];
$products = [];

// Check if a category is selected
if (isset($_POST['category_id'])) {
    $selectedCategoryId = $_POST['category_id'];

    // Instantiate the SubCategory class
    $objSubCategory = new SubCategory();
    $subCategories = $objSubCategory->getSubCategoriesByCategoryId($selectedCategoryId);
}

// Check if a subcategory is selected
if (isset($_POST['subcategory_id'])) {
    $selectedSubCategoryId = $_POST['subcategory_id'];

    // Instantiate the Product class
    $objProduct = new Product();
    $products = $objProduct->getProductsBySubCategoryId($selectedSubCategoryId);
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <!-- Required meta tags -->
    <meta charset="utf-8" />
    <link rel="icon" href="assets/images/fav.ico" type="image/ico">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <title>MagajINC</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
        }

        .container {
            width: 100%;
            min-height: 100vh;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            flex-direction: column;
        }

        .container #categoryCont,
        .container #subCategoryCont {
            width: 80%;
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 20px 0;
        }

        .container #categoryCont .category,
        .container #subCategoryCont .subCategory {
            list-style: none;
            background-color: blueviolet;
            padding: 8px 20px;
            margin: 20px;
            border-radius: 5px;
            color: #fff;
            font-size: 1.2rem;
            font-weight: 500;
            cursor: pointer;
            text-align: center;
            border-style: none;
            outline: none;
        }

        .container #categoryCont .category:focus,
        .container #subCategoryCont .subCategory:focus {
            outline: none;
        }

        .container #categoryCont .category:active,
        .container #subCategoryCont .subCategory:active {
            outline: none;
        }

        .container #subCategoryCont .subCategory {
            background-color: rgb(156, 0, 117);
            margin-top: 0;
        }

        .container #productCont {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            /* Creates 3 equal-width columns */
            grid-template-rows: repeat(3, 1fr);
            /* Creates 3 equal-height rows */
            gap: 10px;
            /* Optional: space between grid items */
        }

        .container #productCont img {
            width: 250px;
            /* Make images fill the grid cells */
            height: 250px;
            object-fit: cover;
            /* Optional: ensure images cover the area of the grid cell */
        }
    </style>
</head>

<body>
    <div class="container">
        <form method="POST" id="categoryCont">
            <?php foreach ($categories as $c): ?>
                <button type="submit" name="category_id" value="<?= $c['id']; ?>"
                    class="category"><?= $c['category_name']; ?></button>
            <?php endforeach; ?>


            <input type="hidden" name="selectedCategoryId" value="<?= htmlspecialchars($selectedCategoryId); ?>">
        </form>

        <form method="POST" id="subCategoryCont">
            <?php if ($selectedCategoryId && $subCategories): ?>
                <?php foreach ($subCategories as $sc): ?>
                    <button type="submit" name="subcategory_id" value="<?= $sc['id']; ?>"
                        class="subCategory"><?= $sc['subcategory_name']; ?></button>
                <?php endforeach; ?>
            <?php endif; ?>



            <input type="hidden" name="category_id" value="<?= htmlspecialchars($selectedCategoryId); ?>">
            <input type="hidden" name="selectedSubCategoryId" value="<?= htmlspecialchars($selectedSubCategoryId); ?>">
        </form>

        <div id="productCont">
            <?php if ($selectedSubCategoryId && $products): ?>
                <?php foreach ($products as $product): ?>
                    <div class="product">
                        <img draggable="false" src="./admin/assets/images/<?= htmlspecialchars($product['product_image']); ?>"
                            alt="<?= htmlspecialchars($product['product_name']); ?>">
                        <p><?= htmlspecialchars($product['product_name']); ?></p>
                    </div>
                <?php endforeach; ?>
            <?php endif; ?>
        </div>
    </div>
</body>

</html>