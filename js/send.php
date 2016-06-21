<?php

$errors = array();
$data = array(); 
//  ======================================================
if (empty($_POST['nombre']))
$errors['nombre'] = 'Nombre es requerido.';
if (empty($_POST['email']))
$errors['email'] = 'Email es requerido.';
if (empty($_POST['telefono']))
$errors['telefono'] = 'Teléfono es requerido.';
if (empty($_POST['asunto']))
$errors['asunto'] = 'Asunto es requerido.';
if (empty($_POST['mensaje']))
$errors['mensaje'] = 'Mensaje es requerido.';
//  ===========================================================

if ( ! empty($errors)) {
  
  $data['success'] = false;
  $data['errors'] = $errors;
  $data['messageError'] = 'Error al enviar formulario';
} else {
  
  $data['success'] = true;
  $data['messageSuccess'] = 'El formulario se envio correctamente';
  
  $email_to = "gilums@gilums.com";
  $email_subject = $_POST['asunto'];
  $name = $_POST['nombre']; // required
  $email_from = $_POST['email']; // required
  $tel = $_POST['telefono']; // required
  $message = $_POST['mensaje']; // required
  $email_message = "Consulta desde la web con la siguente información: .nn";
  $email_message .= "Nombre Completo: ".$name."n";
  $email_message .= "Email: ".$email_from."n";
  $email_message .= "Teléfono: ".$tel."n";
  $email_message .= "Mensaje: ".$message."n";
  $headers = 'From: '.$email_from."\r\n".
  'Reply-To: '.$email_from."\r\n" .
  'X-Mailer: PHP/' . phpversion();
  @mail($email_to, $email_subject, $email_message, $headers);
}

echo json_encode($data);
?>