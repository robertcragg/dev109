const nextButton = document.getElementById("next");
const previousButton = document.getElementById("previous");
const images = []; //Image Array
const alt = []; //Image Alt Text Array
const links = []; //Image Link Array
const names = []; //Image Name Array
const captions = []; //Image Caption Array
const time = 3750; //Time Between Image Change

var i = 0; //Array Origin Index
var autoInterval = setInterval(autoSlide, time); //Time interval initialization for auto-running slides

nextButton.addEventListener("click", nextSlide, false);
previousButton.addEventListener("click", previousSlide, false);
window.onload=updateSlide;

//Image List
images[0] = "https://robertcragg.github.io/dev109/final/images/m01-640.jpg"
images[1] = "https://robertcragg.github.io/dev109/final/images/m02-640.jpg"
images[2] = "https://robertcragg.github.io/dev109/final/images/m03-640.jpg"
images[3] = "https://robertcragg.github.io/dev109/final/images/m04-640.jpg"
images[4] = "https://robertcragg.github.io/dev109/final/images/m05-640.jpg"
images[5] = "https://robertcragg.github.io/dev109/final/images/m07-640.jpg"
images[6] = "https://robertcragg.github.io/dev109/final/images/m08-640.jpg"
images[7] = "https://robertcragg.github.io/dev109/final/images/m09-640.jpg"
images[8] = "https://robertcragg.github.io/dev109/final/images/m10-640.jpg"

//Image Alt
alt[0] = "Kitchen"
alt[1] = "Planner"
alt[2] = "CSS Books"
alt[3] = "Graffiti"
alt[4] = "Mathematics"
alt[5] = "Hotel"
alt[6] = "Grocery List"
alt[7] = "Dots"
alt[8] = "Accesibility Device"

//Link List
links[0] = "https://robertcragg.github.io/dev109/m01/index.html"
links[1] = "https://robertcragg.github.io/dev109/m02/index.html"
links[2] = "https://robertcragg.github.io/dev109/m03/index.html"
links[3] = "https://robertcragg.github.io/dev109/m04/index.html"
links[4] = "https://robertcragg.github.io/dev109/m05/index.html"
links[5] = "https://robertcragg.github.io/dev109/m07/index.html"
links[6] = "https://robertcragg.github.io/dev109/m08/index.html"
links[7] = "https://robertcragg.github.io/dev109/m09/index.html"
links[8] = "https://docs.google.com/spreadsheets/d/12MUjQeeSQ8AHsNFb1IgMt9hTMy91UO4pn_KxpU4IN-M/edit?usp=drive_link"

//Name List
names[0] = "Module 1 - Intro to HTML"
names[1] = "Module 2 - Intro to Tables"
names[2] = "Module 3 - Intro to CSS"
names[3] = "Module 4 - Intro to Layout"
names[4] = "Module 5 - Intro to JavaScript Functions"
names[5] = "Module 7 - Intro to JavaScript Objects"
names[6] = "Module 8 - Intro to JavaScript DOM"
names[7] = "Module 9 - Intro to JavaScript Events"
names[8] = "Module 10 - Intro to Useability & Accessibility"

//Caption List
captions[0] = "A recipe list that uses only standard HTML elements. No CSS included."
captions[1] = "A meal planner that uses tables for styling."
captions[2] = "A paragraph that is styled using basic CSS."
captions[3] = "A webpage demonstrating a basic layout using CSS."
captions[4] = "A multiplication table that is generated from a JavaScript function and user input."
captions[5] = "A webpage showing hotel bookings on locations created using JavaScript object notation."
captions[6] = "A grocery list where items are added by querying the DOM."
captions[7] = "A webpage that allows the user to add dots to the page using a JavaScipt 'on-click' event."
captions[8] = "A spreadsheet with suggestions for usability & accesibility improvements on the Lemmy.world Alexandrite interface."

//Update the info displayed on the slide
function updateSlide(){
  document.getElementById("slide").src = images[i];
  document.getElementById("slide").alt = alt[i];
  document.getElementById("link").innerHTML = names[i];
  document.getElementById("link").href = links[i];
  document.getElementById("caption").innerHTML = captions[i];
}

//Function controling the next button
function nextSlide(){
  if(i < images.length - 1){
    i++;
  } else {
    i = 0;
  }
  clearInterval(autoInterval);
  updateSlide();
  setTimeout(function(){
    autoInterval = setInterval(autoSlide, time);
  });
}

//Function controling the previous button
function previousSlide(){
  if(i === 0){
    i = images.length - 1;
  } else {
    i--;
  }
  clearInterval(autoInterval);
  updateSlide();
  setTimeout(function(){
    autoInterval = setInterval(autoSlide, time);
  });
}

//Function controlling the auto-running of slides
function autoSlide(){
   if (document.getElementById("auto").checked){
     nextSlide();
   }
}
