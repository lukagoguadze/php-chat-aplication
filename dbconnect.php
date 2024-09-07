<?php 
$db_server="localhost";
$db_user="root";
$db_password="Lukicha_m7";
$db_name="chat_aplication";
$conn="";
try{
$conn=mysqli_connect($db_server,$db_user,$db_password,$db_name);
}catch(mysqli_sql_exception){
    echo  "can not connect";
    // coment
}