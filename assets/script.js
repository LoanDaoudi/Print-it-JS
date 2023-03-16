
document.addEventListener("DOMContentLoaded", ()=>{


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
			"tagLine":"Grand choix de couleurs <span>de CMJN au pantones</span>"
		},
		{
			"image":"slide4.png",
			"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
		}
	]
	

	const chemin= "./assets/images/slideshow/";
	let fichier=chemin;
	let slide = 0;

	/*Function "affiche" is used to change the value of the source of the image
	, it's change also the html text below the image and finally the
	function use a loop with condition  to select or unselecte dot */ 
	function affiche(slide){
		
		
		
		fichier=chemin+slides[slide].image;
		$(".banner-img").attr("src", fichier);
		$("#banner p").html(slides[slide].tagLine);
		$(".dots").empty();
		for (let i = 0;  i < slides.length ; i++){
			if (i == slide) {
				$(".dots").append(
					$("<div>").prop({
						class: "dot dot_selected"
					})
				)
			}else{ 
		
				$(".dots").append(
					$("<div>").prop({
						class: "dot "
					})
				)
			}
			}
	}
	 
	document.querySelector (".arrow_left").addEventListener ("click", ()=> {
		console.log ("arrow_left")
	/*This function update the array's index */	
		if (slide>0){slide--;}else{slide=slides.length-1;}
		affiche(slide);
		})
	
	document.querySelector (".arrow_right").addEventListener ("click", ()=> {
			console.log ("arrow_right")
	/*This function update the array's index */	
			if (slide<slides.length-1){slide++;}else{slide=0;}
			affiche(slide);
			})
})
	