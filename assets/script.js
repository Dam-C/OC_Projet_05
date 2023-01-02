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
let count = 0; // pour naviguer dans les index de slides

for (let i = 0; i < slides.length; i++) { //pour créer autant de points qu'il y a d'images + texte dans "slides"
	let leDot = document.createElement("div");
	leDot.classList.add("dot")
	let lesDots = document.querySelector("#banner > div.dots");
	lesDots.appendChild(leDot);
}

let myDot = document.querySelector("#banner > div.dots > .dot"); //pour ajouter le point sélectionné
myDot.classList.add("dot_selected");
let myDots = document.getElementsByClassName("dot");

let bannerImg = document.getElementById("bannerImg"); // identifie l'image en bannière
bannerImg.src = "./assets/images/slideshow/" + slides[count].image; // indique l'image affichée en bannière

let bannerTxt = document.getElementById("bannerTxt"); // identifie le texte en bannière
bannerTxt.innerHTML = slides[count].tagLine; // indique le texte affichée en bannière

let arrow_left = document.getElementById("arrowLeft"); // pointe la flèche gauche ou précédente
arrow_left.addEventListener("click", e => {
	myDots[count].classList.remove("dot_selected"); // supprime la classe créant le point indiquant l'image est affichée
	count <= 0 ? count = slides.length-1 : --count; // condition modifiant le compteur en --
	myDots[count].classList.add("dot_selected"); // rajoute la classe créant le point indiquant l'image est affichée
	bannerImg.src = "./assets/images/slideshow/" + slides[count].image; // modifie le lien src dans le html pour afficher l'image en désirée
	bannerTxt.innerHTML = slides[count].tagLine; // affiche dans le html le sous-texte associée à l'image
});

let right = document.getElementById("arrowRight"); // pointe la flèche droite ou suivante
right.addEventListener("click", e => {
	myDots[count].classList.remove("dot_selected"); // supprime la classe créant le point indiquant quelle image est affichée
	count >= slides.length-1 ? count = 0 : ++count; // condition modifiant le compteur en ++
	myDots[count].classList.add("dot_selected"); // rajoute la classe créant le point indiquant l'image est affichée
	bannerImg.src = "./assets/images/slideshow/" + slides[count].image; // modifie le lien src dans le html pour afficher l'image en désirée
	bannerTxt.innerHTML = slides[count].tagLine; // affiche dans le html le sous-texte associée à l'image
});