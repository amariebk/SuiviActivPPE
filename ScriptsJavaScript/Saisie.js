vCtlOk = false;
// Au chargement de la page
function FctLoad() {
	Saisie.CdEtudiant.focus();
}

// Controle du code étudiant
function FctCdEtudiant() {
	if (Saisie.CdEtudiant.value == "" ){
		var vTxtCdEtudiant = document.getElementById('TxtCdEtudiant');
		var vEtudiant = "Saisie obligatoire";
		if (vTxtCdEtudiant.textContent) {
			vTxtCdEtudiant.textContent = vEtudiant;
		} else if (vTxtCdEtudiant.innerText){
			vTxtCdEtudiant.innerText = vEtudiant;
		}
		document.getElementById('TxtCdEtudiant').style.color="red";
		document.getElementById('TxtCdEtudiant').style.visibility="visible";
		Saisie.CdEtudiant.focus();
		vCtlOk = false;
	} else {
		// Appel de la fonction Ajax pour obtenir le nom et prénom de l'étudiant;
		// alert("appel Ajax");
		// par défaut le code est faux
		vCtlOk = false;
		var xhr = null;
		if (window.XMLHttpRequest) {
			xhr = new XMLHttpRequest();
		} else if (window.ActiveXObject) {
			xhr = new ActiveXObject("Microsoft.XMLHTTP");
		}
		//on définit l'appel de la fonction au retour serveur
		xhr.onreadystatechange = function() { ConnexionEtudiant(xhr); };
    	//on appelle le fichier ConnexionEtudiant.php avec le code etudiant en parametre
		var vCdEtudiant = Saisie.CdEtudiant.value;
		// Conversion en majuscules
		vCdEtudiant = vCdEtudiant.toUpperCase();
		Saisie.CdEtudiant.value = vCdEtudiant;
		// appel 		
		xhr.open("GET", "../ScriptsPhp/ConnexionEtudiant.php?CdEtudiant=" + vCdEtudiant, true);
		// envoi de l'email et du mdp saisi 
		xhr.send(null);
	}
} 
// Traitement de la réponse de la demande de connexion.
function ConnexionEtudiant(xhr) {
	//alert ('readystate = ' + xhr.readyState);
	if (xhr.readyState == 4){
		var DocXML=xhr.responseXML;
		var vEtudiants = DocXML.getElementsByTagName("Etudiant");
		// il n'y a qu'un élément retourné
		var vEtudiant = vEtudiants.item(0).firstChild.data;
		// alert(vEtudiant);
		var vTxtCdEtudiant = document.getElementById('TxtCdEtudiant');
		if (vEtudiant == 'Inconnu') {
			vEtudiant = "Inconnu ! Ressaisir un code correct";
			document.getElementById('TxtCdEtudiant').style.color="red";
			document.getElementById('TxtCdEtudiant').style.visibility="visible";
			vCtlOk = false ;
			Saisie.CdEtudiant.focus();
		} else {
			// tout est ok
			vCtlOk = true;
			vEtudiant = "Bonjour " + vEtudiant;
			document.getElementById('TxtCdEtudiant').style.color="black";
			document.getElementById('TxtCdEtudiant').style.visibility="visible";
		}
		// alert(vEtudiant);
		// Si textContent reconnu, on l'utilise sinon on prend innerText ou du vide...
		if (vTxtCdEtudiant.textContent) {
			vTxtCdEtudiant.textContent = vEtudiant;
		} else {
			vTxtCdEtudiant.innerText = vEtudiant;
		}
	}
}

