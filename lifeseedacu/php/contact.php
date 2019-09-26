 <?php
if(isset($_POST['SubmitButton']))
{	
 $name = $_POST['name'];
  $email = $_POST['email'];
  $phone = $_POST['phone'];
  $message = $_POST['message'];
  $formcontent="From: $name \n Email: $email \n Phone: $phone \n Message: $message";
  $recipient = "christy@lifeseedacupuncture.com";
  $subject = "Life Seed Contact Form Submission";
  $mailheader = "From: $email \r\n";
  mail($recipient, $subject, $formcontent, $mailheader) or die ("Error!");
  echo "Thank you for your input and I will get back to you shortly!" . "<a href='../contact.html' style = 'text-decoration:none;color:#ff0000;'> Return Back to Contact Page </a>";
}
?>