'use strict';   // Mode strict du JavaScript

/*************************************************************************************************/
/* ****************************************** DONNEES ****************************************** */
/*************************************************************************************************/
const slides = [{src: 'images/1.jpg', legende: 'Street Art'}, {src: 'images/2.jpg', legende: 'image du slider'}, {src: 'images/3.jpg', legende: 'troisième image du slider'}, {src: 'images/4.jpg', legende: 'école de Tunis'}, {src: 'images/5.jpg', legende: 'Image du net'}, {src: 'images/5.jpg', legende: 'la sixième image'}];
let imageCourante = 0;
const silderPrevious = document.getElementById("slider-previous");
const sliderToggle = document.getElementById("slider-toggle");
const sliderNext = document.getElementById("slider-next");
const sliderRandom = document.getElementById("slider-random");
const toolbarToggle = document.getElementById("toolbar-toggle");
const controlMenu = document.querySelector("ul");
let playOnOff = null;

/*************************************************************************************************/
/* ***************************************** FONCTIONS ***************************************** */
/*************************************************************************************************/
/* fonction permettant d'afficher l'image */
function refreshSlider() {
  const img = document.querySelector('#slider img');
  const legend = document.querySelector('#slider figcaption');

  img.src = slides[imageCourante].src;
  legend.textContent = slides[imageCourante].legende;
}

function getRandom() {
  let ourNumber = 0;
  ourNumber = Math.floor(Math.random() * slides.length);
  return ourNumber;
}


 function onClickSliderNext() {
  if(imageCourante >= slides.length - 1) {
    imageCourante = 0;
  }else {
    imageCourante++;
  }
  refreshSlider();
}


function onClickSliderRandom() {
let randomValue = getRandom();
while(randomValue === imageCourante) {
  randomValue = getRandom();
 }
 imageCourante = randomValue;
 refreshSlider();
}

function onClickSliderPrevious() {
  if(imageCourante < 0) {
    imageCourante = slides.length - 1;
  }else {
    imageCourante--;
  }
  refreshSlider();
}

/******************* Variable declaration **********************/


  //  clearInterval(playOnOff);
//    console.log("clearInterval(playOnOff) = " + playOnOff);
/******************* END of variable declaration  *****************/

 silderPrevious.addEventListener("click", onClickSliderPrevious);

 sliderNext.addEventListener("click",  onClickSliderNext);

 sliderRandom.addEventListener("click", onClickSliderRandom);


  sliderToggle.addEventListener("click", function() {
    if(playOnOff === null) {
      playOnOff = setInterval(onClickSliderNext, 1500);
      this.setAttribute("title", "Arreter le carrousel");
    }else {
      clearInterval(playOnOff);
      this.setAttribute("title", "Démarrer le carrousel");
      playOnOff = null;
    }
  } );

toolbarToggle.addEventListener("click", function() {
  controlMenu.classList.toggle("hide");
})
/*************************************************************************************************/
/* ************************************** CODE PRINCIPAL *************************************** */
/*************************************************************************************************/
