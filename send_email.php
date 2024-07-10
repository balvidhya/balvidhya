<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $first_name = htmlspecialchars(trim($_POST['first_name']));
    $last_name = htmlspecialchars(trim($_POST['last_name']));
    $phone = htmlspecialchars(trim($_POST['phone']));
    $email = htmlspecialchars(trim($_POST['email']));
    $message = htmlspecialchars(trim($_POST['message']));

    // Validate the data
    if (empty($first_name) || empty($last_name) || empty($phone) || empty($email) || empty($message)) {
        echo "All fields are required.";
        exit;
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Invalid email address.";
        exit;
    }

    if (!preg_match("/^\+?[0-9\s\-]+$/", $phone)) {
        echo "Invalid phone number.";
        exit;
    }

    // Email details
    $to = "contactbalvidhya@gmail.com";
    $subject = "New Contact Form Submission";
    $body = "First Name: $first_name\nLast Name: $last_name\nPhone: $phone\nEmail: $email\nMessage:\n$message";
    $headers = "From: $email\r\nReply-To: $email";

    // Send the email
    if (mail($to, $subject, $body, $headers)) {
        echo "success";
    } else {
        echo "Error: Email sending failed.";
    }
} else {
    echo "Error: Invalid request.";
}
?>
