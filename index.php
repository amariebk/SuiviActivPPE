<?php session_start(); ?>
<!DOCTYPE html>
<html lang="fr">
<head>
	<title> Suivi de Projet PPE </title>
	<meta charset="UTF-8"> 
	<link rel="stylesheet" type="text/css" href="Css/StyleWeb.css" />
</head>
<body>
	<header>
		<?php include "header.php" ?>
	</header>
	<!-- le contenu de la page d'accueil -->
	<p>J'ai fait une modif ! </p>
	<iframe src="ContenuIndex.html" name="IFrameContenu" id="IFrameContenu" >
	</iframe>
	<footer>
		<?php include "footer.php" ?>
	</footer>
</body>
</html>