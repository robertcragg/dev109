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
images[0] = "https://robertcragg.github.io/dev109/final/images/a01-640.jpg"
images[1] = "https://robertcragg.github.io/dev109/final/images/a02-640.jpg"
images[2] = "https://robertcragg.github.io/dev109/final/images/a03-640.jpg"
images[3] = "https://robertcragg.github.io/dev109/final/images/a04-640.jpg"
images[4] = "https://robertcragg.github.io/dev109/final/images/a05-640.jpg"

//Image Alt
alt[0] = "Resume"
alt[1] = "Chess Board"
alt[2] = "Rhombus"
alt[3] = "Form"
alt[4] = "Slideshow"

//Link List
links[0] = "https://robertcragg.github.io/dev109/a1/index.html"
links[1] = "https://robertcragg.github.io/dev109/a2/index.html"
links[2] = "https://robertcragg.github.io/dev109/a3/index.html"
links[3] = "https://robertcragg.github.io/dev109/a4/index.html"
links[4] = "https://robertcragg.github.io/dev109/a5/index.html"

//Name List
names[0] = "Artifact 1 - Resume"
names[1] = "Artifact 2 - Chessboard"
names[2] = "Artifact 3 - Rhombus"
names[3] = "Artifact 4 - Form"
names[4] = "Artifact 5 - Slideshow"

//Caption List
captions[0] = "A resume webpage that uses only standard HTML elements. No CSS included."
captions[1] = "A chessboard that scales with viewport size."
captions[2] = "An ASCII rhombus with adjustable dimmensions, characters, and colors."
captions[3] = "A form with various field validations."
captions[4] = "A slideshow of all my Artifact assignments created using JavaScript."

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
