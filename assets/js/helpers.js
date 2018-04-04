var $$ = (e) => document.querySelector(e);
var all = (e) => document.querySelectorAll(e);

var stage = $$("#stage");
var cursor = $$("#cursor");

function smoothScroll(pos){
	window.scroll({left: 0, top: pos, behavior: 'smooth'})
}

function navigate(href){
	window.location.href = href;
}

function highlight(ele){
	removeClass($$(".highlight"), " highlight");
	if(ele != null){
		addClass(ele, "highlight");
	}
}

function setTopic(topic, color){
	if($$(".heading h1").innerText != topic){
		$$(".heading h1").innerText = topic;
		$$(".heading h1").style.color = color;
	}

}

function addClass(ele, name){
	if(ele)
		ele.className += (" " + name);
}

function removeClass(ele, name){
	if(ele)
		ele.className = ele.className.replace(name, "");
}


function setOverlay(){
	if($$(".overlay") == $$(".hidden"))
		removeClass($$(".overlay"), " hidden");
}


function hideOverlay(){
	if($$(".overlay") != $$(".hidden"))
		addClass($$(".overlay"), " hidden");
}

function enlargeCursor(){
	if(cursor != $$(".enlarge"))
		addClass(cursor, " enlarge");
}

function normalCursor(){
	if(cursor == $$(".enlarge"))
		removeClass(cursor, " enlarge");
}