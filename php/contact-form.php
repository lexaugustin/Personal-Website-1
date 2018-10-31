<?php

  header("Location: http://lexaugustin.com/index.html#contact");

  $name = $_POST['name'];
  $sender = $_POST['email'];
  $subject = $_POST['subject'];
  $message = $_POST['message'];

  $email_from = 'website@http://personal-website-1993.appspot.com';

  $receiver = "lexaugustin@yahoo.com";
  $headers = "From: $sender \r\n";
  $headers = "Reply-To: $sender \r\n";

  $txt = "You have received an email from " .$name ."\n" .$sender ."\n\n" .$message;

  mail($receiver, $subject, $txt, $headers);
  // header("Location: lexaugustin.com?mailsend");
  // echo "Thanks! We'll get back to you soon.";

?>
