<?php

include("../dbconnect.php");

function getEmojis($conn){
    $sql="SELECT * FROM emojis";
    $result=mysqli_query($conn,$sql);
    $arr=[];
    while($row=mysqli_fetch_assoc($result)){
        $arr[]=$row;
    }
    echo json_encode($arr);
}

getEmojis($conn);