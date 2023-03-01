let travaux;

async function getWorks() {
    const reponse = await fetch(`http://localhost:5678/api/works/`, {
        method: 'GET',
        headers: {
            'Accept': 'applicatio,/json',
            'Content-Type': 'application/json',
        }
    })
    if (reponse.ok === true) {
        travaux = await reponse.json()
        console.log(travaux)
        
        genererElements()
        

    } else {
        throw new Error("Impossible d'accéder au serveur !")
    }
}

getWorks()


// ----------- GENERER BOUTON AVEC API CATEGORIE --------------

// Récupération des catégoriees depuis l'API
let categories;

async function getCategory() {
    const reponse = await fetch(`http://localhost:5678/api/categories`, {
        method: 'GET',
        headers: {
            'Accept': 'applicatio,/json',
            "Content-Type": "application/json"
        },
    });

    if (reponse.ok === true) {
        // Réponse de l'API (catégories) au format JSON
        categories = await reponse.json()
        console.log(categories)

        genererBoutons(categories)
        

    } else {
        throw new Error("Impossible d'accéder au serveur !")
    }


}

getCategory()

let btn;

const sectionPortfolio = document.querySelector('#portfolio')
const formFilters = document.createElement('form')
formFilters.setAttribute("id", "filters")

sectionPortfolio.appendChild(formFilters)

const gallery = document.querySelector('.gallery')
formFilters.after(gallery)

async function genererBoutons(categories) {
    let boutonAll = {
        id: 4,
        name: 'Tous'
    }
    categories.unshift(boutonAll)
    
    for (let categorie of categories) {

        btn = document.createElement('button')
        
        btn.innerText = categorie.name
        btn.setAttribute("id", categorie.id)
        btn.setAttribute("class", "btn")
        
        btn.style.padding = "9px 30px";
        console.log(btn)
        console.log(categorie)
        formFilters.appendChild(btn)
    
        
        }

        genererElements(travaux)

        document.querySelector('.btn')
        .addEventListener("click", function (e) {
            e.preventDefault();
            const allCategory = travaux.filter(function (all) {
                return all.categoryId
    
                
            });
    
            console.log(allCategory);
    
            document.querySelector('.gallery').innerHTML = "";
            genererElements(allCategory);
            
        });
    
            document.getElementById('1')
        .addEventListener("click", function (event) {
            event.preventDefault();
            const categoryObjects = travaux.filter(function (objets) {
                return objets.categoryId === 1;
            });
            console.log(categoryObjects)
    
            document.querySelector('.gallery').innerHTML = "";
            genererElements(categoryObjects);
        });
    
        document.getElementById('2')
        .addEventListener("click", function (e) {
            e.preventDefault();
            const categoryAppartments = travaux.filter(function (appartments) {
                return appartments.categoryId === 2;
            });
            console.log(categoryAppartments);
    
            document.querySelector(".gallery").innerHTML = "";
            genererElements(categoryAppartments);
        });
    
        document.getElementById('3')
        .addEventListener("click", function (e) {
            e.preventDefault();
            const categoryHotelsAndRestaurants = travaux.filter(function (hotelsAndRestaurants) {
                return hotelsAndRestaurants.categoryId === 3;
            });
            console.log(categoryHotelsAndRestaurants);
    
            document.querySelector(".gallery").innerHTML = "";
            genererElements(categoryHotelsAndRestaurants);
        });
    }     


    

   
async function genererElements(travaux) {
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



