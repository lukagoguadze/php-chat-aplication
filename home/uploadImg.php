<?php
    include("../dbconnect.php");

function updateImage($conn){
    session_start();
    
    $user_id = $_SESSION['id'];
    
    if (isset($_POST["submit"])) {
        $file_name = $_FILES["imgFile"]["name"];
        $tempname = $_FILES["imgFile"]["tmp_name"];
        $folder = "../images/" . $file_name;

        $sql = "UPDATE users SET user_image='$file_name' WHERE user_id=$user_id";
        if (mysqli_query($conn, $sql)) {
            if (move_uploaded_file($tempname, $folder)) {
                // echo "Success: File uploaded successfully";
            } else {
                // echo "Error: File upload failed";
            }
        } else {
            // echo "Error: Database update failed";
        }
    }
}

updateImage($conn);