<?php
header("Content-Type: application/json");
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

if ($_SERVER["REQUEST_METHOD"] == "GET") {
  $name = $_GET['name'];
  $email = $_GET['email'];
  $address = $_GET['address'];
  $pincode = $_GET['pincode'];
  $phoneno = $_GET['phoneno'];
  $password = $_GET['password'];

  $sql = "INSERT INTO users (name, email, address, pincode, phoneno, password)
  VALUES ('$name', '$email', '$address', '$pincode', '$phoneno', '$password')";

  if ($conn->query($sql) === TRUE) {
    echo json_encode(["success" => true, "message" => "New record created successfully"]);
  } else {
    echo json_encode(["success" => false, "message" => "Error: " . $sql . "<br>" . $conn->error]);
  }
}

$conn->close();
?>
