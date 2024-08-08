<?php

class SubCategory
{
    protected $id = "";
    protected $subcategory_name = "";

    protected $category_id = "";
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

    function setSubCategoryName($subcategory_name)
    {
        $this->subcategory_name = $subcategory_name;
    }

    function getSubCategoryName()
    {
        return $this->subcategory_name;
    }

    function categoryId($category_id)
    {
        $this->category_id = $category_id;
    }

    function getCategoryId()
    {
        return $this->category_id;
    }

    public function getSubCategoriesByCategoryId($categoryId)
    {
        $stmt = $this->conn->prepare("SELECT * FROM subcategory WHERE category_id = ?");
        $stmt->execute([$categoryId]);
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }
}
