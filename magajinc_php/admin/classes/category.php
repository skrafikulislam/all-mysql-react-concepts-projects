<?php

class Category
{
    protected $id = "";
    protected $category_name = "";
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

    function setCategoryName($category_name)
    {
        $this->category_name = $category_name;
    }

    function getCategoryName()
    {
        return $this->category_name;
    }

    //get doctors according to name
    public function getAllCategory()
    {
        $stmt = $this->conn->prepare('SELECT * FROM category');

        try {
            if ($stmt->execute()) {
                $category = $stmt->fetchAll(PDO::FETCH_ASSOC);
                return $category;
            }
        } catch (Exception $e) {
            echo $e->getMessage();
        }
    }

    public function getCategoryById()
    {
        $stmt = $this->conn->prepare('SELECT * FROM category WHERE id=:id');

        try {
            if ($stmt->execute()) {
                $category = $stmt->fetchAll(PDO::FETCH_ASSOC);
                return $category;
            }
        } catch (Exception $e) {
            echo $e->getMessage();
        }
    }
}
