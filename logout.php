<?php 
ob_start();
session_start();
include 'includes/inc/config.php';
unset($_SESSION['user']);
header("location: ".BASE_URL.'login.php'); 
?>