/* 
	Code JavaScript pour la carte d'anniversaire avec jQuery
	Créé par Snervan (RetroMan sur OC) 
*/

//Création du span affichant le texte "Click me !"
var $spanClick = $("<span></span>").text("Click me !");
$($spanClick).css("border", "5px solid #85cff7");
$($spanClick).css("border-radius", "4px");
$($spanClick).css("margin-left", "5px");
$($spanClick).css("font-size", "8px");
$($spanClick).css("background-color", "#85cff7");
$($spanClick).css("color", "white");
$($spanClick).css("cursor", "pointer");
//Ajout dans le premier paragraphe dans le premier li
$("li:first > p:first").append($spanClick);

//Préparation des variables contenant la création d'un nouvel élément (Portée: Globale)
var $secondText = $("<li></li>");
var $thirdText = $("<li></li>");
var $fourthText = $("<li></li>");

//Evènement "click" du premier cadre
$("li:first").on("click", function() {
	$secondText.css("background-color", "#39e600");
	$secondText.css("color", "white");
	$secondText.css("padding-top", "8px");
	$secondText.text("You're a great friend.");
	$secondText.append($spanClick);
	$secondText.addClass("justify-center");
	$secondText.innerHeight(35);
	
	$("ul").append($secondText);	

	$("li:first").off();	
});

//Evènements click sur le cadre

$secondText.on("click", function() {
	$thirdText.css("background-color", "#ffe680");
	$thirdText.css("color", "white");
	$thirdText.css("padding-top", "8px");
	$thirdText.append("Today's your birthday!");
	$thirdText.append($spanClick);
	$thirdText.addClass("justify-center");
	$thirdText.innerHeight(35);

	$("ul").append($thirdText);

	$secondText.off();
});

$thirdText.on("click", function() {
	$fourthText.css("background-color", "#ff99dd");
	$fourthText.css("color", "white");
	$fourthText.css("padding-top", "8px");
	$fourthText.append("Wishing all the best!");
	$fourthText.append($spanClick);
	$fourthText.addClass("justify-center");
	$fourthText.innerHeight(35);

	$("ul").append($fourthText);

	$thirdText.off();
});

$fourthText.on("click", function() {
	$spanClick.remove();

	$("ul > li:first > p").text("Happy Birthday!");
	$("ul > li:not(:first)").text("Happy Birthday!"); //On change le contenu sauf le premier enfant

	//Image de fond
	$("body").css('background-image', 'url(./data/images/tenor.gif)');

	$('audio').trigger('play');

	$fourthText.off();
});

