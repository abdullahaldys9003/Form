<?php
  $servername = "localhost:3306";
  $username_conn = "root";
  $password_conn = "root";
  $database = "databasepro";
  
  $conn = mysqli_connect($servername,$username_conn,$password_conn,$database);
  
  if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}


?>
