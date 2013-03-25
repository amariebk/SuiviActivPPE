<!DOCTYPE html>
<html lang="fr">
<head>
	<title> Suivi de Projet PPE </title>
	<meta charset="UTF-8"> 
	<link rel="stylesheet" type="text/css" href="../Css/StyleWeb.css" />
</head>
<body onload="">
<?php 
include_once("logging.php");
//------------------------------------------------------------------------------------------------
// Si un étudiant a été saisi : Récupération du code étudiant saisi et recherche du prenom et nom
// sinon ecriture de spaces
//-------------------------------------------------------------------------------------------------
if (isset($_POST['CdEtudiant'])) {
	$CdEtudiant = $_POST['CdEtudiant'];
	// Connexion à la base de données
	$liaison = mysqli_connect("localhost","root","","SuiviPPE") or tracer("La connexion a échoué");
	$result = mysqli_query($liaison,"set names 'UTF8'");
	$sql = "SELECT * from ETUDIANT WHERE Initiales = \""  . $CdEtudiant . "\"" ;
	// tracer($sql);
	$result = mysqli_query($liaison,$sql) or tracer("La recherche etudiant a échoué");
	// tracer(mysqli_num_rows($result));
	if (mysqli_num_rows($result) == 0 ) {
		$Etudiant = "Inconnu";
	} else {
		$enreg = mysqli_fetch_assoc($result);
		$Etudiant = utf8_encode($enreg['Prenom']) . " " . utf8_encode($enreg['Nom']);
	} 
	mysqli_free_result($result);
} else {
	$Etudiant = "";
}	 
//----------------------------------------------------------------------------------------------------
// Si appel au début , pas de code étudiant saisi pas de recherche d'activité==> fin de la page HTML 
//-----------------------------------------------------------------------------------------------------
if ($Etudiant == "") {
	echo "</body>" , "</html>" ;
} else {
echo "<p>Etudiant :  <b>$Etudiant</b></p>";
//----------------------------------------------------
// Si $Etudiant est Inconnu, il n'y a pas d'historique
//----------------------------------------------------
if ($Etudiant == "Inconnu" ) {
	echo "</body>" , "</html>" ;
} else {
//------------------------------------------------	
// Création de la table des projets de l'étudiant
//------------------------------------------------
$TabCdProjet = array();
$TabLibProjet = array();
$nbProjets = 0;
$sql = "SELECT DISTINCT Code, Libelle FROM PROJET AS P, ATRAVAILLESUR AS ATS WHERE P.code = ATS.code_projet AND ATS.Initiales_Etudiant = \"$CdEtudiant\" ORDER BY P.Code;";
//echo $sql;
$result = mysqli_query($liaison,$sql) or tracer("La recherche des projets a échoué");
while ($UnEnreg = mysqli_fetch_assoc($result)){
	$nbProjets = $nbProjets + 1;
	$TabCdProjet[] = $UnEnreg['Code'];
	$TabLibProjet[] = $UnEnreg['Libelle'];
}
mysqli_free_result($result);
//echo "<pre>";
//print_r ($TabCdProjet);
//echo "</pre>";
//-------------------------------------------------------
// si pas de projet ==> pas d'historique pour l'étudiant
//-------------------------------------------------------
if ($nbProjets == 0){
		echo "</body>" , "</html>" ;
} else {
//-------------------------------------
// Recherche des projets de l'étudiant
//------------------------------------
$LigCdProjet = array();
$LigDate = array();
$LigTemps = array();
$LigComm = array();
$LigCode = array();
$nbLignes = 0;
$sql = "SELECT * FROM ATRAVAILLESUR AS ATS WHERE ATS.Initiales_Etudiant = \"$CdEtudiant\" ORDER BY DateJour, Code_Projet;";
//echo $sql;
$result = mysqli_query($liaison,$sql) or tracer("La recherche des activités a échoué");
while ($UnEnreg = mysqli_fetch_assoc($result)){
	$nbLignes = $nbLignes + 1;
	$LigCdProjet[] = $UnEnreg['Code_Projet'];
	$LigDate[] = $UnEnreg['DateJour'];
	$LigTemps[] = $UnEnreg['TempsPasse'];
	$LigComm[] = $UnEnreg['Comment'];
	$LigCode[] = $UnEnreg['CodeValidation'];
}
mysqli_free_result($result);
//echo "<pre>";
//print_r ($LigDate);
//echo "</pre>";
//-----------------------------------------
// calcul du temps total par projet :
//-------------------------------------------
// initialisation du tableau
$TabTempsTot = array();
for ($i = 0; $i < $nbProjets; $i++) {
	$TabTempsTot[] = 0;
}
// lecture de tous les temps passes
for ($j=0; $j < $nbLignes; $j++) {
	for ($i=0; $i < $nbProjets; $i++) {
		if ($TabCdProjet[$i] == $LigCdProjet[$j]) {
			$TabTempsTot[$i] = $TabTempsTot[$i] + $LigTemps[$j];
		}
	}
}
//echo "<pre>";
//print_r ($TabTempsTot);
//echo "</pre>";
//----------------------------------------
// Affichage des activites de l etudiant
//---------------------------------------
?>
<table border="1">
	<TR>
		<TH rowspan="2"> Dates </TH>
		<?php for ($i = 0; $i < $nbProjets; $i++) {
			echo "<TH>$TabCdProjet[$i]</TH>";
		} ?>
		<TH rowspan="2"> Commentaires</TH>
		<TH rowspan="2"> Code V.</TH>
	</TR>
	<TR>
		<?php for ($i = 0; $i < $nbProjets; $i++) {
		echo "<TH>$TabLibProjet[$i]</TH>";
		} ?>
	</TR>
	<?php for ($j = 0; $j < $nbLignes; $j++) {
		echo "<TR><TD>$LigDate[$j]</TD>";
		for ($i = 0; $i < $nbProjets; $i++) {
			if ($TabCdProjet[$i] == $LigCdProjet[$j]) {
				echo "<TD>$LigTemps[$j]</TD>";
			} else {
				echo "<TD>&nbsp</TD>";
			}
		}
		echo "<TD>$LigComm[$j]</TD><TD>$LigCode[$j]</TD>";
		echo "</TR>";
	} ?>
	<TR>
		<TD>TEMPS TOTAUX</TD>
		<?php for($i = 0; $i < $nbProjets; $i++){
			echo "<TD>$TabTempsTot[$i]</TD>";
		} ?>
	</TR>
</table>
<?php
mysqli_close($liaison);
}
}
}
?>
</body>
</html>