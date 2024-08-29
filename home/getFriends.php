<?php
session_start();
include("../dbconnect.php");
function getFriends($conn){
$sender_id=$_SESSION['id'];

$sql="SELECT user_id, user_name, user_lastname, user_image,status_code
FROM manage_messages 
INNER JOIN users ON sender_id = user_id 
WHERE receiver_id = ?

UNION

SELECT user_id, user_name, user_lastname, user_image,status_code
FROM manage_messages 
INNER JOIN users ON receiver_id = user_id 
WHERE sender_id = ?;
";

$stm=mysqli_prepare($conn,$sql);
$stm->bind_param("ii",$sender_id,$sender_id);
$stm->execute();
$result=$stm->get_result();
$arr=[];
while($row=$result->fetch_assoc()){
   $arr[]=$row;
}
echo json_encode($arr);
mysqli_close($conn);
}
getFriends($conn);