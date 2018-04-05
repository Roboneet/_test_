// (function(obj){

// 	Object.assign(obj, {Menu})

// 	function Menu(container, items){
// 		this.container = container;
// 		this.items = items;
// 		this.open = false;
// 	}

// 	Menu.prototype.setup = function(){
// 		var list = "<div class='menu-list closed br1'><ul>";
// 		for(var i of this.items){
// 			var item = "<a href='"+ i.href +"'><div class='f4 lh-copy'>" + i.topic + "</div></a>";
// 			list += item;
// 		}

// 		list += "</ul></div>";

// 		const ham = '<div class="ham flex flex-column justify-center items-center"><div></div><div></div><div></div></div>';

// 		this.container.innerHTML = (list + ham).valueOf();

// 		var button = this.container.querySelector(".ham");
// 		var handleClick = this.hamClick.bind(this);
// 		button.addEventListener("click", handleClick);

		
// 	}

// 	Menu.prototype.hamClick = function(event) {
// 		console.log("click");
// 		this.open = !this.open;
// 		var menu_list = this.container.querySelector(".menu-list");
// 		if(this.open){
// 			menu_list.className = menu_list.className.replace(" closed", "");
// 		}else{
// 			menu_list.className += " closed";
// 		}
// 	};

// })(window);

(function(){
	var openMenu = false;
	$$(".ham").addEventListener("click", function(event){
		openMenu = !openMenu;
		if(openMenu){
			addClass($$(".menu_items"), "animated fadeInUp");
			$$(".menu_items").style.display = "block";
		}else{
			removeClass($$(".menu_items"), " animated fadeInUp");
			$$(".menu_items").style.display = "none";
		}
	})
})()
