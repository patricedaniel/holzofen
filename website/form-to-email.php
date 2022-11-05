<?php
/*
if(!isset($_POST['submit']))
{
	//This page should not be accessed directly. Need to submit the form.
	echo "error; you need to submit the form!";
}
*/
$name = $_POST['name'];
$visitor_email = $_POST['email'];
$message = $_POST['message'];

//Validate first
if(empty($name)||empty($visitor_email)) 
{
    echo "Name und E-Mail sind Pflichtfelder";
    exit;
}

if(IsInjected($visitor_email))
{
    echo "Ungültige E-Mail-Adresse";
    exit;
}

$email_from = $visitor_email;//<== update the email address
$email_subject = "Kontaktformular von holzofenpizzawagen.ch";
$email_body = "Jemand hat das Kontaktformular ausgefüllt! \n.
Du hast eine neue Nachricht von: $name.\n".
    "Folgende Nachricht:\n $message".
    
$to = "info@holzofenpizzawagen.ch, patrice.buettiker@gmail.com";//<== update the email address
$headers = "From: $email_from \r\n";
$headers .= "Reply-To: $visitor_email \r\n";
//Send the email!
mail($to,$email_subject,$email_body,$headers);
//done. redirect to thank-you page.
header('Location: danke.html');


// Function to validate against any email injection attempts
function IsInjected($str)
{
  $injections = array('(\n+)',
              '(\r+)',
              '(\t+)',
              '(%0A+)',
              '(%0D+)',
              '(%08+)',
              '(%09+)'
              );
  $inject = join('|', $injections);
  $inject = "/$inject/i";
  if(preg_match($inject,$str))
    {
    return true;
  }
  else
    {
    return false;
  }
}
   
?> 