var image_slide_data = [{
	img: "url(assets/img/celeste.jpg) 0 0 / cover no-repeat",
	html: "<h1 class='near-white'>Julia Joins Petaflop Supercomputer Club </h1><p class='near-white'>Julia has joined the rarefied ranks of computing languages that have achieved peak performance exceeding one petaflop per second—the so-called ‘Petaflop Club.’</p>"
}, 
{
	img: "#777",
	html: "<p>dummy content</p>"
}]

function Slide(data, container){
	this.count = 0;
	this.high = 30;
	this.medium =20;
	this.low = 10;
	this.rest = 40;
	this.total = data.length;
	this.time = 7000;
	this.timeouts = new Array(2).fill(null);
	this.old = null;
	
	var fragment = document.createDocumentFragment();
	var state = document.createElement('div');
	state.className = "state list";
	data.forEach((ele, i)=>{
		var slide = document.createElement('div');
		slide.className = "slide";
		slide.style.background = ele.img;
		slide.innerHTML = ("<div class='text'>" + ele.html + "</div></div>").valueOf();
		fragment.appendChild(slide);

		state.appendChild(document.createElement('li'))
	})
	fragment.appendChild(state);
	container.appendChild(fragment);
	this.container = container;
	var scope = this;

	Array.from(state.querySelectorAll('li')).forEach((ele, i)=>{
		ele.addEventListener('click', function(event){
			if(scope.timeouts[0])
				clearTimeout(scope.timeouts[0]);
			if(scope.timeouts[1]){
				clearTimeout(scope.timeouts[1]);
				scope.removeOld().bind(scope)();
			}

			scope.start(i);
		})
	})
}

Slide.prototype.start = function(count){
	this.stopLoop = false;
	this.count = count || this.count || 0;
	this.loop();
}

Slide.prototype.loop = function(){
	this.setSlide(this.count);
	this.count = (this.count + 1)%this.total;
	var loop = this.loop.bind(this);

	this.timeouts[0] = setTimeout(()=> {
		loop();
	}, this.time)
}

Slide.prototype.setSlide = function(count){
	this.old = this.container.querySelector(".show");
	if(this.old != null)
		this.old.style.zIndex = this.medium;
	var slides = Array.from(all(".slide-show .slide"));
	var newSlide = slides[count];
	newSlide.style.zIndex = this.high;
	addClass(newSlide, "show");
	addClass(newSlide.querySelector('.text'), "animated fadeInUp")
	if(this.old != null)
		this.timeouts[1] = setTimeout(this.removeOld.bind(this),1000)

	// change state
	var state = this.container.querySelector(".state");
	removeClass(state.querySelector(".active"), " active");
	addClass(state.querySelectorAll('li')[count], "active");
}

Slide.prototype.removeOld = function(){
	this.old.style.zIndex = this.low;
	removeClass(this.old, "show");
	removeClass(this.old.querySelector('.text'), "animated fadeInUp")
}

var imageSlide = new Slide(image_slide_data, $$("#imageSlideShow"));
imageSlide.start();

var videoSlide = new Slide(video_slide_data, $$("#videoSlideShow"));
videoSlide.start();