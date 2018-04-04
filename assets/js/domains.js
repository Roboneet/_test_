const domains = [
{ 	topic: "Optimisations"
	,href: "https://www.juliaopt.org/"
	,img: "assets/img/juliaopt.png"
},{	topic: "Differential Equations"
	,href: "https://github.com/JuliaDiffEq"
	,img: "assets/img/juliadiffeq.png"
},{ topic: "Numerical Linear Algebra"
	,href: "https://github.com/andreasnoack/LinearAlgebra.jl"
	,img: "assets/img/juliadiffeq.png"
},{ topic: "Statistics"
	,href: "https://github.com/JuliaStats"
	,img: "assets/img/juliastats.png"
},{ topic: "Data & Analysis"
	,href: "https://github.com/JuliaData"
	,img: "assets/img/juliadata.png"
},{ topic: "Deep Learning"
	,href: "https://github.com/JuliaML/"  // https://github.com/FluxML/ ?
	,img: "assets/img/juliaml.png"
},{ topic: "Images & Visualization"
	,href: "https://github.com/JuliaGL"
	,img: "assets/img/juliagl.png"
},{ topic: "BioJulia"
	,href: "https://biojulia.net/"
	,img: "assets/img/biojulia.png"
},{ topic :"Parallel Computing & GPUs"
	,href: "https://github.com/JuliaGPU/"
	,img: "assets/img/juliaGPU.jpeg"
}]

function createDomains(){
	var container = $$(".domain-container");

	var fragment = document.createDocumentFragment();
	domains.forEach((ele, i)=>{
		var domainBox = document.createElement('a');
		domainBox.className = "domain-box";
		domainBox.href = ele.href;
		domainBox.innerHTML = "<div><img src='" + ele.img + "'><p>" + ele.topic + "</p></div>";
		fragment.appendChild(domainBox);
	})
	container.appendChild(fragment);
}

createDomains();