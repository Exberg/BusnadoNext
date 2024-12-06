<?php
// Database connection info
$db_host = "same as before";
$db_username = "same as before";
$db_password = "Y8fvw532G4SUvK";
$db_name = "same as before";

// Create connection
$conn = new mysqli($db_host, $db_username, $db_password, $db_name);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Handle form submission
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $name = $_POST['name'];
    $rating = $_POST['rating'];
    $feedback = $_POST['feedback'];

    $stmt = $conn->prepare("INSERT INTO feedback (name, rating, feedback) VALUES (?, ?, ?)");
    $stmt->bind_param("sis", $name, $rating, $feedback);
    $stmt->execute();
    $stmt->close();
}

// Fetch recent feedback
$sql = "SELECT * FROM feedback ORDER BY id DESC LIMIT 5";
$result = $conn->query($sql);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Feedback</title>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            background-color: #f9f9f9;
            margin: 0;
            padding: 0;
        }

        .container {
            width: 60%;
            margin: 20px auto;
            background: #fff;
            padding: 20px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            border-radius: 10px;
        }

        h1 {
            text-align: center;
            color: #333;
            margin-bottom: 10px;
        }

        form {
            margin-top: 20px;
            padding: 20px;
            background: #f1f1f1;
            border-radius: 8px;
        }

        input[type="text"], textarea {
            width: 100%;
            padding: 12px 15px;
            margin: 8px 0 20px;
            border: 1px solid #ddd;
    border-radius: 10px;
    background: #f9f9f9;
    font-size: 16px;
    color: #333;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease-in-out;
}

input[type="text"], textarea, select {
    width: 100%;
    padding: 12px 15px;
    margin: 8px 0 20px;
    border: 1px solid #ddd;
    border-radius: 10px;
    background: #f9f9f9;
    font-size: 16px;
    color: #333;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease-in-out;
    box-sizing: border-box; /* Ensures padding doesn't increase field width */
}

input[type="text"]:focus, textarea:focus, select:focus {
    outline: none;
    border-color: #007bff;
    background: #ffffff;
    box-shadow: 0 4px 8px rgba(0, 123, 255, 0.2);
}

textarea {
    min-height: 100px;
    resize: vertical;
}

select {
    height: 50px;
    appearance: none; /* Removes default arrow styling */
    background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="gray" d="M7 10l5 5 5-5z"/></svg>');
    background-repeat: no-repeat;
    background-position: right 10px center;
    background-size: 12px;
    padding-right: 40px; /* Space for arrow */
}

.back-button {
    display: inline-block;
    margin: 20px 0;
    padding: 10px 20px;
    font-size: 16px;
    font-weight: bold;
    color: #ffffff;
    background-color: #007bff;
    text-decoration: none;
    border-radius: 5px;
    text-align: center;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: background-color 0.3s ease, transform 0.2s ease;
}

.back-button:hover {
    background-color: #0056b3;
    transform: translateY(-2px);
}

.back-button:active {
    transform: translateY(0);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}



    button {
    width: 100%;
    background: linear-gradient(90deg, #007bff, #00d4ff);
    color: white;
    padding: 12px;
    border: none;
    border-radius: 50px; /* Fully rounded corners */
    cursor: pointer;
    font-size: 16px;
    font-weight: bold;
    transition: all 0.3s ease-in-out;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

button:hover {
    background: linear-gradient(90deg, #0056b3, #0094cc);
    transform: translateY(-2px);
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.2);
}

button:active {
    transform: translateY(0);
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.15);
}


        .recent-feedback {
            margin-top: 30px;
        }

        .feedback-card {
            background: #ffffff;
            border: 1px solid #ddd;
            margin: 10px 0;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        .feedback-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .feedback-header h3 {
            margin: 0;
            color: #007bff;
        }

        .rating {
            background: #ffcc00;
            padding: 5px 10px;
            border-radius: 5px;
            color: #333;
            font-weight: bold;
        }

        .feedback-text {
            margin-top: 10px;
            color: #555;
            line-height: 1.6;
        }

        .no-feedback {
            text-align: center;
            color: #777;
            margin: 20px 0;
        }
    </style>

    //css is chatgpt generated don't have time to do all work
</head>
<body>
    <div class="container">
        <h1>Feedback</h1>
        <form method="POST" action="">
            <input type="text" name="name" placeholder="Your Name" required>
            <select name="rating" required>
                <option value="">Rate Us</option>
                <option value="1">1 - Poor</option>
                <option value="2">2 - Fair</option>
                <option value="3">3 - Good</option>
                <option value="4">4 - Very Good</option>
                <option value="5">5 - Excellent</option>
            </select>
            <textarea name="feedback" placeholder="Write your feedback..." rows="5" required></textarea>
            <button type="submit">Submit Feedback</button>
        </form>

        <div class="recent-feedback">
            <h2>Recent Feedback</h2>
            <?php if ($result->num_rows > 0): ?>
                <?php while($row = $result->fetch_assoc()): ?>
                    <div class="feedback-card">
                        <div class="feedback-header">
                            <h3><?= htmlspecialchars($row['name']); ?></h3>
                            <div class="rating"><?= htmlspecialchars($row['rating']); ?> ★</div>
                        </div>
                        <p class="feedback-text"><?= htmlspecialchars($row['feedback']); ?></p>
                    </div>
                <?php endwhile; ?>
            <?php else: ?>
                <p class="no-feedback">No feedback available yet. Be the first to leave a review!</p>
            <?php endif; ?>
        </div>
        <a href="index.html" class="back-button">Back to Homepage</a>



    </div>
</body>
</html>
<?php $conn->close(); ?>
