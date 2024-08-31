<?php
session_start();
include("../dbconnect.php");
$user_id=$_SESSION['id'];

function getColorName($conn){
    $sql="SELECT c_style_id,bk_color FROM chat_style";
    $result=mysqli_query($conn,$sql);
    $colorArr=[];
    while($row=$result->fetch_assoc()){
         $colorArr[]=$row;
    }
    echo json_encode($colorArr);
}

function getChangeStyle($conn){
    $color=$_POST['color'];
    echo $color;
}

if (isset($_GET['action'])) {
    if ($_GET['action'] == 'getColorName') {
        getColorName($conn);
    } elseif ($_GET['action'] == 'getChangeStyle') {

    }
}