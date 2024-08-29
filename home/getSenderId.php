<?php
    session_start(); 

    $id = isset($_SESSION['id']) ? (int)$_SESSION['id'] : null;
    echo json_encode(['id' => $id]);
    return json_encode(['id' => $id]);


