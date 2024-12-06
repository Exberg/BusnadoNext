<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Live Data with Google Map</title>
    
    <!-- Auto-refresh using JavaScript -->
    <script>
        setTimeout(function() {
            window.location.reload(1);
        }, 10000); // Refresh every 10 seconds
    </script>
    
    <style>
        table {
            width: 80%;
            margin: 20px auto;
            border-collapse: collapse;
            text-align: center;
        }
        th, td {
            border: 1px solid #ddd;
            padding: 10px;
        }
        th {
            background-color: #f2f2f2;
        }
        #map {
            height: 500px;
            width: 80%;
            margin: 25px auto;
        }
        h2, h3 {
            text-align: center;
        }
        .marker-info {
            width: 80%;
            margin: 10px auto;
            font-size: 18px;
            text-align: left;
        }
    </style>
    
    <!-- Google Maps JavaScript API -->
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBiVXMW9Aq_EP8fp34qd2Btoa3V4DUtXyQ"></script>
</head>
<body>
    <h2>Live Data from Bus Tracking System</h2>

    <?php
    // Database credentials
    $db_host = "sql211.infinityfree.com";
    $db_username = "if0_37814601"; 
    $db_password = "Y8fvw532G4SUvK"; 
    $db_name = "if0_37814601_iottest";

    // Create connection
    $conn = new mysqli($db_host, $db_username, $db_password, $db_name);

    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // Query to fetch the last 3 points
    $sql = "SELECT lat, lon, Date, Time FROM bus1 ORDER BY id DESC LIMIT 3"; 
    $result = $conn->query($sql);

    $coordinates = [];
    $markerInfo = []; // Store marker info for display
    
    if ($result->num_rows > 0) {
        echo "<table>
                <tr>
                    <th>Latitude</th>
                    <th>Longitude</th>
                    <th>Date</th>
                    <th>Time</th>
                </tr>";

        // Output data of each row and store coordinates
        while($row = $result->fetch_assoc()) {
            $coordinates[] = ['lat' => $row['lat'], 'lon' => $row['lon']];
            $markerInfo[] = $row['Time']; // Store time for markers
            echo "<tr>
                    <td>" . $row['lat'] . "</td>
                    <td>" . $row['lon'] . "</td>
                    <td>" . $row['Date'] . "</td>
                    <td>" . $row['Time'] . "</td>
                  </tr>";
        }
        echo "</table>";
    } else {
        echo "<p style='text-align:center;'>No data available</p>";
    }

    // Close connection
    $conn->close();
    ?>

    
    <!-- Marker Information -->
    <div class="marker-info">
        <p><b>Marker Icons and Times:</b></p>
        <ul>
            <li><img src="1.png" alt="Marker 1">: at <?php echo $markerInfo[0] ?? 'N/A'; ?></li>
            <li><img src="2.png" alt="Marker 2">: at <?php echo $markerInfo[1] ?? 'N/A'; ?></li>
            <li><img src="3.png" alt="Marker 3">: at <?php echo $markerInfo[2] ?? 'N/A'; ?></li>
        </ul>
    </div>
    <!-- Map container -->
    <div id="map"></div>

     <script>
        function initMap() {
            var map = new google.maps.Map(document.getElementById('map'), {
                zoom: 15,
                center: {lat: <?php echo $coordinates[0]['lat'] ?? 0; ?>, lng: <?php echo $coordinates[0]['lon'] ?? 0; ?>}
            });

            // Coordinates and colors
            var points = <?php echo json_encode($coordinates); ?>;
            var icons = ['1.png', '2.png', '3.png']; //icons

            points.forEach((point, index) => {
                new google.maps.Marker({
                    position: {lat: parseFloat(point.lat), lng: parseFloat(point.lon)},
                    map: map,
                    icon: {
                       url: icons[index],
                        scaledSize: new google.maps.Size(30, 30), // Resize icon
                    }
                });
            });
        }

        // Initialize the map
        initMap();
    </script>
</body>
</html>
