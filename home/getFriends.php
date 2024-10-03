<?php
session_start();
include("../dbconnect.php");
function getFriends($conn){
$sender_id=$_SESSION['id'];
$sql="SELECT 
   MAX(t1.id) AS id,
   MAX(t1.message_id) AS message_id, 
   t1.user_id, 
   MAX(t1.user_name) AS user_name, 
   MAX(t1.user_lastname) AS user_lastname, 
   MAX(t1.user_image) AS user_image, 
   MAX(t1.status_code) AS status_code
   FROM (
   SELECT m.id,m.message_id,u.user_id,u.user_name,u.user_lastname,u.user_image,u.status_code
   FROM manage_messages m
   INNER JOIN users u ON m.sender_id = u.user_id 
   WHERE m.receiver_id = ?
   UNION
   SELECT m.id,m.message_id,u.user_id,u.user_name,u.user_lastname,u.user_image,u.status_code
   FROM manage_messages m
   INNER JOIN users u ON m.receiver_id = u.user_id 
   WHERE m.sender_id = ?
   ) AS t1
   GROUP BY t1.user_id
   ORDER BY MAX(t1.message_id) DESC;

";

$stm=mysqli_prepare($conn,$sql);
$stm->bind_param("ii",$sender_id,$sender_id);
$stm->execute();
$result=$stm->get_result();
$arr=[];
if(mysqli_num_rows($result)>0){
   while($row=$result->fetch_assoc()){
      $arr[]=$row;
   }
   echo json_encode($arr);
}else{
   echo json_encode(["result"=>"search and start conversation"]);
}

mysqli_close($conn);
}


function getLastSendMessage($conn){
   $sender_id=$_SESSION['id'];
   $sql="";

}




getFriends($conn);

