<?php

include("dbconnect.php");
session_start();
function login($conn){
    if($_SERVER["REQUEST_METHOD"]=="POST"){
        $email = $_POST["login-email"] ?? '';
        $user_password = $_POST["login-password"] ?? '';
        
        if(!empty($email) && !empty($user_password)){
            $sql = "SELECT * FROM users WHERE user_email='$email'";
            $result = mysqli_query($conn, $sql);
        
            if ($result && mysqli_num_rows($result) > 0) {
                $user = mysqli_fetch_assoc($result);
                if (password_verify($user_password, $user['user_password'])){
                    $_SESSION['id'] = $user['user_id'];
                    $_SESSION['email'] = $user['user_email'];
                    $_SESSION['name'] = $user['user_name'];
                    if($_SESSION['id']!=null){
                        $sessionUser=$_SESSION['id'];
                        $query="UPDATE users SET status_code=true WHERE user_id=$sessionUser";
                        mysqli_query($conn,$query);
                        header("Location: home/chat.php");
                    }else{
                        header("Location: login.php");
                    }
                    exit();
                    echo "<script>alert('login success')</script>";
                } 
            }else {
                echo "<script>alert('incorrect password')</script>";
            }
      
        } 
    }
}
login($conn);