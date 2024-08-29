<?php
include("../dbconnect.php");
session_start();
$sessionUser=$_SESSION['id'];
$query="UPDATE users SET status_code=false WHERE user_id=$sessionUser";
mysqli_query($conn,$query);
session_unset();
session_destroy();
header("Location: ../auth/login.php");
exit();