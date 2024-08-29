<?php 
session_start();
include("../dbconnect.php");
function userList($conn){
    $arr=[];
    $sql="SELECT * FROM users";
    $result=mysqli_query($conn,$sql);
    if(mysqli_num_rows($result)>0){
        while($row=mysqli_fetch_assoc($result)){
            $arr[]=$row;
        }
        echo json_encode($arr);
        return json_encode($arr);
    }
}

userList($conn);