<?php
session_start();
include("../dbconnect.php");

function changePassword($conn) {
    $data = json_decode(file_get_contents("php://input"),true);
    $getUserId = $_SESSION['id'];
    $password = $data["oldPassword"] ?? '';
    $newPassword = $data["newPassword"] ?? '';
    $repeatPassword = $data["newRepeatPassword"] ?? '';
    if($newPassword==$repeatPassword){
    $sql = "SELECT * FROM users WHERE user_id=?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("i", $getUserId);
    $stmt->execute();
    $result = $stmt->get_result();
    $data = $result->fetch_assoc();
    
    if ($data) {
      $hashed_password=password_hash($newPassword,PASSWORD_DEFAULT);        
        if (password_verify($password, $data['user_password'])) {
            $update_query = "UPDATE users SET user_password=? WHERE user_id=?";
            $update_stmt = $conn->prepare($update_query);
            $update_stmt->bind_param("si", $hashed_password, $getUserId);
            
            if ($update_stmt->execute()) {
                echo json_encode(['success' => 'password updated successfull :).']);
            } else {
                echo json_encode(['error' => 'fail to update password :(']);
            }
        } else {
            echo json_encode(['error' => 'incorect old password :(']);
        }
    } 
    else {
        echo json_encode(['error' => 'user not found dzama :(']);
    }
}else{
    echo json_encode(['error' => 'password does not mutch :(']);
}
}
changePassword($conn);
