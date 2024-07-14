<?php 
/*$servername = "localhost";
$username = "root";
$password = "";
$dbname = "login";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Retrieve form data
$email = $_POST['email'];
$password = $_POST['password'];

// Prepare and bind
$stmt = $conn->prepare("SELECT id, name, password FROM users WHERE email = ?");
$stmt->bind_param("s", $email);
$stmt->execute();
$stmt->store_result();
$stmt->bind_result($id, $name, $hashed_password);
$stmt->fetch();

// Check if user exists and verify password
if ($stmt->num_rows == 1 && password_verify($password, $hashed_password)) {
    // Start session and redirect to homepage
    session_start();
    $_SESSION['id'] = $id;
    $_SESSION['name'] = $name;
    header("Location: homepage.php");
    exit();
} else {
    echo "Invalid email or password.";
}

$stmt->close();
$conn->close();
?>
*/
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "login";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Retrieve form data
$email = $_POST['email'];
$password = $_POST['password'];

// Prepare and bind
$stmt = $conn->prepare("SELECT id, name, password FROM users WHERE email = ?");
$stmt->bind_param("s", $email);
$stmt->execute();
$stmt->store_result();
$stmt->bind_result($id, $name, $hashed_password);
$stmt->fetch();

// Check if user exists and verify password
if ($stmt->num_rows == 1 && password_verify($password, $hashed_password)) {
    // Start session and redirect to homepage
    session_start();
    $_SESSION['id'] = $id;
    $_SESSION['name'] = $name;
    header("Location: home.html");
    exit();
} else {
    echo "<script>alert('Invalid email or password.');</script>";
    echo "<script>window.location.href = 'index.php#signin';</script>";
}

$stmt->close();
$conn->close();
?>