// Controle du code projet 1
function FctCdProjet1() {
	var vCdProjet = Saisie.CdProjet1.value;
	// Conversion en majuscules
	vCdProjet = vCdProjet.toUpperCase();
	Saisie.CdProjet1.value = vCdProjet;
	if (vCdProjet != "" ){
		// Appel de la fonction Ajax pour obtenir le nom du projet;
		// alert("appel Ajax");
		// par défaut le code est faux
		vCtlOk = false;
		var xhr = null;
		if (window.XMLHttpRequest) {
			xhr = new XMLHttpRequest();
		} else if (window.ActiveXObject) {
			xhr = new ActiveXObject("Microsoft.XMLHTTP");
		}
		//on définit l'appel de la fonction au retour serveur
		xhr.onreadystatechange = function() { ConnexionProjet1(xhr); };
    	//on appelle le fichier ConnexionProjet.php avec le code projet en parametre
		xhr.open("GET", "../ScriptsPhp/ConnexionProjet.php?CdProjet=" + vCdProjet, true);
		// envoi de l'email et du mdp saisi 
		xhr.send(null);
	}
}	
	
// Traitement de la réponse de la demande de connexion.
function ConnexionProjet1(xhr) {
	//alert ('readystate = ' + xhr.readyState);
	if (xhr.readyState == 4){
		var DocXML=xhr.responseXML;
		var vProjets = DocXML.getElementsByTagName("Projet");
		// il n'y a qu'un élément retourné
		var vProjet = vProjets.item(0).firstChild.data;
		// alert(vProjet);
		if (vProjet == "Inconnu") {
			var vTxt = document.getElementById('TxtCdProjet1');
			vProjet = "Inconnu ! Saisissez un code existant";
			document.getElementById('TxtCdProjet1').style.color="red";
			document.getElementById('TxtCdProjet1').style.visibility="visible";
			vCtlOk = false;
			// Saisie.CdProjet1.focus();
		} else {
			// tout est ok
			vCtlOk = true;
			var vTxt = document.getElementById('TxtCdProjet1');
			document.getElementById('TxtCdProjet1').style.color="black";
		};
		if (vTxt.textContent) {
			vTxt.textContent = vProjet;
		} else {
			vTxt.innerText = vProjet;
		}
	}
}

// Controle du code projet 2
function FctCdProjet2() {
	var vCdProjet = Saisie.CdProjet2.value;
	// Conversion en majuscules
	vCdProjet = vCdProjet.toUpperCase();
	Saisie.CdProjet2.value = vCdProjet;
	if (vCdProjet != "" ){
		// Appel de la fonction Ajax pour obtenir le nom du projet;
		// alert("appel Ajax");
		// par défaut le code est faux
		vCtlOk = false;
		var xhr = null;
		if (window.XMLHttpRequest) {
			xhr = new XMLHttpRequest();
		} else if (window.ActiveXObject) {
			xhr = new ActiveXObject("Microsoft.XMLHTTP");
		}
		//on définit l'appel de la fonction au retour serveur
		xhr.onreadystatechange = function() { ConnexionProjet2(xhr); };
    	//on appelle le fichier ConnexionProjet.php avec le code projet en parametre
		xhr.open("GET", "../ScriptsPhp/ConnexionProjet.php?CdProjet=" + vCdProjet, true);
		// envoi de l'email et du mdp saisi 
		xhr.send(null);
	}
}	
	
// Traitement de la réponse de la demande de connexion.
function ConnexionProjet2(xhr) {
	//alert ('readystate = ' + xhr.readyState);
	if (xhr.readyState == 4){
		var DocXML=xhr.responseXML;
		var vProjets = DocXML.getElementsByTagName("Projet");
		// il n'y a qu'un élément retourné
		var vProjet = vProjets.item(0).firstChild.data;
		// alert(vProjet);
		if (vProjet == "Inconnu") {
			var vTxt = document.getElementById('TxtCdProjet2');
			vProjet = "Inconnu ! Saisissez un code existant";
			document.getElementById('TxtCdProjet2').style.color="red";
			document.getElementById('TxtCdProjet2').style.visibility="visible";
			vCtlOk = false;
			// Saisie.CdProjet1.focus();
		} else {
			// tout est ok
			vCtlOk = true;
			var vTxt = document.getElementById('TxtCdProjet2');
			document.getElementById('TxtCdProjet2').style.color="black";
		};
		if (vTxt.textContent) {
			vTxt.textContent = vProjet;
		} else {
			vTxt.innerText = vProjet;
		}
	}
}


