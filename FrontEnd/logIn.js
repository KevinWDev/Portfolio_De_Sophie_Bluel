// Athentification

let myErrorEmail = document.querySelector('#errorEmail')
let myErrorPassword = document.querySelector('#errorPassword')

async function connexion() {

  const formulaireLogIn = document.querySelector('#formLogIn');

  formulaireLogIn.addEventListener("submit", async function (event) {
    event.preventDefault()

    let users = {
      email: document.querySelector('#email').value,
      password: document.querySelector('#password').value
    };


    console.log(users);
  //  Envoie à l'API
    const response = await fetch(`http://localhost:5678/api/users/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },

      body: JSON.stringify(users)

    });

    if (response.ok === true) {
      // Récupération de la réponse
      console.log(response);
      const result = await response.json();
      console.log(result);

      // On stocke le token
      sessionStorage.setItem("token", result.token);
      const token = sessionStorage.getItem("token");
      window.location.href = 'index.html';
      
    } else if (response.status === 404){
    
      myErrorEmail.style.display = "block"
      myErrorEmail.innerHTML = "L'email est incorrect !"
      myErrorEmail.style.color = "red"
      
         
    } else if (response.status === 401) {
      
      myErrorPassword.style.display = "block"
      myErrorPassword.innerHTML = "Le mot de passe est incorrect !"
      myErrorPassword.style.color = "red"
      
    } else {

      throw new Error("Impossible d'accéder au serveur !");

    } 
  });
};

connexion();


// Permet de reset les messages d'erreurs
document.querySelector('#email').addEventListener("input", function(e) {
  e.preventDefault()
  myErrorEmail.style.display = "none"
})

document.querySelector('#password').addEventListener("input", function(e) {
  e.preventDefault()
  myErrorPassword.style.display = "none"
})