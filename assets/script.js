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

for (let i = 0; i < slides.length; i++) {
	return (i);
}



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

document
	.getElementsByClassName("dots");