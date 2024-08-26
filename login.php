<?php
session_start();

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "users_database";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$username = $_POST['username'];
$password = $_POST['password'];

$sql = "SELECT id, password FROM users WHERE username=?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("s", $username);
$stmt->execute();
$stmt->store_result();
$stmt->bind_result($id, $hashed_password);

if ($stmt->num_rows > 0) {
    $stmt->fetch();
    if (password_verify($password, $hashed_password)) {
        $_SESSION['userid'] = $id;
        $_SESSION['username'] = $username;
        echo "Login successful. Welcome, " . $username . "!";
    } else {
        echo "Invalid password.";
    }
} else {
    echo "No user found with that username.";
}

$stmt->close();
$conn->close();
?>
