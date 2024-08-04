<?php
$email = $_POST['email'];
$tel = $_POST['tel'];
$solicitud1 = 'Me interesa saber más sobre ahorrar, para obtener un bien inmobiliario';
$solicitud2 = 'Me interesa obtener un financiamiento';
$solicitud3 = 'Deseo saber más sobre una oportunidad inmobiliaria';
$solicitud4 = 'Me gustaría hablar con un asesor para resolver otras dudas';
$para = 'info@creditcasa.mx';
$asunto = 'Contacto desde creditcasa.mx';

$header = 'De: ' . $email;
/*$header .= "X-Mailer: PHP/" . phpversion() . " \r\n";
$header .= "Mime-Version: 1.0 \r\n";
$header .= "Content-Type: text/plain";*/


if($_POST['solicitud'] == "1"){
    $msjCorreo = "Duda:\n$solicitud1\nEmail de contacto:\n$email\nTelefono de contacto:\n$tel";
    mail($para, $asunto, utf8_decode($msjCorreo), $header);
    echo "<script> alert('Mensaje enviado, muchas gracias.'); </script>";
    echo "<script> setTimeout(\"location.href='/'\",1000); </script>";
}
else if($_POST['solicitud'] == "2"){
    $msjCorreo = "Duda:\n$solicitud1\nEmail de contacto:\n$email\nTelefono de contacto:\n$tel";
    mail($para, $asunto, utf8_decode($msjCorreo), $header);
    echo "<script> alert('Mensaje enviado, muchas gracias.'); </script>";
    echo "<script> setTimeout(\"location.href='/'\",1000); </script>";
}
else if($_POST['solicitud'] == "3"){
    $msjCorreo = "Duda:\n$solicitud1\nEmail de contacto:\n$email\nTelefono de contacto:\n$tel";
    mail($para, $asunto, utf8_decode($msjCorreo), $header);
    echo "<script> alert('Mensaje enviado, muchas gracias.'); </script>";
    echo "<script> setTimeout(\"location.href='/'\",1000); </script>";
}
else if($_POST['solicitud'] == "4"){
    $msjCorreo = "Duda:\n$solicitud1\nEmail de contacto:\n$email\nTelefono de contacto:\n$tel";
    mail($para, $asunto, utf8_decode($msjCorreo), $header);
    echo "<script> alert('Mensaje enviado, muchas gracias.'); </script>";
    echo "<script> setTimeout(\"location.href='/'\",1000); </script>";
}

header("Location:../");
alert('Mensaje enviado, muchas gracias.');
?>