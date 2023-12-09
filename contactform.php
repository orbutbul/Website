<?php

if(isset($_POST['submit'])){
    $name= $_POST['name'];
    $senderEmail= $_POST['eMail'];
    $message= $_POST['message'];

    $receiveMail="xjwedcezfbcwzzjmpt@cwmxc.com";
    $headers="From: ".$senderEmail;
    $txt="Message from".$name.".\n\n".$message;

    mail($receiveMail,$headers,$txt,);
    header("Location: index.php?mailsend");
}