<?php

include("../dbconnect.php");
session_start();
function sendMessage($conn){
$data = json_decode(file_get_contents("php://input"));

if (!empty($data->message) && !empty($data->sender_id) && !empty($data->receiver_id)) {
    $message = $data->message;
    $sender_id = $data->sender_id;
    $receiver_id = $data->receiver_id;

    $query_message = "INSERT INTO messages (message) VALUES ('$message')";
    
    if (mysqli_query($conn, $query_message)) {
        $message_id = mysqli_insert_id($conn);

        $query_manage = "INSERT INTO manage_messages (sender_id, receiver_id, message_id) VALUES ('$sender_id', '$receiver_id', '$message_id')";
        
        if (mysqli_query($conn, $query_manage)) {
            echo json_encode(array("success" => true));
        } else {
            echo json_encode(array("success" => false));
        }
    } else {
        echo json_encode(array("success" => false));
    }
} else {
    echo json_encode(array("success" => false));
}

}
sendMessage($conn);