// Controle du code projet 3
function FctCdProjet3() {
	var vCdProjet = Saisie.CdProjet3.value;
	// Conversion en majuscules
	vCdProjet = vCdProjet.toUpperCase();
	Saisie.CdProjet3.value = vCdProjet;
	if (vCdProjet != "" ){
		// Appel de la fonction Ajax pour obtenir le nom du projet;
		// alert("appel Ajax");
		// par défaut le code est faux
		vCtlOk = false;
		var xhr = null;
		if (window.XMLHttpRequest) {
			xhr = new XMLHttpRequest();
		} else if (window.ActiveXObject) {
			xhr = new ActiveXObject("Microsoft.XMLHTTP");
		}
		//on définit l'appel de la fonction au retour serveur
		xhr.onreadystatechange = function() { ConnexionProjet3(xhr); };
    	//on appelle le fichier ConnexionProjet.php avec le code projet en parametre
		xhr.open("GET", "../ScriptsPhp/ConnexionProjet.php?CdProjet=" + vCdProjet, true);
		// envoi de l'email et du mdp saisi 
		xhr.send(null);
	}
}	
	
// Traitement de la réponse de la demande de connexion.
function ConnexionProjet3(xhr) {
	//alert ('readystate = ' + xhr.readyState);
	if (xhr.readyState == 4){
		var DocXML=xhr.responseXML;
		var vProjets = DocXML.getElementsByTagName("Projet");
		// il n'y a qu'un élément retourné
		var vProjet = vProjets.item(0).firstChild.data;
		// alert(vProjet);
		if (vProjet == "Inconnu") {
			var vTxt = document.getElementById('TxtCdProjet3');
			vProjet = "Inconnu ! Saisissez un code existant";
			document.getElementById('TxtCdProjet3').style.color="red";
			document.getElementById('TxtCdProjet3').style.visibility="visible";
			vCtlOk = false;
			// Saisie.CdProjet1.focus();
		} else {
			// tout est ok
			vCtlOk = true;
			var vTxt = document.getElementById('TxtCdProjet3');
			document.getElementById('TxtCdProjet3').style.color="black";
		};
		if (vTxt.textContent) {
			vTxt.textContent = vProjet;
		} else {
			vTxt.innerText = vProjet;
		}
	}
}


// Controle de la durée 1
function FctNbDuree1() {
	var vTxtErreur = document.getElementById('TxtErreur1');
	vErreur = "";
	if (isNaN(Saisie.NbDuree2.value) || Saisie.NbDuree2.value == "") {
		vNbDuree2 = 0;
	} else {
		vNbDuree2 = parseInt(Saisie.NbDuree2.value);
	}
	if (isNaN(Saisie.NbDuree3.value) || Saisie.NbDuree3.value == "") {
		vNbDuree3 = 0;
	} else {
		vNbDuree3 = parseInt(Saisie.NbDuree3.value);
	}
	if (Saisie.NbDuree1.value == "" ) {
		if (Saisie.CdProjet1.value != "") {
			vErreur = "Saisir une durée ! ";
			document.getElementById('TxtErreur1').style.color="red";
			document.getElementById('TxtErreur1').style.visibility="visible";
			vCtlOk = false;
		}
	} else {
	//  (Saisie.NbDuree1.value != "") {
		if (Saisie.CdProjet1.value == "") {
			vErreur = "Saisir une durée que pour un projet ! ";
			document.getElementById('TxtErreur1').style.color="red";
			document.getElementById('TxtErreur1').style.visibility="visible";
			vCtlOk = false;
		} else {
			if (isNaN(Saisie.NbDuree1.value)) {
				vErreur = "Saisir un nombre ! ";
				document.getElementById('TxtErreur1').style.color="red";
				document.getElementById('TxtErreur1').style.visibility="visible";
				vCtlOk = false;
			} else {
				Saisie.NbTotal.value = parseInt(Saisie.NbDuree1.value) + vNbDuree2 + vNbDuree3 ;
				vCtlOk = true;
			}
		}
	}
	if (vTxtErreur.textContent) {
		vTxtErreur.textContent = vErreur;
	} else {
		vTxtErreur.innerText = vErreur;
	}

}

