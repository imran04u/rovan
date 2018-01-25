

<?php
print_r($_POST);
$message = $_POST['message'];
$email = $_POST['emailid'];
$subject =  $_POST['subject'];
$headers = 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
$headers .= "From: webmaster@winwius.com\r\nReply-To: ".$_POST['emailid'];
$subject2 = 'A Message Received in WinWius.com';
$message    ="<table><tr><td>Subject:</td><td>" .$subject."</td></tr><tr><td>Name:</td><td>" .$_POST['name']."</td></tr><tr><td>Email:</td><td>".$email."</td></tr><tr><td>Message:</td><td>".$message."</td></tr> </table>";

$mail->AltBody = 'This is the body in plain text for non-HTML mail clients';
if(!mail('hello@winwius.com,shihabudheen.pk@gmail.com' , $subject2 , $message ,$headers )) {
    echo 'Message could not be sent.';
} else {
   echo 'sent';
}
?>