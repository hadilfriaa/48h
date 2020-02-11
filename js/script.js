function validateForm() {
    var name = document.forms["form"]["name"].value;
    if (name == "") {
      alert("Le nom doit etre entrée !");
      return false;
    }

    var mail = document.forms["form"]["prenom"].value;
    if (mail == "") {
      alert("Le mail doit etre entrée !");
      return false;
    }

    var numero = document.forms["form"]["numero"].value;
    if (numero == "") {
      alert("Le numero du médecin doit etre entrée !");
      return false;
    }

    var medicament = document.forms["form"]["medicament"].value;
    if (medicament == "") {
      alert("Le nom du medicament doit etre entrée !");
      return false;
    }

    var posologie = document.forms["form"]["posologie"].value;
    if (posologie == "") {
      alert("La posologie doit etre entrée !");
      return false;
    }
  }

function SendValues() {

    var nameid = document.getElementById("name").value;
    localStorage.setItem("nameid",nameid);

    var prenomid = document.getElementById("prenom").value;
    localStorage.setItem("prenomid",prenomid);

    var numeroid = document.getElementById("numero").value;
    localStorage.setItem("numeroid",numeroid);

    var medicamentid = document.getElementById("medicament").value;
    localStorage.setItem("medicamentid",medicamentid);

    var posologieid = document.getElementById("posologie").value;
    localStorage.setItem("posologieid",posologieid);
  }