<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$servername = "localhost";
$username = "root";
$password = ""; // Update with your database password
$dbname = "toys";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);

// Check connection
if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
}

// Retrieve GET parameters
$email = mysqli_real_escape_string($conn, $_GET['email']);
$password = mysqli_real_escape_string($conn, $_GET['password']);

// Query to check if email and password match
$sql = "SELECT * FROM users WHERE email='$email' AND password='$password'";
$result = mysqli_query($conn, $sql);

if (mysqli_num_rows($result) == 1) {
  // Login successful
  $response = [
    'success' => true,
    'user' => $email, // You can customize what data to send back
  ];
  echo json_encode($response);
} else {
  // Login failed
  $response = [
    'success' => false,
    'message' => 'Invalid email or password',
  ];
  echo json_encode($response);
}

mysqli_close($conn);
?>
