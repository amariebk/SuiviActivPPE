<?php session_start(); ?>
<!DOCTYPE html>
<html lang="fr">
<head>
	<!-- pour faire essai git sur branche master -->
	<title> Suivi de Projet PPE </title>
	<meta charset="UTF-8"> 
	<link rel="stylesheet" type="text/css" href="Css/StyleWeb.css" />
</head>
<body>
	<header>
		<?php include "header.php" ?>
	</header>
	<!-- le contenu de la page d'accueil -->
	<iframe src="ContenuIndex.html" name="IFrameContenu" id="IFrameContenu" >
	</iframe>
	<footer>
		<?php include "footer.php" ?>
	</footer>
</body>
</html>