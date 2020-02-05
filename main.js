var images = ["waterfall.jpg","sea.jpg"]; //add images here to go along with the slides
var slides = ["Ok, so basically religion is cool. As you can tell, I am very invested in this project, and I wish for it to continue. Ok, so basically religion is cool. As you can tell, I am very invested in this project, and I wish for it to continue. Ok, so basically religion is cool. As you can tell, I am very invested in this project, and I wish for it to continue. Ok, so basically religion is cool. As you can tell, I am very invested in this project, and I wish for it to continue. Ok, so basically religion is cool. As you can tell, I am very invested in this project, and I wish for it to continue. Ok, so basically religion is cool. As you can tell, I am very invested in this project, and I wish for it to continue.","Page 2, heck yeah"]; //the text on the pages
var current = 0;
var fullScreen = false;

var backButton = document.getElementById('back');
var fwdButton = document.getElementById('forward');

document.addEventListener('click', ()=>{
	event.preventDefault();
  if(!fullScreen){
    if (document.fullscreenEnabled) {
      document.documentElement.requestFullscreen();
    }
    fullScreen=true;
  }
})

fwdButton.addEventListener('click', function() {
	event.preventDefault();
  setText(true);
}, false);

backButton.addEventListener('click', function() {
	event.preventDefault();
  setText(false);
}, false);

function setText(fwd){
  let text = document.getElementById("text");
	let body = document.getElementById("body");

  text.innerHTML = slides[current];
	body.background = "backgrounds/"+images[current];
	if (fwd){
		current++;
		if(current>slides.length-1)
			current=0;
	}else{
		current--;
		if(current<0)
			current=0;
	}

}
