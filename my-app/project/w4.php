<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "Toys";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "GET") {
 
  $name = $_GET['c_name'];

  
  $sql = "INSERT INTO category (c_name)
  VALUES ('$name')";

  if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
  } else {
    echo "Error: " . $sql . "<br>" . $conn->error;
  }
}

$conn->close();
?>