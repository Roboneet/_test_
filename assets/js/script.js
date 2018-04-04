var mouseEvent = null;
var menu = new Menu($$(".menu"), menu_items);
menu.setup();

createBoxes(boxes);
stageLoop();

document.addEventListener("mousemove", function(_e){
	mouseEvent = _e;
})

var frame = 0;
function stageLoop(){
	if(mouseEvent){
		x = mouseEvent.clientX;
		y = mouseEvent.clientY;
		moveCursor(x, y);
		moveBackground(x, y);
		frame++;
		if(frame % 5 == 0){
			frame = 0;
			pickElement(mouseEvent)
		}
	}
	window.requestAnimationFrame(stageLoop)
}

function moveCursor(x, y){
	cursor.style.top = y + window.scrollY + "px";
	cursor.style.left = x + window.scrollX + "px";	
}

function moveBackground(x, y){
	var cont = $$("#background").getBoundingClientRect();
	var w = cont.width;
	var h = cont.height;
	var cx = cont.width/2 - cont.left;
	var cy = cont.height/2 - cont.top;
	var rect = stage.getBoundingClientRect();
	var dx = (x - cx)*((w - rect.width)/w);
	var dy = (y - cy)*((h - rect.height)/h);
	var top = h/2 - rect.height/2 + dy;
	var left = w/2 - rect.width/2 + dx;
	if( rect.height + top >  cont.height + cont.top){
		
		stage.style.top = top + "px";
		stage.style.left = left + "px";
	}
}

function pickElement(event){
	var ele = event.target

	if(Array.from(all(".item")).indexOf(ele) == -1){
		highlight(null);
		hideOverlay();
		setTopic("Julia", "#000");
		normalCursor();
	}else{
		highlight(ele);
		setOverlay();
		setTopic(ele.getAttribute("data-topic"), ele.getAttribute("data-color"));
		enlargeCursor();
		// rotateEle(ele, event.clientX, event.clientY);
	}
}






//helper function to find top and left
// stage.addEventListener("click", function(event){
// 	var rect = stage.getClientRects()[0];
// 	var x = event.clientX, y = event.clientY;
// 	var tx = x - rect.left, ty = y - rect.top;
// 	// left, top
// 	alert((tx/rect.width*100).toString() + " " +(ty/rect.height*100).toString());
// })

function createBoxes(boxes){
	var fragment = document.createDocumentFragment();
	boxes.forEach((e, i) =>{
		var box = document.createElement('div');
		box.className = "item";
		box.setAttribute("data-topic", e.topic)
		box.setAttribute("data-color", e.color)
		box.style.top = e.top;
		box.style.left = e.left;
		var inner = document.createElement('div');
		inner.className = "item-inner";
		if(e.content)
			inner.innerText = e.content;
		
		for(var prop in e.inner){
			inner.style[prop] = e.inner[prop];
		}
		inner.style["pointerEvents"] = "none";

		if(e.innerClass)
			inner.className += e.innerClass;
		
		box.className += (e.outerClass || " medium");

		if(e.innerHTML)
			inner.innerHTML = e.innerHTML;

		for(var event in e.events){
			box.addEventListener(event, e.events[event]);
		}

		box.appendChild(inner);
		fragment.appendChild(box);
	})
	stage.insertBefore(fragment, stage.firstChild);
}




