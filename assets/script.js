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

const contents = slides.length; // Base de comptage pour le nombre de points
let count = 0; // pour naviguer dans les index de slides

//pour créer autant de points qu'il y a d'images et de texte
for (let i = 0; i < contents; i++) {
	let leDot = document.createElement("div");
	leDot.classList.add("dot")
	let lesDots = document.querySelector("#banner > div.dots");
	lesDots.appendChild(leDot);
}

//pour ajouter le point sélectionné
let myDot = document.querySelector("#banner > div.dots > .dot");
myDot.classList.add("dot_selected");
let myDots = document.getElementsByClassName("dot");

//let bannerImgShow = slides[count].image; la variable ne peut s'ajouter à la fonction ??
//let bannerTxtShow = slides[count].tagLine;

let bannerImg = document.getElementById("bannerImg"); // identifie l'image en bannière
bannerImg.src = "./assets/images/slideshow/" + slides[count].image; // indique l'image affichée en bannière

let bannerTxt = document.getElementById("bannerTxt"); // identifie le texte en bannière
bannerTxt.innerHTML = slides[count].tagLine; // indique le texte affichée en bannière

let arrow_left = document.getElementById("arrowLeft");
arrow_left.addEventListener("click", prev);

let right = document.getElementById("arrowRight");
right.addEventListener("click", next);

function prev() {
	myDots[count].classList.remove("dot_selected");
	if (count <= 0) {
		count = 3;
	} else {
		-- count;
	};
	myDots[count].classList.add("dot_selected");
		bannerImg.src = "./assets/images/slideshow/" + slides[count].image;
		bannerTxt.innerHTML = slides[count].tagLine;
//		console.log(count);
};

function next() {
	myDots[count].classList.remove("dot_selected");
	if (count >= slides.length-1) {
		count = 0;
	} else {
		++ count;
	};
	myDots[count].classList.add("dot_selected");
	bannerImg.src = "./assets/images/slideshow/" + slides[count].image;
	bannerTxt.innerHTML = slides[count].tagLine;
//	console.log(count);
};