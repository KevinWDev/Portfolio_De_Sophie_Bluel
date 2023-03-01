let data;
const reponse = await fetch('http://localhost:5678/api/works', {
    method: 'GET',
    headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
    }

})

if (reponse.ok === true) {
    data = await reponse.json();
    console.log(data)

} else {
    throw new Error("Impossible d'accéder au serveur !")
}


let dataCategorie;

const categories = await fetch(`http://localhost:5678/api/categories`, {
    method: 'GET',
    headers: {
        'Accept': 'applicatio,/json',
        "Content-Type": "application/json"
    },
});

if (reponse.ok === true) {
    // Réponse de l'API (catégories) au format JSON
    dataCategorie = await categories.json()
    console.log(dataCategorie)



} else {
    throw new Error("Impossible d'accéder au serveur !")
}

let btn;
const sectionPortfolio = document.querySelector('#portfolio')
const formFilters = document.createElement('form')
formFilters.setAttribute("id", "filters")

sectionPortfolio.appendChild(formFilters)

const gallery = document.querySelector('.gallery')
formFilters.after(gallery)


let boutonAll = {
    id: 4,
    name: 'Tous'
}
dataCategorie.unshift(boutonAll)

for (let categorie of dataCategorie) {

    btn = document.createElement('button')

    btn.innerText = categorie.name
    btn.setAttribute("id", categorie.id)
    btn.setAttribute("class", "btn")

    btn.style.padding = "9px 30px";
    console.log(btn)

    formFilters.appendChild(btn)
}







function genererElements(data) {
    for (let i = 0; i < data.length; i++) {

        // Création d'une balise dédiée au éléments  du tableau
        const cardElement = document.createElement('figure');
        // Création de l'élément img
        const imageElement = document.createElement('img');
        imageElement.src = data[i].imageUrl;
        const figcaptionElement = document.createElement('figcaption');
        figcaptionElement.innerText = data[i].title;

        // On rattache les balise img et figcation à la balise figure
        cardElement.appendChild(imageElement);
        cardElement.appendChild(figcaptionElement);


        // On rattache la balise figure à son parent .gallery
        document.querySelector(".gallery")
            .appendChild(cardElement);

    };
}

genererElements(data)

document.querySelector('.btn')
    .addEventListener("click", function (e) {
        e.preventDefault();
        const allCategory = data.filter(function (all) {
            return all.categoryId
        });

        console.log(allCategory);

        document.querySelector('.gallery').innerHTML = "";
        genererElements(allCategory);

    });

document.querySelector('.btn')
    .addEventListener("click", function (event) {
        event.preventDefault();
        const categoryObjects = data.filter(function (objets) {
            return objets.categoryId === 1;
        });
        console.log(categoryObjects)

        document.querySelector('.gallery').innerHTML = "";
        genererElements(categoryObjects);
    });

document.querySelector('.btn')
    .addEventListener("click", function (e) {
        e.preventDefault();
        const categoryAppartments = data.filter(function (appartments) {
            return appartments.categoryId === 2;
        });
        console.log(categoryAppartments);

        document.querySelector(".gallery").innerHTML = "";
        genererElements(categoryAppartments);
    });

document.querySelector('.btn')
    .addEventListener("click", function (e) {
        e.preventDefault();
        const categoryHotelsAndRestaurants = data.filter(function (hotelsAndRestaurants) {
            return hotelsAndRestaurants.categoryId === 3;
        });
        console.log(categoryHotelsAndRestaurants);

        document.querySelector(".gallery").innerHTML = "";
        genererElements(categoryHotelsAndRestaurants);
    });












