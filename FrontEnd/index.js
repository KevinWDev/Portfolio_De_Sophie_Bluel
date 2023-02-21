/*async function works() {
    const reponse = await fetch("http://localhost:5678/api/works", {
        headers: {
            Accept: 'application/json',
        }
    });
};

works()*/
console.log('coucou')
/*async function works (work) {
    const reponse = await fetch("http://localhost:5678/api/works", {
        headers: {
            Method: 'GET',
            Accept: 'application/json',
        }
        
    });
    const work = await reponse.json();
      console.log(work)
};

works()*/


// Récupération de l'API 
const reponse = await fetch("http://localhost:5678/api/works", {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    }
});
// Réponse de l'API au format JSON
const works = await reponse.json();
console.log(works)




// Boucle pour parcourir les éléments du tableau works
for (let i = 0; i < works.length; i++) {

    const work = works[i];

    // Création d'une balise dédiée au éléments  du tableau
    const figureElement = document.createElement('figure');
    // Création de l'élément img
    const imageElement = document.createElement('img');
    imageElement.src = work.imageUrl;
    const figcaptionElement = document.createElement('figcaption');
    figcaptionElement.innerText = work.title;

    // On rattache les balise img et figcation à la balise figure
    figureElement.appendChild(imageElement);
    figureElement.appendChild(figcaptionElement);

    // On rattache la balise figure à son parent .gallery
    document.querySelector(".gallery")
        .appendChild(figureElement);
       
};


document.querySelector('#btn-all')
    .addEventListener("click", function (e) {
        e.preventDefault();
        const allCategory = works.filter(function (all) {
            return all.category
        });
        console.log(allCategory);
    });



// const noms = works.map(category=> category.category.name);
// document.querySelector('#btn-objects')
//     .addEventListener("click", function (e) {
//         e.preventDefault();
//         const categoryObjetcs = works.filter(function (objetcs) {
//             return 
//         });
//         console.log();
//     });

// console.log(noms)




// const buttonAll = document.createElement('button')
// const textAll = document.createTextNode("Tous")
// buttonAll.appendChild(textAll);

// const buttonObjects = document.createElement('button')
// const textObjects = document.createTextNode("Objets")
// buttonObjects.appendChild(textObjects);


// const buttonAppartments = document.createElement('button')
// const textAppartments = document.createTextNode("Appartements")
// buttonAppartments.appendChild(textAppartments);


// const buttonHotelAndRestaurants = document.createElement('button')
// const textHotelAndRestaurants = document.createTextNode("Hôtel & restaurants")
// buttonHotelAndRestaurants.appendChild(textHotelAndRestaurants);

// filters
//     .appendChild(buttonAll)
//     .appendChild(buttonObjects)
//     .appendChild(buttonAppartments)
//     .appendChild(buttonHotelAndRestaurants)

