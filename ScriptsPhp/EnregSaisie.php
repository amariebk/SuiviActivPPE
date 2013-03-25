<!DOCTYPE html>
<html lang="fr">
<head>
	<title> Suivi de Projet PPE </title>
	<meta charset="UTF-8"> 
	<link rel="stylesheet" type="text/css" href="Css/StyleWeb.css" />
</head>
<body onload="">

<?php 
include_once("logging.php");
// Récupération des variables saisies
$CdEtudiant = $_POST['CdEtudiant'];
$NbProjet = 0;
$CdProjet = array();
$NbDuree = array();
$TxtProjet = array();
if ($_POST['CdProjet1'] != "") {
	$CdProjet[] = $_POST['CdProjet1'];
	$NbDuree[] = $_POST['NbDuree1'];
	$TxtProjet[] = $_POST['TxtProjet1'];
	$NbProjet = $NbProjet + 1;
}
if ($_POST['CdProjet2'] != "") {
	$CdProjet[] = $_POST['CdProjet2'];
	$NbDuree[] = $_POST['NbDuree2'];
	$TxtProjet[] = $_POST['TxtProjet2'];
	$NbProjet = $NbProjet + 1;
}
if ($_POST['CdProjet3'] != "") {
	$CdProjet[] = $_POST['CdProjet3'];
	$NbDuree[] = $_POST['NbDuree3'];
	$TxtProjet[] = $_POST['TxtProjet3'];
	$NbProjet = $NbProjet + 1;
}
// echo $NbProjet;
//For ($i = 0 ; $i < $NbProjet ; $i++) {
//	echo $CdProjet[$i];
// }


// Création de la date du jour
$DateJour = date("Y-m-d");

// Création du code validation
$CodeValid = substr(md5(uniqid()),0,5);

// Connexion à la base de données
$liaison = mysqli_connect("localhost","root","","SuiviPPE") or tracer("La connexion a échoué");
$result = mysqli_query("set names 'UTF8'");

// Faire les controles de validation des données réceptionnées
// Pas vraiment utile les controles ont été faits en amont en Javascript ! 

// Insertion dans la base de données
For ($i = 0 ; $i < $NbProjet ; $i++) {
	$sql = "INSERT INTO `atravaillesur`(`CleATravailleSur`, `TempsPasse`, `Comment`, `CodeValidation`, `Initiales_Etudiant`, `Code_Projet`, `DateJour`) VALUES (NULL,\"";
	$sql = $sql . $NbDuree[$i] . "\", \"";
	$sql = $sql . $TxtProjet[$i] . "\", \"";
	$sql = $sql . $CodeValid . "\", \"";
	$sql = $sql . $CdEtudiant . "\", \"";
	$sql = $sql . $CdProjet[$i] . "\", \"";
	$sql = $sql . $DateJour . "\")";
	//tracer($sql);
	//echo $sql, "<br/>";
	$result = mysqli_query($liaison,$sql) or tracer($sql . "L'insertion a échoué");	
}



?>
<p>
	Nous avons bien enregsitré votre saisie :	
</p>
<table border = 0>
<?php 
	For ($i = 0 ; $i < $NbProjet ; $i++) {
		echo "<tr>", "<td>", $CdProjet[$i], "</td><td>", $NbDuree[$i], "</td><td>", $TxtProjet[$i], "</td></tr>";
	}
?>
</table>
<p> 
	Votre code validation est : <?php echo 	$CodeValid; ?>
</p>
<p> Merci </p>
<p align="center"><a href="..\ContenuIndex.html">Retour à l'accueil</a></p>

</body>

</html>