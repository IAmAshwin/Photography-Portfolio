<?php
if(!isset($_POST['submit']))
{
    echo "error; you need to submit the form !";
}
$name=$_POST['name'];
$visitor_email=$_POST['email'];
$message=$_POST['message'];
if(empty($name)||empty($visitor_email)){
    echo"Name and email are mandatory";
    exit;
}
$email_form = 'aspteam16103421@gmail.com';
$email_subject = 'New form submission';
$email_body = 'You have a recived a new message from the user $name.\n'
              "email address:$visitor_email\n"
              "here is the message :\n $message"


              $to = "aspteam16103421@gmail.com";
              $headers = "From :$email_form \r\n";
              mail($to,$email_subject,$email_body,$headers);
            header('Location:thankyou.html');