/* --------------------- Code JS - IFBB France App ----------------------- */

    
function verifForm() {

    // Récuperation des id du formulaire
    var verifForm = document.getElementById('formProfil').value;
    var verifNom = document.getElementById('verifNom').value;
    var verifPrenom = document.getElementById('verifPrenom').value;
    var verifLicence = document.getElementById('verifLicence').value;
    var verifNaissance = document.getElementById('verifNaissance').value;
    var verifMail = document.getElementById('verifMail').value;
    var verifPhone = document.getElementById('verifPhone').value;
    var verifCategorie = document.getElementById('verifCategorie').value;
    var verifPoids = document.getElementById('verifPoids').value;
    var verifTaille = document.getElementById('verifTaille').value;
    var verifLastcontest = document.getElementById('verifLastcontest').value;
    var verifNextcontest = document.getElementById('verifNextcontest').value;
    var verifPresentation = document.getElementById('verifPresentation').value;

    // Initialisation des variable du formulaire
	 document.getElementById("prenomOk").innerHTML = verifPrenom; 
     document.getElementById("nomOk").innerHTML = verifNom; 
     document.getElementById('licenceOk').innerHTML = verifLicence;
     document.getElementById('naissanceOk').innerHTML = verifNaissance;
     document.getElementById('mailOk').innerHTML = verifMail;
     document.getElementById('phoneOk').innerHTML = verifPhone;
     document.getElementById('categorieOk').innerHTML = verifCategorie; 
     document.getElementById('poidsOk').innerHTML = verifPoids;
     document.getElementById('tailleOk').innerHTML = verifTaille;
     document.getElementById('lastcontestOk').innerHTML = verifLastcontest;
     document.getElementById('nextcontestOk').innerHTML = verifNextcontest;
     document.getElementById('presentationOk').innerHTML = verifPresentation;
}; 
