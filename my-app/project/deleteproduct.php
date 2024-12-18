<?php

header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, DELETE, PUT");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "Toys";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
  die(json_encode(["success" => false, "message" => "Connection failed: " . $conn->connect_error]));
}

// Handle OPTIONS request for preflight
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
  http_response_code(204);
  exit;
}

// Handle DELETE request
if ($_SERVER["REQUEST_METHOD"] == "DELETE") {
  $data = json_decode(file_get_contents("php://input"), true);

  if (!isset($data['p_id'])) {
    http_response_code(400);
    echo json_encode(["success" => false, "message" => "Product ID is required"]);
    exit();
  }

  $product_id = intval($data['p_id']); 

  $sql = "DELETE FROM product WHERE p_id = $product_id";

  if ($conn->query($sql) === TRUE) {
    echo json_encode(["success" => true, "message" => "Product deleted successfully"]);
  } else {
    http_response_code(500);
    echo json_encode(["success" => false, "message" => "Error: " . $conn->error]);
  }
} else {
  // Handle other HTTP methods or no method provided
  http_response_code(405); // Method Not Allowed
  echo json_encode(["success" => false, "message" => "Method not allowed"]);
}

$conn->close();
?>
