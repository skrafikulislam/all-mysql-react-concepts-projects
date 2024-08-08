<?php

class Product
{
    protected $id = "";
    protected $product_name = "";
    protected $product_image = "";
    protected $subcategory_id = "";
    public $conn;


    function __construct()
    {
        include_once 'config/Dbconnect.php';
        $db = new database();
        $this->conn = $db->connect();
    }


    function setId($id)
    {
        $this->id = $id;
    }
    function getId()
    {
        return $this->id;
    }

    function setProductName($product_name)
    {
        $this->product_name = $product_name;
    }

    function getProductName()
    {
        return $this->product_name;
    }

    function setProductImage($product_image)
    {
        $this->product_image = $product_image;
    }

    function getProductImage()
    {
        return $this->product_image;
    }

    public function getProductsBySubCategoryId($subcategoryId)
    {
        $stmt = $this->conn->prepare("SELECT * FROM product WHERE subcategory_id = ?");
        $stmt->execute([$subcategoryId]);
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }
}