// Controle de la durée 2
function FctNbDuree2() {
	var vTxtErreur = document.getElementById('TxtErreur2');
	vErreur = "";
	if (isNaN(Saisie.NbDuree1.value) || Saisie.NbDuree1.value == "") {
		vNbDuree1 = 0;
	} else {
		vNbDuree1 = parseInt(Saisie.NbDuree1.value);
	}
	if (isNaN(Saisie.NbDuree3.value) || Saisie.NbDuree3.value == "") {
		vNbDuree3 = 0;
	} else {
		vNbDuree3 = parseInt(Saisie.NbDuree3.value);
	}
	if (Saisie.NbDuree2.value == "" ) {
		if (Saisie.CdProjet2.value != "") {
			vErreur = "Saisir une durée ! ";
			document.getElementById('TxtErreur2').style.color="red";
			document.getElementById('TxtErreur2').style.visibility="visible";
			vCtlOk = false;
		}
	} else {
	//  (Saisie.NbDuree1.value != "") {
		if (Saisie.CdProjet2.value == "") {
			vErreur = "Saisir une durée que pour un projet ! ";
			document.getElementById('TxtErreur2').style.color="red";
			document.getElementById('TxtErreur2').style.visibility="visible";
			vCtlOk = false;
		} else {
			if (isNaN(Saisie.NbDuree2.value)) {
				vErreur = "Saisir un nombre ! ";
				document.getElementById('TxtErreur2').style.color="red";
				document.getElementById('TxtErreur2').style.visibility="visible";
				vCtlOk = false;
			} else {
				Saisie.NbTotal.value = parseInt(Saisie.NbDuree2.value) + vNbDuree1 + vNbDuree3 ;
				vCtlOk = true;
			}
		}
	}
	if (vTxtErreur.textContent) {
		vTxtErreur.textContent = vErreur;
	} else {
		vTxtErreur.innerText = vErreur;
	}
}

// Controle de la durée 3
function FctNbDuree3() {
	var vTxtErreur = document.getElementById('TxtErreur1');
	vErreur = "";
	if (isNaN(Saisie.NbDuree2.value) || Saisie.NbDuree2.value == "") {
		vNbDuree2 = 0;
	} else {
		vNbDuree2 = parseInt(Saisie.NbDuree2.value);
	}
	if (isNaN(Saisie.NbDuree1.value) || Saisie.NbDuree1.value == "") {
		vNbDuree1 = 0;
	} else {
		vNbDuree1 = parseInt(Saisie.NbDuree1.value);
	}
	if (Saisie.NbDuree3.value == "" ) {
		if (Saisie.CdProjet3.value != "") {
			vErreur = "Saisir une durée ! ";
			document.getElementById('TxtErreur3').style.color="red";
			document.getElementById('TxtErreur3').style.visibility="visible";
			vCtlOk = false;
		}
	} else {
	//  (Saisie.NbDuree1.value != "") {
		if (Saisie.CdProjet3.value == "") {
			vErreur = "Saisir une durée que pour un projet ! ";
			document.getElementById('TxtErreur3').style.color="red";
			document.getElementById('TxtErreur3').style.visibility="visible";
			vCtlOk = false;
		} else {
			if (isNaN(Saisie.NbDuree3.value)) {
				vErreur = "Saisir un nombre ! ";
				document.getElementById('TxtErreur3').style.color="red";
				document.getElementById('TxtErreur3').style.visibility="visible";
				vCtlOk = false;
			} else {
				Saisie.NbTotal.value = parseInt(Saisie.NbDuree3.value) + vNbDuree2 + vNbDuree1 ;
				vCtlOk = true;
			}
		}
	}
	if (vTxtErreur.textContent) {
		vTxtErreur.textContent = vErreur;
	} else {
		vTxtErreur.innerText = vErreur;
	}
}


