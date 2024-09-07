<?php
session_start();
include("../dbconnect.php");
$user_id=$_SESSION['id'];

function getColorName($conn){
    $sql="SELECT c_style_id,color_name,bk_color FROM chat_style";
    $result=mysqli_query($conn,$sql);
    $colorArr=[];
    while($row=$result->fetch_assoc()){
         $colorArr[]=$row;
    }
    echo json_encode($colorArr);
}

function getChangeStyle($conn,$user_id){
    $color=$_GET['color'];
    $updateSql="UPDATE users SET style_id=? WHERE user_id=?";
    $stm=mysqli_prepare($conn,$updateSql);
    $stm->bind_param("ii",$color,$user_id);
    $stm->execute();
     
    $selectSql="SELECT bk_color FROM chat_style INNER JOIN users ON style_id=c_style_id WhERE user_id=?";
    $pre=mysqli_prepare($conn,$selectSql);
    $pre->bind_param("i",$user_id);
    $pre->execute();
    $result=$pre->get_result();
    $row = $result->fetch_assoc();
    echo json_encode($row);
}

function getStyleForDom($conn,$user_id){
    $selectSql="SELECT bk_color,receiver_message_bkc,sender_message_bkc FROM chat_style INNER JOIN users ON style_id=c_style_id WhERE user_id=?";
    $pre=mysqli_prepare($conn,$selectSql);
    $pre->bind_param("i",$user_id);
    $pre->execute();
    $result=$pre->get_result();
    $row = $result->fetch_assoc();
    echo json_encode($row);
}

if (isset($_GET['action'])) {
    if ($_GET['action'] == 'getColorName') {
        getColorName($conn);
    } elseif ($_GET['action'] == 'getChangeStyle') {
        getChangeStyle($conn,$user_id);
    }elseif($_GET['action']=='getStyleForDom'){
        getStyleForDom($conn,$user_id);
    }
}