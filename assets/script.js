const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// Modifie le DOM en ajoutant une DIV de class "DOT" pour chaque éléments image présent dans le tableau "slides"


for (let i = 0; i < slides.length; i++) {
	let leDot = document.createElement("div");
	leDot.classList.add("dot")
	let lesDots = document.querySelector("#banner > div.dots");
	lesDots.appendChild(leDot);
}




// générer (i) dot dans [dots]
// si l'image affichée correspond à l'image [x] de slides
// remplacer [dot][i] de [dots] par [dot-selected]


document
	.getElementById("arrowLeft")
	.addEventListener("click", function(event){
		event.preventDefault();    
		event.stopPropagation();
		document
			alert("gauche");
})

document
	.getElementById("arrowRight")
	.addEventListener("click", function(event){
		event.preventDefault();    
		event.stopPropagation();
		document
			alert("droite");
})
