const features_data = [
	{
		"prop":"Multiple dispatch",
		"tag":"Providing the ability to define function behavior across many combinations of argument types"
		,"img": "assets/img/dummy.jpg"
	},
	{
		"prop":"Dynamic type system",
		"tag":"types for documentation, optimization, and dispatch"
		,"img": "assets/img/dummy.jpg"
	},
	{
		"prop":"Good performance",
		"tag":"approaching that of statically-compiled languages like C"
		,"img": "assets/img/dummy.jpg"
	},
	{
		"prop":"Built-in package manager",
		"tag":""
		,"img": "assets/img/dummy.jpg"
	},
	{
		"prop":"Lisp-like macros and other metaprogramming facilities",
		"tag":""
		,"img": "assets/img/dummy.jpg"
	},
	{
		"prop":"Call Python functions",
		"tag":"use the PyCall package"
		,"img": "assets/img/dummy.jpg"
	},
	{
		"prop":"Call C functions directly",
		"tag":"no wrappers or special APIs"
		,"img": "assets/img/dummy.jpg"
	},
	{
		"prop":"Powerful shell-like capabilities for managing other processes",
		"tag":""
		,"img": "assets/img/dummy.jpg"
	},
	{
		"prop":"Designed for parallelism and distributed computation",
		"tag":""
		,"img": "assets/img/dummy.jpg"
	},
	{
		"prop":"Coroutines",
		"tag":"lightweight 'green' threading"
		,"img": "assets/img/dummy.jpg"
	},
	{
		"prop":"User-defined types are as fast and compact as built-ins",
		"tag":""
		,"img": "assets/img/dummy.jpg"
	},
	{
		"prop":"Automatic generation of efficient, specialized code for different argument types",
		"tag":""
		,"img": "assets/img/dummy.jpg"
	},
	{
		"prop":"Elegant and extensible conversions and promotions for numeric and other types",
		"tag":""
		,"img": "assets/img/dummy.jpg"
	},
	{
		"prop":"Efficient support for Unicode, including but not limited to UTF-8",
		"tag":""
		,"img": "assets/img/dummy.jpg"
	},
	{
		"prop":"MIT licensed",
		"tag":"free and open source"
		,"img": "assets/img/dummy.jpg"
	}
];

function createFeatures(data){
	var html = data.map((el, i) =>{
		return '<li class="pa3 f5 f4-m f4-l br2 ma3 w-100-ns w-48-ns w-100 fl box">\
					<div class="feature-text fl w-70">\
						<div class="prop f5">' + el.prop +'</div>\
						<div class="tag navy f6">' + el.tag + '</div>\
					</div>\
					<div class="feature-img fr">\
						<img src="'+el.img +'">\
					</div>\
				</li>'

	}).join("");

	$$("#features ul").innerHTML = html;
}

createFeatures(features_data);