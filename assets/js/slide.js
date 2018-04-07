var image_slide_data = [{
	img: "url(assets/img/celeste.jpg) 0 0 / cover no-repeat",
	html: "<h1 class='near-white f1-ns f3'>Julia Joins Petaflop Supercomputer Club </h1><p class='near-white'>Julia has joined the rarefied ranks of computing languages that have achieved peak performance exceeding one petaflop per second-the so-called 'Petaflop Club.'</p>"
}, 
{
	img: "#777",
	html: "<p>dummy content</p>"
}]

function Slide(data, container, {list=true, arrows=false, debug=false, events={}, transitionDelay="1s", animationIn="fadeInUp"}={}){
	this.count = 0;
	this.high = 30;
	this.medium =20;
	this.low = 10;
	this.rest = 40;
	this.total = data.length;
	this.time = 7000;
	this.timeouts = new Array(2).fill(null);
	this.old = null;
	this.animationIn = animationIn;
	this.list = list;
	this.arrows = arrows;
	this.log = ()=>{};
	this.debug = debug;
	if(debug)this.log = console.log;

	var scope = this;
	var fragment = document.createDocumentFragment();
	var state = document.createElement('div');
	state.className = "state list";
	data.forEach((ele, i)=>{
		var slide = document.createElement('div');
		slide.className = "slide";
		slide.style.background = ele.img;
		slide.innerHTML = ("<div class='text'>" + ele.html + "</div></div>").valueOf();
		slide.querySelector('.text').style.transitionDelay = transitionDelay;
		for(var k in events){
			slide[k] = events[k];
		}
		fragment.appendChild(slide);
		state.appendChild(document.createElement('li'))
	})
	if(this.list)
		fragment.appendChild(state);


	container.appendChild(fragment);
	this.container = container;
	var scope = this;

	if(this.list){
		Array.from(state.querySelectorAll('li')).forEach((ele, i)=>{
			ele.addEventListener('click', function(event){
				scope.stop.bind(scope)();
				scope.start(i);
			})
		})
	}
}

Slide.prototype.stop = function(){
	if(this.timeouts[0])
		clearTimeout(this.timeouts[0]);
	if(this.timeouts[1]){
		clearTimeout(this.timeouts[1]);
		this.removeOld();
	}
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
	this.log(count,this)
	this.old = this.container.querySelector(".show");
	if(this.old != null)
		this.old.style.zIndex = this.medium;
	var slides = Array.from(this.container.querySelectorAll(".slide-show .slide"));
	var newSlide = slides[count];
	this.log(newSlide)
	newSlide.style.zIndex = this.high;
	removeClass(newSlide, "dn");
	addClass(newSlide, "show");
	addClass(newSlide.querySelector('.text'), "animated " + this.animationIn)
	if(this.old != null)
		this.timeouts[1] = setTimeout(this.removeOld.bind(this),1000)

	// change state
	if(this.list){
		var state = this.container.querySelector(".state");
		removeClass(state.querySelector(".active"), " active");
		addClass(state.querySelectorAll('li')[count], "active");
	}
}

Slide.prototype.removeOld = function(){
	this.old.style.zIndex = this.low;
	addClass(this.old, "dn");
	removeClass(this.old, "show");
	removeClass(this.old.querySelector('.text'), " animated " + this.animationIn)
}

var imageSlide = new Slide(image_slide_data, $$("#imageSlideShow"));
imageSlide.start();