// Controle du commentaire sur le projet1
function FctTxtProjet1() {
	var vTxtErreur = document.getElementById('TxtErreur1');
	if (Saisie.TxtProjet1.value == "" ) {
		if (Saisie.CdProjet1.value != "") {
			vErreur = "Saisir un commentaire ! ";
			document.getElementById('TxtErreur1').style.color="red";
			document.getElementById('TxtErreur1').style.visibility="visible";
			vCtlOk = false;
		} else {
			vErreur = "";
		}
	} else {
		// Un ommentaire a été saisi 
		if (Saisie.CdProjet1.value == "") {
			vErreur = "Ne pas saisir de commentaire sans projet ! ";
			document.getElementById('TxtErreur1').style.color="red";
			document.getElementById('TxtErreur1').style.visibility="visible";
			vCtlOk = false;
		} else {
			vErreur = "";
			vCtlOk = true;
		}
	} 
	if (vTxtErreur.textContent) {
		vTxtErreur.textContent = vErreur;
	} else {
		vTxtErreur.innerText = vErreur;
	}
}

// Controle du commentaire sur le projet2
function FctTxtProjet2() {
	var vTxtErreur = document.getElementById('TxtErreur2');
	if (Saisie.TxtProjet2.value == "" ) {
		if (Saisie.CdProjet2.value != "") {
			vErreur = "Saisir un commentaire ! ";
			document.getElementById('TxtErreur2').style.color="red";
			document.getElementById('TxtErreur2').style.visibility="visible";
			vCtlOk = false;
		} else {
			vErreur = "";
		}
	} else {
		// Un ommentaire a été saisi 
		if (Saisie.CdProjet2.value == "") {
			vErreur = "Ne pas saisir de commentaire sans projet ! ";
			document.getElementById('TxtErreur1').style.color="red";
			document.getElementById('TxtErreur1').style.visibility="visible";
			vCtlOk = false;
		} else {
			vErreur = "";
			vCtlOk = true;
		}
	} 
	if (vTxtErreur.textContent) {
		vTxtErreur.textContent = vErreur;
	} else {
		vTxtErreur.innerText = vErreur;
	}
}

// Controle du commentaire sur le projet3
function FctTxtProjet3() {
	var vTxtErreur = document.getElementById('TxtErreur1');
	if (Saisie.TxtProjet1.value == "" ) {
		if (Saisie.CdProjet1.value != "") {
			vErreur = "Saisir un commentaire ! ";
			document.getElementById('TxtErreur3').style.color="red";
			document.getElementById('TxtErreur3').style.visibility="visible";
			vCtlOk = false;
		} else {
			vErreur = "";
		}
	} else {
		// Un ommentaire a été saisi 
		if (Saisie.CdProjet1.value == "") {
			vErreur = "Ne pas saisir de commentaire sans projet ! ";
			document.getElementById('TxtErreur3').style.color="red";
			document.getElementById('TxtErreur3').style.visibility="visible";
			vCtlOk = false;
		} else {
			vErreur = "";
			vCtlOk = true;
		}
	} 
	if (vTxtErreur.textContent) {
		vTxtErreur.textContent = vErreur;
	} else {
		vTxtErreur.innerText = vErreur;
	}
}

// Fonction d'envoi
function FctEnvoi() {
	// vérifier au moins l'existence d'un code projet
	if ((Saisie.CdProjet1.value == "") && (Saisie.CdProjet2.value == "") && (Saisie.CdProjet3.value == "")) {
		vCtlOk = false;
		var vTxtErreur = document.getElementById('TxtErreur');
		var vErreur = "Saisir au moins un code projet";
		document.getElementById('TxtErreur').style.color="red";
		document.getElementById('TxtErreur').style.visibility="visible";
		if (vTxtErreur.textContent) {
			vTxtErreur.textContent = vErreur;
		} else {
			vTxtErreur.innerText = vErreur;
		}
	}
	// Si tout est ok : transformer le bouton en submit !
	if (vCtlOk) {
		// alert("c est ok");
		//document.getElementById("IdEnvoi").type = "submit" ;
		//document.getElementById("IdEnvoi").click();
		document.getElementById("Saisie").submit();
	
	}
}