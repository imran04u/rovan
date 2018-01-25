<?php
session_start();
$reply = array();

	$to_email ='imran.khan@cybosol.com';
	mail($to_email, "xcx", "xZcxzc");
	$email_subject = $_POST['subject']; 
	$mail_header = "From: ".$_POST["email"]."\r\n"; 
	$mail_header .= "Reply-To: ".$_POST["email"]."\r\n"; 
	$mail_header .= 'MIME-Version: 1.0' . "\n";
	$mail_header .= 'Content-type: text/html; charset=iso-8859-1' . "\n"; 
	$message = "Name: ".$_POST["name"]."<br />"; 
	$message .= "Email: ".$_POST["email"]."<br />"; 
	$message .= "Message: ".nl2br($_POST["message"])."<br />"; 

	if(mail($to_email, $email_subject, $message, $mail_header)){
		
		$reply['message'] = "Thank you.We Will get back to you soon";		
		$reply['status'] = "200";
	}
	else{
		
		$reply['error'] = "Unable to process your reuest. Please try after some time";		
		$reply['status'] = "404";
	}
session_destroy();
echo json_encode($reply);
?>