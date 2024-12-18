<?php
header('Content-Type: application/json');

$conn = new mysqli('localhost', 'username', 'password', 'database');

if ($conn->connect_error) {
  die(json_encode(['success' => false, 'message' => 'Database connection failed']));
}

$data = json_decode(file_get_contents('php://input'), true);

if (isset($data['p_id']) && isset($data['p_name']) && isset($data['p_price']) && isset($data['p_c_id']) && isset($data['p_image']) && isset($data['p_description'])) {
  $p_id = $data['p_id'];
  $p_name = $data['p_name'];
  $p_price = $data['p_price'];
  $p_c_id = $data['p_c_id'];
  $p_image = $data['p_image'];
  $p_description = $data['p_description'];

  $stmt = $conn->prepare('UPDATE products SET p_name = ?, p_price = ?, p_c_id = ?, p_image = ?, p_description = ? WHERE p_id = ?');
  $stmt->bind_param('sssssi', $p_name, $p_price, $p_c_id, $p_image, $p_description, $p_id);

  if ($stmt->execute()) {
    echo json_encode(['success' => true]);
  } else {
    echo json_encode(['success' => false, 'message' => 'Error updating product']);
  }

  $stmt->close();
} else {
  echo json_encode(['success' => false, 'message' => 'Invalid input']);
}

$conn->close();
?>
