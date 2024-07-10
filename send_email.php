<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $first_name = htmlspecialchars(trim($_POST['first_name']));
    $last_name = htmlspecialchars(trim($_POST['last_name']));
    $phone = htmlspecialchars(trim($_POST['phone']));
    $email = htmlspecialchars(trim($_POST['email']));
    $message = htmlspecialchars(trim($_POST['message']));

    $to = "contactbalvidhya@gmail.com";
    $subject = "New Contact Form Submission";
    $body = "First Name: $first_name\nLast Name: $last_name\nPhone: $phone\nEmail: $email\nMessage:\n$message";
    $headers = "From: $email\r\nReply-To: $email";

    if (mail($to, $subject, $body, $headers)) {
        echo "success";
    } else {
        echo "Error: Email sending failed.";
    }
} else {
    echo "Error: Invalid request.";
}
?>
