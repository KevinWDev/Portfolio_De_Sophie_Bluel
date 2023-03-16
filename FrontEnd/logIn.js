// Athentification
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
      
    } else {
      // On informe l'utilisateur si email ou MDP incorrect
      let myError = document.querySelector('#error');
      myError.innerHTML = "Identifiant ou mot de passe incorrecte !";
      myError.style.color = "red";
      
    } 
     
    throw new Error("Impossible d'accéder au serveur !");
  
  });
};

connexion();



// // HEADER AVEC BANNIERE EDITEUR
// if (sessionStorage.getItem("token")) {
//   // Récupération de la balise header
//   const headerIndex = document.querySelector('header');
//   headerIndex.setAttribute("id", "headerEdition")
//   headerIndex.style.margin = "0";
  
//   // Création d'une div pour la bannière en mode editeur
//   const banniereDiv = document.createElement('div');
//   banniereDiv.setAttribute("id", "bloc-mode-editeur")

//   // Récupération du titre et du menu de nav
//   const titreIndex = document.querySelector('h1');
//   const navIndex = document.querySelector('header nav');
  
//   // Création d'une div blocHeader
//   const blocHeader = document.createElement('div');
//   blocHeader.setAttribute("id", "bloc-header")

//   // Ajout des enfants (titre et menu nav) au blocHeader
//   blocHeader.append(titreIndex);
//   blocHeader.append(navIndex)

//   // Ajout des enfants (div : blocHeader et bannière) au header
//   headerIndex.append(blocHeader)
//   headerIndex.append(banniereDiv)

//   // Placement de la bannière avant le blocHeader
//   banniereDiv.after(blocHeader)
  
//   // Ajout de l'icone, paragraphe et bouton
//   banniereDiv.innerHTML = `<i class="fa-regular fa-pen-to-square"></i>`
//     +`<p>Mode édition</p>`
//     +`<button type="submit">publier les changements</button>`;

// };


// // BOUTON MODIFIER
// if (sessionStorage.getItem("token")) {
//   // BOUTON MODIFIER INTRODUCTION
//   // Récupération de la balise figure
//   const figureIntroIndex = document.querySelector('#introduction figure');
//   figureIntroIndex.setAttribute("id", "figureIntro")
  
//   // Création du bouton modifier
//   const btnModifier = document.createElement('a')
//   btnModifier.setAttribute("id", "btnModifierFigure")
//   btnModifier.innerHTML = `<i class="fa-regular fa-pen-to-square"></i>modifier`;
  
//   // Ajout du bouton au parent
//   figureIntroIndex.append(btnModifier)


//   // BOUTON MODIFIER MES PROJETS H2
//   // Récupération de la section avec id portfolio et du titre h2
//   const portfolio = document.querySelector('#portfolio');
//   const titleProjets = document.querySelector('#portfolio h2');

//   // Création d'une div
//   const divH2 = document.createElement('div')
//   divH2.setAttribute("id", "bloc-h2")

//   // Récupération des filtres pour display none en mode édition
//   const filters = document.querySelector('#filters')
//   filters.style.display = "none"

  
//   // Ajout du h2 à la div
//   divH2.append(titleProjets)

//   // Ajout de la div à la section portfolio
//   portfolio.append(divH2)

//   // Passer la divH2 avant les filtres
//   filters.before(divH2)
//   // divH2.after(filters)

//   // Création du bouton modifier
//   const btnModifierH2 = document.createElement('a');
//   btnModifierH2.setAttribute("id", "btnModifierH2");
//   btnModifierH2.innerHTML = `<i class="fa-regular fa-pen-to-square"></i>modifier`;

//   // Ajout du bouton à la divH2
//   divH2.append(btnModifierH2)
  


  
//   // const btnModifierH2 = document.createElement('a')
//   // btnModifierH2.setAttribute("id", "btnModifierH2");
//   // btnModifierH2.innerHTML = `<i class="fa-regular fa-pen-to-square"></i>modifier`;

//   // titleProjets.append(btnModifierH2)

  

// }



// let inputEmail = document.querySelector('#email');
// let inputPassword = document.querySelector('#password');
// let myErrorEmail = document.querySelector('#errorEmail');
// let myErrorPassword = document.querySelector('#errorPassword');


// async function connexion() {

//   const formulaireLogIn = document.querySelector('#formLogIn');

//   formulaireLogIn.addEventListener("submit", async function (event) {
//     event.preventDefault()

//     let users = {
//       email: document.querySelector('#email').value,
//       password: document.querySelector('#password').value
//     };

    
//     console.log(users)
   
//     const response = await fetch(`http://localhost:5678/api/users/login`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },

//       body: JSON.stringify(users)

//     });
    
    
//     if (response.ok) {
//       console.log(response)
//       let result = await response.json()
//       console.log(result)
      

//          sessionStorage.setItem("token", result.token);
      
//       window.location.href = 'index.html';

//     } 
//      else {

//    let myError = document.querySelector('#error')
//       myError.innerHTML = "Identifiant ou mot de passe incorrecte !";
//       myError.style.color = "red";
//     } 

//      throw new Error("Impossible d'accéder au serveur !");
      


//   })
// }

// connexion()