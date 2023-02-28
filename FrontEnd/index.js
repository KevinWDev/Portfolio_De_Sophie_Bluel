console.log('coucou')
// // Récupération de l'API
const reponse = await fetch(`http://localhost:5678/api/works/`, {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    },
}
);
// Réponse de l'API au format JSON
const travaux = await reponse.json();
console.log(travaux)

// Création des bouton en JS
// let sectionPortfolio = document.querySelector('#portfolio')
//     .innerHTML = '<h2>Mes Projets</h2>' +
//     '<form id="filters">'
//     + '<button id="buttonAll" class="btn" >Tous</button>'
//     + '<button id="buttonObjects" class="btn" >Objets</button>'
//     + '<button id="buttonAppartments" class="btn" >Appartements</button>'
//     + '<button id="buttonHotelAndRestaurants" class="btn" >Hôtels & restaurants</button>' +
//     '</form>'
//     + '<div class="gallery"></div>';

// Boucle pour parcourir les éléments du tableau works
function genererElements(travaux) {
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

genererElements(travaux);

document.querySelector('#buttonAll')
    .addEventListener("click", function (e) {
        e.preventDefault();
        const allCategory = travaux.filter(function (all) {
            return all.categoryId
        });

        console.log(allCategory);

        document.querySelector('.gallery').innerHTML = "";
        genererElements(allCategory);

    });

document.querySelector('#buttonObjects')
    .addEventListener("click", function (event) {
        event.preventDefault();
        const categoryObjects = travaux.filter(function (objets) {
            return objets.categoryId === 1;
        });
        console.log(categoryObjects)

        document.querySelector('.gallery').innerHTML = "";
        genererElements(categoryObjects);
    });

document.querySelector('#buttonAppartments')
    .addEventListener("click", function (e) {
        e.preventDefault();
        const categoryAppartments = travaux.filter(function (appartments) {
            return appartments.categoryId === 2;
        });
        console.log(categoryAppartments);

        document.querySelector(".gallery").innerHTML = "";
        genererElements(categoryAppartments);
    });

document.querySelector('#buttonHotelAndRestaurants')
    .addEventListener("click", function (e) {
        e.preventDefault();
        const categoryHotelsAndRestaurants = travaux.filter(function (hotelsAndRestaurants) {
            return hotelsAndRestaurants.categoryId === 3;
        });
        console.log(categoryHotelsAndRestaurants);

        document.querySelector(".gallery").innerHTML = "";
        genererElements(categoryHotelsAndRestaurants);
    });


// Création des bouton en JS
/*let sectionPortfolio = document.querySelector('#portfolio')
 .innerHTML =  '<h2>Mes Projets</h2>' +
 '<form id=formFilter>'
 + '<button id=buttonAll class=btn >Tous</button>'
 + '<button id=buttonObjects class=btn >Objets</button>'
 + '<button id=buttonAppartments class=btn >Appartements</button>'
 + '<button id=buttonHotelAndRestaurants class=btn >Hôtels & restaurants</button>'
 '</form>';
 
 const formFilter = document.querySelector('#formFilter')
 formFilter.style.display = 'flex';
 formFilter.style.justifyContent = 'center';
 formFilter.style.gap = '10px';
 formFilter.style.marginBottom = '51px';
 
let allButton = document.querySelectorAll('.btn');
 
 
for (let btn of allButton) {
 btn.style.border = '1px solid #1D6154'
 btn.style.borderRadius = '60px';
 btn.style.height = '37px';
 btn.style.font = 'inherit';
 btn.style.color = '#1D6154';
 btn.style.background = 'white';
 btn.style.fontWeight = '700';
 btn.style.fontFamily = 'syne';
 btn.addEventListener("mouseenter", function(e) {
     
     btn.style.background = '#1D6154';
     btn.style.color = 'white';
     
 })
 
 btn.addEventListener("mouseleave", function (e) {
     btn.style.background = 'white';
     btn.style.color = '#1D6154'
 
 })
 
}
 
document.querySelector('#buttonAll')
 .style.padding = '9px 30px 9px 28px';
document.querySelector('#buttonObjects')
 .style.padding = '9px 22px 9px 20px';
document.querySelector('#buttonAppartments')
 .style.padding = '9px 15px 9px 14px';
document.querySelector('#buttonHotelAndRestaurants')
 .style.padding = '9px 11px 9px 9px';
*/ 