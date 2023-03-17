let travaux = [];

export async function getWorks() {
    // Appel de l'API
    const reponse = await fetch(`http://localhost:5678/api/works/`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    });
    if (reponse.ok === true) {
        // Réponse de l'API
        travaux = await reponse.json();
        console.log(travaux)

        genererElements(travaux)

    } else {
        throw new Error("Impossible d'accéder au serveur !");
    };
};

await getWorks();


// ----------- GENERER BOUTON AVEC API CATEGORIE --------------

// Récupération des catégoriees depuis l'API
let categories;

async function getCategory() {
    const reponse = await fetch(`http://localhost:5678/api/categories`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            "Content-Type": "application/json"
        },
    });

    if (reponse.ok === true) {
        // Réponse de l'API (catégories) au format JSON
        categories = await reponse.json();
        console.log(categories);

        genererBoutons(travaux);


    } else {
        throw new Error("Impossible d'accéder au serveur !");
    };
};

getCategory();


let btn;
// Récupération de la balise section avec id portfolio
const sectionPortfolio = document.querySelector('#portfolio');

// Création d'un formulaire
const formFilters = document.createElement('form');
formFilters.setAttribute("id", "filters");

// Ajout du foprmulaire au paent avec l'id portfolio
sectionPortfolio.appendChild(formFilters);

// Récupération de la div galerie
const gallery = document.querySelector('.gallery');
formFilters.after(gallery);



async function genererBoutons() {
    let boutonAll = {
        id: 0,
        name: 'Tous'
    };
    categories.unshift(boutonAll);

    for (let categorie of categories) {
        console.log(categorie.id);
        btn = document.createElement('button');

        btn.innerText = categorie.name;
        btn.setAttribute("id", categorie.id);
        btn.setAttribute("class", "btn");

        btn.style.padding = "9px 30px";

        formFilters.appendChild(btn);
        btn.addEventListener("click", function (e) {
            e.preventDefault();
            const category = travaux.filter(function (travaux) {
                // Si catégorie = 0 alors recupère tous sinon récupère que ceux ou l'id match
                if (categorie.id === 0) {
                    return true;
                } else {
                    return travaux.categoryId === categorie.id;
                };

            });

            console.log(category);

            document.querySelector('.gallery').innerHTML = "";
            genererElements(category);

        });
    };
};


// Fonction qui génère les travaux   
export async function genererElements(travaux) {
    for (let i = 0; i < travaux.length; i++) {

        // Création d'une balise dédiée au éléments  du tableau
        const cardElement = document.createElement('figure');
        // Création de l'élément img
        const imageElement = document.createElement('img');
        imageElement.src = travaux[i].imageUrl;
        const figcaptionElement = document.createElement('figcaption');
        figcaptionElement.innerText = travaux[i].title;

        // On rattache les balise img et figcation à la balise figure
        cardElement.appendChild(imageElement);
        cardElement.appendChild(figcaptionElement);

        // On rattache la balise figure à son parent .gallery
        document.querySelector(".gallery")
            .appendChild(cardElement);

    };
};