<?php

include("../dbconnect.php");
function register($conn){
if($_SERVER["REQUEST_METHOD"]=="POST"){
    $style=3;
    $firstName=$_POST["reg-name"];
    $lastName=$_POST["reg-lastName"];
    $email=$_POST["reg-email"];
    $password=$_POST["reg-password"];
    $repeatPassword=$_POST["repeatPassword"];
  if($password==$repeatPassword){
    $hashed_password=password_hash($password,PASSWORD_DEFAULT);
    $sql="INSERT INTO users(user_name,user_lastname,user_email,user_password,style_id) VALUES(?,?,?,?,?)";
    $stm=mysqli_prepare($conn,$sql);
    $stm->bind_param("ssssi",$firstName,$lastName,$email,$hashed_password,$style);
    $stm->execute();
    echo "<script>alert('registrated successfuly.')</script>";
  }else{
    echo "<script>alert('Password does not match!')</script>";
  }
}
}
register($conn);