<?php
if(isset($_POST['submit'])) {
    $name = $_POST['cf-name'];
    $email = $_POST['cf-email'];
    $message = $_POST['cf-message'];

    $to = 'ibademola@yahoo.com';
    $subject = 'New Message from Contact Form';
    $body = "Name: $name\nEmail: $email\nMessage: $message";

    // Additional headers
    $headers = "From: $email";

    // Send email
    if(mail($to, $subject, $body, $headers)) {
        echo '<p>Your message has been sent successfully.</p>';
    } else {
        echo '<p>There was a problem sending your message.</p>';
    }
}
?>