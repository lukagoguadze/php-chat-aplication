<?php
include("../dbconnect.php");
function LiveSearch($conn){
  if (isset($_GET['q'])) {
    $search = $_GET['q'];
    $sql = "SELECT * FROM users WHERE user_name LIKE ? OR user_lastname LIKE ?";
    $stmt = $conn->prepare($sql);
    $searchTerm = "%" . $search . "%";
    $stmt->bind_param("ss", $searchTerm, $searchTerm);
    $stmt->execute();
    $arr=[];
    $result = $stmt->get_result();
    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
          $arr[]=$row;
        }
    }
    echo json_encode($arr);
  }
}
LiveSearch($conn);
