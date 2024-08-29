<?php
session_start();
include("../dbconnect.php");

function removeMessage($conn){
$sessionUser=$_SESSION["id"];
$message_id = $_GET["messageId"];
$senderId=$_GET["senderId"];
   if($senderId=$sessionUser){
    $remove_from_message = "DELETE FROM manage_messages WHERE message_id=$message_id AND sender_id=$senderId";
    if(mysqli_query($conn,$remove_from_message)){
        $remove="DELETE FROM messages WHERE m_id=$message_id";
        mysqli_query($conn,$remove);
        echo json_encode(array("success" => true, "message" => "Message deleted."));
    }else{
        echo json_encode(array("error" => true, "message" => "Message was not deleted."));
    }
}
}
removeMessage($conn);