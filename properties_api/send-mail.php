<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

require 'vendor/autoload.php';

$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
$dotenv->load();

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;


$data = json_decode(file_get_contents("php://input"), true);

$name = $data['name'];
$phone = $data['phone'];
$email = $data['email'];
$source = $data['source'];

$mail = new PHPMailer(true);

try {

    $mail->isSMTP();

    $mail->SMTPKeepAlive = true;

    $mail->SMTPAuth = true;
    // $mail->SMTPDebug = 2;
    // $mail->Debugoutput = 'html';
    
    // $mail->Host = 'smtp.zoho.com';

    // $mail->Username = 'atish.s@zohomail.com';

    // $mail->Password = 'jDXV HxJu ea0R';

    // $mail->SMTPSecure = 'ssl';

    // $mail->Port = 465;

    $mail->Host = $_ENV['MAIL_HOST'];

    $mail->Username = $_ENV['MAIL_USERNAME'];

    $mail->Password = $_ENV['MAIL_PASSWORD'];

    $mail->SMTPSecure = $_ENV['MAIL_ENCRYPTION'];

    $mail->Port = $_ENV['MAIL_PORT'];

    $mail->setFrom('atish.s@zohomail.com', 'Kolte patil the wind website enquiry');

    $mail->addAddress('atishsanas1@gmail.com');

    $mail->addReplyTo(
    $email,
    $name
);

    $mail->isHTML(true);

$mail->Subject = 'New kolte patil the wind enquiry';

// $logo = "http://localhost/properties_api/kolte-patil.png";
$logo = "https://koltepatilthewind.com/api/kolte-patil.png";

$mail->Body = '
<!DOCTYPE html>
<html>

<head>
<meta charset="UTF-8">

<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>New Enquiry</title>
</head>

<body style="
    margin:0;
    padding:0;
    background:#eef2f1;
    font-family:Arial,sans-serif;
">

<table width="100%" cellpadding="0" cellspacing="0" style="padding:30px 10px;">

<tr>
<td align="center">

<table width="620" cellpadding="0" cellspacing="0" style="
    background:#ffffff;
    border-radius:20px;
    overflow:hidden;
    box-shadow:0 15px 40px rgba(0,0,0,0.08);
">

<!-- HEADER -->
<tr>
<td style="
    background:linear-gradient(135deg,#1b4332,#2d6a4f);
    padding:40px 30px;
    text-align:center;
">

<img src="'.$logo.'" alt="Logo" style="
    width:90px;
    height:auto;
    margin-bottom:18px;
">

<h1 style="
    margin:0;
    color:#ffffff;
    font-size:30px;
    font-weight:700;
    letter-spacing:0.5px;
">
New Property Enquiry
</h1>

<p style="
    margin-top:12px;
    color:rgba(255,255,255,0.85);
    font-size:15px;
    line-height:24px;
">
A new customer has submitted an enquiry from your website.
</p>

</td>
</tr>

<!-- BODY -->
<tr>
<td style="padding:35px;">

<table width="100%" cellpadding="0" cellspacing="0">

<!-- NAME -->
<tr>
<td style="
    background:#f8fbfa;
    border:1px solid #e6ece9;
    border-radius:14px;
    padding:18px;
">

<p style="
    margin:0;
    font-size:13px;
    color:#7b8b84;
    text-transform:uppercase;
    letter-spacing:1px;
">
Full Name
</p>

<h2 style="
    margin:8px 0 0;
    font-size:22px;
    color:#1b4332;
">
'.$name.'
</h2>

</td>
</tr>

<tr><td height="16"></td></tr>

<!-- PHONE -->
<tr>
<td style="
    background:#f8fbfa;
    border:1px solid #e6ece9;
    border-radius:14px;
    padding:18px;
">

<p style="
    margin:0;
    font-size:13px;
    color:#7b8b84;
    text-transform:uppercase;
    letter-spacing:1px;
">
Mobile Number
</p>

<h2 style="
    margin:8px 0 0;
    font-size:22px;
    color:#1b4332;
">
'.$phone.'
</h2>

</td>
</tr>

<tr><td height="16"></td></tr>

<!-- EMAIL -->
<tr>
<td style="
    background:#f8fbfa;
    border:1px solid #e6ece9;
    border-radius:14px;
    padding:18px;
">

<p style="
    margin:0;
    font-size:13px;
    color:#7b8b84;
    text-transform:uppercase;
    letter-spacing:1px;
">
Email Address
</p>

<h2 style="
    margin:8px 0 0;
    font-size:20px;
    color:#1b4332;
    word-break:break-word;
">
'.$email.'
</h2>

</td>
</tr>

<tr><td height="16"></td></tr>

<!-- SOURCE -->
<tr>
<td style="
    background:#f8fbfa;
    border:1px solid #e6ece9;
    border-radius:14px;
    padding:18px;
">

<p style="
    margin:0;
    font-size:13px;
    color:#7b8b84;
    text-transform:uppercase;
    letter-spacing:1px;
">
Enquiry Source
</p>

<h2 style="
    margin:8px 0 0;
    font-size:22px;
    color:#1b4332;
">
'.$source.'
</h2>

</td>
</tr>

</table>

<!-- CTA BUTTONS -->
<table width="100%" cellpadding="0" cellspacing="0" style="margin-top:30px;">
<tr>
<td align="center">

<table cellpadding="0" cellspacing="0" border="0">
<tr>

<td align="center" style="padding-right:10px;">
<a href="tel:'.$phone.'" style="
    background:#1b4332;
    color:#ffffff;
    text-decoration:none;
    padding:14px 26px;
    border-radius:10px;
    display:inline-block;
    font-weight:600;
    font-size:15px;
">
☏ Call Now
</a>
</td>

<td align="center">
<a href="https://wa.me/91'.$phone.'" style="
    background:#25D366;
    color:#ffffff;
    text-decoration:none;
    padding:14px 26px;
    border-radius:10px;
    display:inline-block;
    font-weight:600;
    font-size:15px;
">
💬 WhatsApp
</a>
</td>

</tr>
</table>

</td>
</tr>
</table>

</td>
</tr>

<!-- FOOTER -->
<tr>
<td style="
    background:#f8fbfa;
    padding:25px;
    text-align:center;
">

<p style="
    margin:0;
    color:#7b8b84;
    font-size:13px;
    line-height:22px;
">
© '.date("Y").' Legal Wing <br>
All Rights Reserved
</p>

</td>
</tr>

</table>

</td>
</tr>

</table>

</body>
</html>
';

    $mail->send();

    echo json_encode([
        "success" => true,
        "message" => "Email sent"
    ]);

} catch (Exception $e) {

    echo json_encode([
        "success" => false,
        "message" => $mail->ErrorInfo
    ]);
}
?>