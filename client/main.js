var images = ["waterfall.jpg","sea.jpg","scenic1.jpg","scenic2.jpg","scenic3.jpg","scenic4.jpg","scenic5.jpg","waterfall.jpg","sea.jpg","scenic1.jpg","scenic2.jpg","scenic3.jpg","scenic4.jpg","scenic5.jpg","waterfall.jpg","sea.jpg","scenic1.jpg","scenic2.jpg","scenic3.jpg","scenic4.jpg","scenic5.jpg","waterfall.jpg","sea.jpg","scenic1.jpg","scenic2.jpg","scenic3.jpg","scenic4.jpg","scenic5.jpg","waterfall.jpg","sea.jpg","scenic1.jpg","scenic2.jpg","scenic3.jpg","scenic4.jpg","scenic5.jpg"]; //add images here to go along with the slides

var slides = []; //the text on the pages
var current = 0;

var backButton;
var fwdButton;

var footer;

slides.push("Prayer Project 2020<br>Surya Jasper and Lino Levan<br>LTHL<br>Mrs. Moorhouse Period 5<br>02/05/20");
slides.push("Let us remember that we are God's loving presence.<br>In the name of the father,<br>And of the son,<br>And of the holy spirit.<br><br><b>Amen</b>");
slides.push("Our Biblical passage today comes from <b>John 14:27</b>.<br> The passage is about abandoning fear and trusting in God. <br><br><br><br> \"Peace I leave with you; my peace I give to you. Not as the world gives do I give it to you. Do not let your hearts be troubled or afraid.\"");

slides.push("The song for today is \"Fear No More\" by Building 429")
slides.push("script:window.open('https://www.youtube.com/watch?v=3cJFAGw3OaQ', '_blank');console.log('yeet')")
/*slides.push("I'm wishing I could see the finish line<br>Where it ends, where it lands<br>Guess I lost my vision when the pain set in<br>Can I believe when I don't see?<br>Can I really let it be out of my hands?<br>When it's out of my hands");
slides.push("This isn't what I'd choose<br>But it's where I'm finding You<br>When I'm broken and undone<br>Your mercy's just begun<br>You overcome my doubt<br>Your hands are reaching out<br>You hold me through the storm");
slides.push("And I will fear no more<br>And I will fear no more<br>(And) I will fear no more");
slides.push("I can't look into the future but<br>I know where You have been<br>Before me, after, and always within<br>But can I believe when I don't see?<br>Can I really let it be out of my hands?<br>'Cause it's out of my hands, oh");
slides.push("This isn't what I'd choose<br>But it's where I'm finding You<br>When I'm broken and undone<br>Your mercy's just begun<br>You overcome my doubt<br>Your hands are reaching out<br>You hold me through the storm");
slides.push("And I will fear no more<br>And I will fear no more<br>(And I will fear no more)");
slides.push("I'm not giving up<br>I'm giving in<br>To what You've planned<br>For Your glory<br>Not giving up (I'm not giving up)<br>I'm giving in (I'm giving in)<br>To what You've planned<br>For Your glory<br>I'm not giving up, oh<br>It's for Your glory");
slides.push("This isn't what I'd choose<br>But it's where I'm finding You<br>When I'm broken and undone<br>Your mercy's just begun<br>You overcome my doubt<br>Your hands are reaching out<br>You hold me through the storm");
slides.push("And I will fear no more<br>And I will fear no more<br>(And I will fear no more)");
slides.push("(I will never give, I will never give in)<br>And I will fear no more<br>(I will never give, I will never give in)<br>I will fear no more");*/

slides.push("An important takeaway from this song and passage is to try not to fear at all costs. Obviously, applying this lesson is a lot harder than it looks, but by having faith in God and remembering that He is always there to help us, we will be able to surpass our fears and reach our goals.");
slides.push("Remember a time when your faith in God helped you surmount fear.");
slides.push("Is there anything you are anxious about now that God could help you with?");

slides.push("For what or for whom shall we pray today?");
slides.push("All: Teach us, Lord, how to be Holy Cross men and women, choosing to always love as Jesus did.");
slides.push("In the Name of the Father, and of the Son, and of the Holy Spirit. <br><b>Amen</b>.");

window.onload = function() {
	backButton = document.getElementById('back');
	fwdButton = document.getElementById('forward');

	document.addEventListener('click', ()=>{
		event.preventDefault();
    if (document.fullscreenEnabled) {
      document.documentElement.requestFullscreen();
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
};

function setText(fwd){
  let text = document.getElementById("text");
	let body = document.getElementById("body");
	text.classList.remove("fade");
	void text.offsetWidth;
	text.classList.add("fade");
	if (fwd){
		current++;
		if(current>slides.length-1){
			current=0;
		}
	}else{
		current--;
		if(current<0){
			current=0;
		}
	}
	if(slides[current].includes("script:")){
		let code = slides[current].split("script:")[1];
		eval(code);
		if (fwd){
			current++;
			if(current>slides.length-1){
				current=slides.length-1;
			}
		}else{
			current--;
			if(current<0){
				current=0;
			}
		}
	}


	setTimeout(()=>{
		text.innerHTML = slides[current];
		body.background = "backgrounds/"+images[current];
	},1000)
}
