<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
date_default_timezone_set("Asia/Kuala_Lumpur");  // timezone for Malaysia
$Date = date("Y-m-d");
$Time = date("H:i:s");  // Use the full time format including minutes and seconds

$response = array();

if (isset($_GET['lat']) && isset($_GET['lon'])) {
    $lat = $_GET['lat'];
    $lon = $_GET['lon'];

    // Update your database credentials
    $db_host = "Your host name not going to show my";
    $db_username = "find yours";  // From your hosting details
    $db_password = "Password of yor db";  // Replace this with your actual MySQL password
    $db_name = "db name";  // Replace this with your database name

    // Create connection
    $conn = new mysqli($db_host, $db_username, $db_password, $db_name);

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    $sql = "INSERT INTO bus1 (lat, lon, Date, Time) VALUES ('$lat', '$lon', '$Date', '$Time')";

    if ($conn->query($sql) === TRUE) {
        $response["success"] = 1;
        $response["message"] = "Data inserted successfully";
    } else {
        $response["success"] = 0;
        $response["message"] = "Error: " . $sql . "<br>" . $conn->error;
    }

    $conn->close();

} else {
    $response["success"] = 0;
    $response["message"] = "Parameter(s) are missing. Please check the request";
}

echo json_encode($response);
?>
