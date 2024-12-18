<?php
header("Content-Type: application/json");
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "Toys";


$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
  die(json_encode(["success" => false, "message" => "Connection failed: " . $conn->connect_error]));
}
if ($_SERVER["REQUEST_METHOD"] == "GET") {
  $name = mysqli_real_escape_string($conn, $_GET['name']);
  $price = floatval($_GET['price']); // Convert to float
  $description = mysqli_real_escape_string($conn, $_GET['description']);
  $image = mysqli_real_escape_string($conn, $_GET['image']);
  $category_id = intval($_GET['category_id']); 

 
  $sql = "INSERT INTO product (p_name, p_price, p_description, p_image, p_c_id)
          VALUES ('$name', '$price', '$description', '$image', '$category_id')";

  
  if ($conn->query($sql) === TRUE) {
    echo json_encode(["success" => true, "message" => "New product added successfully"]);
  } else {
    echo json_encode(["success" => false, "message" => "Error: " . $sql . "<br>" . $conn->error]);
  }
}

$conn->close();
?>
