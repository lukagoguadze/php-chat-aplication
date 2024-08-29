<?php
session_start();
include("../dbconnect.php");
function getChatMessages($conn){
    $receiverId=$_GET["receiverId"];
    $senderId=$_SESSION["id"];

    $sql="SELECT message,m_id,m_time,sender_id,receiver_id,message_id FROM messages INNER JOIN manage_messages ON (message_id=m_id AND (sender_id=? AND receiver_id=?)) OR (message_id=m_id AND (sender_id=? AND receiver_id=?)) ORDER BY m_time";
    $stm=mysqli_prepare($conn,$sql);
    $stm->bind_param("iiii",$senderId,$receiverId,$receiverId,$senderId);
    $stm->execute();
    $result=$stm->get_result();
    $arr=[];
    if(mysqli_num_rows($result)>0){
        while($row=$result->fetch_assoc()){
            $arr[]=$row;
        }
        echo json_encode($arr);
        return json_encode($arr);
    }else{
        echo json_encode("empty");
    }
}
getChatMessages($conn);
                                               

