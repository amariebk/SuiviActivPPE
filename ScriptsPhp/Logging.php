<?php 
/********************************/
/* Ecriture dans le fichier log */
/********************************/
function tracer($texte) {
	$fic = fopen('log.txt', 'a+');
	$date_heure = date('d m Y H:i:s',time()) ;
	fputs($fic, $date_heure . "--");
	fputs($fic, $texte."\r\n");
	fclose($fic);
};
?>
