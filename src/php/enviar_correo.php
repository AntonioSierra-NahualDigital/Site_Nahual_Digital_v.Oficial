<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Capturamos y sanitizamos los datos del formulario
    $nombre = htmlspecialchars($_POST['nombre']);
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    $telefono = htmlspecialchars($_POST['telefono']);
    $tipo_servicio = htmlspecialchars($_POST['tipo-servicio']);
    $mensaje = htmlspecialchars($_POST['mensaje']);

    // Validamos el correo electrónico
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        die("Correo electrónico no válido.");
    }

    // Configuración del correo
    $destinatario = "clientes@nahualdigital.site"; // Correo donde llegarán los mensajes
    $asunto = "Nuevo mensaje de contacto: $nombre";

    // Cuerpo del mensaje
    $cuerpo = "Has recibido un mensaje desde tu sitio web:\n\n";
    $cuerpo .= "Nombre: $nombre\n";
    $cuerpo .= "Correo: $email\n";
    $cuerpo .= "Teléfono: $telefono\n";
    $cuerpo .= "Tipo de Servicio: $tipo_servicio\n\n";
    $cuerpo .= "Mensaje:\n$mensaje\n";

    // Encabezados
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";

    // Enviar correo
    if (mail($destinatario, $asunto, $cuerpo, $headers)) {
        // Redirigir a la página de agradecimiento si el correo se envió correctamente
        header("Location: https://nahualdigital.site/thank_you_page.html");
        exit();
    } else {
        echo "Hubo un problema al enviar el mensaje. Inténtalo nuevamente.";
    }
} else {
    echo "Método no permitido.";
}
?>
