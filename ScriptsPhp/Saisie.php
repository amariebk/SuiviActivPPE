<!DOCTYPE html>
<html lang="fr">
<head>
	<title> Suivi de Projet PPE </title>
	<meta charset="UTF-8"> 
	<link rel="stylesheet" type="text/css" href="../Css/StyleWeb.css" />
</head>
<body onload="FctLoad()">
	<form action="EnregSaisie.php" method="POST" name="Saisie" id="Saisie">
		<fieldset>
			<legend>Etudiant</legend>
			<label>Code étudiant : </label>
				<input type="text" name="CdEtudiant" id="CdEtudiant" onblur="FctCdEtudiant()"/><span id="TxtCdEtudiant"> .....Code étudiant obligatoire</span>
		</fieldset>
		<fieldset>
			<legend>Activités de la séance</legend>
			<label>............................ Codes ................. Durées (en minutes)........Commentaires .....</label>
			<br/>
			<label>Projet 1 : </label>
				<input type="text" name="CdProjet1" id="CdProjet1" onblur="FctCdProjet1()" maxlength="7"/>
				<input type="text" name="NbDuree1" id="NbDuree1" onblur="FctNbDuree1()" maxlength="5"/>
				<input type="text" name="TxtProjet1" id="TxtProjet1" onblur="FctTxtProjet1()" maxlength="250" size="125"/>
			<br/>
				<span id="TxtCdProjet1"> &nbsp </span>
				<span id="TxtErreur1">&nbsp</span>
			<br/>
			<label>Projet 2 : </label>
				<input type="text" name="CdProjet2" id="CdProjet2" onblur="FctCdProjet2()" maxlength="7"/>
				<input type="text" name="NbDuree2" id="NbDuree2" onblur="FctNbDuree2()" maxlength="5"/>
				<input type="text" name="TxtProjet2" id="TxtProjet2" onblur="FctTxtProjeté()" maxlength="250" size="125"/>
			<br/>
				<span id="TxtCdProjet2"> &nbsp </span>
				<span id="TxtErreur2">&nbsp</span>
			<br/>
			<label>Projet 3 : </label>
				<input type="text" name="CdProjet3" id="CdProjet3" onblur="FctCdProjet3()" maxlength="7"/>
				<input type="text" name="NbDuree3" id="NbDuree3" onblur="FctNbDuree3()" maxlength="5"/>
				<input type="text" name="TxtProjet3" id="TxtProjet3" onblur="FctTxtProjet3()" maxlength="250" size="125"/>
			<br/>
				<span id="TxtCdProjet3"> &nbsp </span>
				<span id="TxtErreur3">&nbsp</span>
			<br/>
			<label>............................... Total durées  : </label>
				<input type="text" name="NbTotal" id="NbTotal" readonly />
		</fieldset>
		<br/>
		<div id="Actions">
			<input type="button" value="Envoyer" name="Envoi" id="IdEnvoi" onclick="FctEnvoi()"/>
			<input type="button" value="Réinitialiser" name="Reinit"  onclick="self.location.href='Saisie.php'"/>
			<input type="button" value="Retour Accueil" name="Retour"  onclick="self.location.href='../ContenuIndex.html'"/>
			<br/>
			<span id="TxtErreur">&nbsp</span>
			<br/>
		</div>
	</form>
</body>
<script src="../ScriptsJavaScript/Saisie.js"> </script>  
</html>