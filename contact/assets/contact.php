<?php

// Email address verification
function isEmail($email) {
	return filter_var($email, FILTER_VALIDATE_EMAIL);
}

if($_POST) {

    // Enter the email where you want to receive the message
    $emailTo = 'brian.kidd.one@gmail.com';

    $name = addslashes(trim($_POST['name']));
    $clientEmail = addslashes(trim($_POST['email']));
    $subject = addslashes(trim($_POST['subject']));
    $message = addslashes(trim($_POST['message']));
	$antispam = addslashes(trim($_POST['antispam']));

    $array = array('nameMessage' => '', 'emailMessage' => '', 'subjectMessage' => '', 'messageMessage' => '','antispamMessage' => '');

    if($name == '') {
    	$array['nameMessage'] = 'Empty name!';
    }
    if(!isEmail($clientEmail)) {
        $array['emailMessage'] = 'Invalid email!';
    }
    if($subject == '') {
        $array['subjectMessage'] = 'Empty subject!';
    }
    if($message == '') {
        $array['messageMessage'] = 'Empty message!';
    }
	 if($antispam != '9') {
    	$array['antispamMessage'] = 'Wrong antispam answer!';
    }
    if($name != '' && isEmail($clientEmail) && $subject != '' && $message != ''&& $antispam != ''&& $antispam == '9') {		
		// Send email
		$message = "Message from: " . $name . "\r\n" . $message;
		$headers = "From: " . $clientEmail . " <" . $clientEmail . ">" . "\r\n" . "Reply-To: " . $clientEmail;
		mail($emailTo, $subject . " (contact form template)", $message, $headers);
    }

    echo json_encode($array);

}

?>