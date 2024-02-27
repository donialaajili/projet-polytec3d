<?php
// Vérifie si le formulaire a été soumis
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  // Récupère les données du formulaire
  $nom = $_POST["nom"];
  $email = $_POST["email"];
  $sujet = $_POST["sujet"];
  $message = $_POST["message"];

  // Vous pouvez stocker ces données dans une base de données, les envoyer par e-mail à l'administrateur, ou les traiter de toute autre manière souhaitée.

  // Exemple : Envoyer un e-mail à l'administrateur
  $to = "mettre son adresse mail";
  $subject = "Nouveau message de contact depuis le site web";
  $message_body = "Nom : $nom\nAdresse e-mail : $email\nSujet : $sujet\nMessage : $message";

  mail($to, $subject, $message_body);

  // Redirection vers une page de confirmation ou une autre action après soumission
  header("Location: confirmation.php");
}
?>