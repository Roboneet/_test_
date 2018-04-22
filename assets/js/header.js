(function(){

var svg = $$("#logo svg");
var logoColor = c => Array.from(svg.querySelectorAll("path")).forEach((e)=>e.style.fill= c);

var white = true;
var content = $$(".content");
var header = $$(".header");
var lines = Array.from($$(".ham").children);

logoColor("#fff");

window.addEventListener("scroll",(event)=>{
	var cr = content.getBoundingClientRect();
	var hr = header.getBoundingClientRect();
	
	var val = (cr.top - hr.top - 70 > 0)
	if(val == white)return;

	white = !white;
	if(white){
		removeClass($$(".menu_items"), "hide");
		logoColor("#fff");
		removeClass(header, "black");
		addClass(header, "white");
		lines.forEach((l)=>l.style.borderColor='#fff');

	}else{
		addClass($$(".menu_items"),"hide");
		logoColor("#000");
		addClass(header, "black");
		removeClass(header, "white");
		lines.forEach((l)=>l.style.borderColor='#000');
	}
})

})()