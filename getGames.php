<?php
header('Content-Type: application/json');

// Database connection settings
$servername = "localhost";
$username = "root"; // Default XAMPP MySQL username
$password = ""; // Default XAMPP MySQL password (usually empty)
$dbname = "different_data";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die(json_encode(["error" => "Connection failed: " . $conn->connect_error]));
}

// Get table and category from query parameters
$table = isset($_GET['table']) ? $_GET['table'] : 'games';
$category = isset($_GET['category']) ? $_GET['category'] : 'story';

// Validate table parameter
$allowed_tables = ['games', 'movies'];
if (!in_array($table, $allowed_tables)) {
    die(json_encode(["error" => "Invalid table parameter"]));
}

// Prepare SQL query with a prepared statement
$stmt = $conn->prepare("SELECT * FROM $table WHERE category = ?");
$stmt->bind_param("s", $category);

// Execute the statement
$stmt->execute();

// Get the result
$result = $stmt->get_result();

// Fetch data and encode to JSON
$data = [];
while ($row = $result->fetch_assoc()) {
    $data[] = $row;
}

// Output JSON
echo json_encode($data);

// Close statement and connection
$stmt->close();
$conn->close();
?>
