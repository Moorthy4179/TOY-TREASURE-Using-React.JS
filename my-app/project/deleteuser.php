<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, DELETE, PUT");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");

$servername = "localhost";
$username = "root";
$password = " ";
$dbname = "toys";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);

// Check connection
if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
}

// Handle OPTIONS request for preflight
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
  http_response_code(204);
  exit;
}

// Handle DELETE request
if ($_SERVER['REQUEST_METHOD'] == 'DELETE') {
  $input = file_get_contents("php://input");
  $data = json_decode($input, true);

  if (isset($data['userId'])) {
    $userId = intval($data['userId']);

    $sql = "DELETE FROM users WHERE id = '$userId'";

    if (mysqli_query($conn, $sql)) {
      echo json_encode(array("message" => "User deleted successfully"));
    } else {
      http_response_code(500);
      echo json_encode(array("error" => "Error deleting user: " . mysqli_error($conn)));
    }
  } else {
    http_response_code(400);
    echo json_encode(array("error" => "Invalid input"));
  }
} else {
  // Handle other HTTP methods or no method provided
  http_response_code(405); // Method Not Allowed
  echo json_encode(array("error" => "Method not allowed"));
}

mysqli_close($conn);
?>
