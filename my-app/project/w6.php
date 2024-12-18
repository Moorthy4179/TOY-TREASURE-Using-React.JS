<?php
header('Content-Type: application/json');
header("Access-Control-Allow-Origin: *");
$servername = "localhost";
$username = "root";
$password = " ";
$dbname = "toys";
$conn = mysqli_connect($servername, $username, $password, $dbname);
// Check connection
if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
}
$sql = "SELECT * from product";

$result = mysqli_query($conn, $sql);
$emparray = array();
    while($row =mysqli_fetch_assoc($result))
    {
        $emparray[] = $row;
        
    }
    
    echo json_encode($emparray);
// if (mysqli_num_rows($result) > 0) {
//   // output data of each row
//   while($row = mysqli_fetch_assoc($result)) {
//     echo "id: " . $row["id"]. " - Name: " . $row["firstname"]. " " . $row["lastname"]. "<br>";
//   }
// } else {
//   echo "0 results";
// }

mysqli_close($conn);
?>