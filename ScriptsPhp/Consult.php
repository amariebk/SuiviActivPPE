<!DOCTYPE html>
<html lang="fr">
<head>
	<title> Suivi de Projet PPE </title>
	<meta charset="UTF-8"> 
	<link rel="stylesheet" type="text/css" href="../Css/StyleWeb.css" />
</head>
<body onload="">
	<h3>Historique des activités d'un étudiant</h3>
	<form action="ResultHisto.php" method="POST" name="ConsultHisto" id="ConsultHisto" target="ResultHisto">
		<label>Code étudiant : </label>
		<input type="text" name="CdEtudiant" id="CdEtudiant" onblur="FctCdEtudiant()"/><span id="TxtCdEtudiant"> .....Code étudiant obligatoire</span>
		<input type="submit" value="Consulter" name="Envoi" id="IdEnvoi" />
		<input type="button" value="Retour Accueil" name="Retour"  onclick="self.location.href='../ContenuIndex.html'"/>
	</form>
	<br/>
	<iframe src="ResultHisto.php" name="ResultHisto" id="ResultHisto">
	</iframe>
</body>
<script src="../ScriptsJavaScript/Saisie.js"> </script>  
</html>