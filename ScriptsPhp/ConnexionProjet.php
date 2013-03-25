<?php 
// Fonction appelée en Ajax pour la connexion d'un projet...
header("Content-Type: text/xml"); 
include_once("logging.php");
//tracer("dans connexion ");
//tracer($_GET['CdProjet']);
echo "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n";
echo "<Projet>";
// Connexion à la base de données
$liaison = mysqli_connect("localhost","root","","SuiviPPE") or tracer("La connexion a échoué");
$sql = "SELECT * from PROJET WHERE Code = \""  . $_GET['CdProjet'] . "\" AND Annee = \"2013\" " ;
//tracer($sql);
$result = mysqli_query($liaison,$sql) or tracer("La recherche a échoué");
//tracer(mysqli_num_rows($result));
if (mysqli_num_rows($result) == 0 ) {
	echo "Inconnu";
} else {
	$enreg = mysqli_fetch_assoc($result);
	echo utf8_encode($enreg['Libelle']);
	//tracer(utf8_encode($enreg['Libelle']));
} 
echo "</Projet>";
?>