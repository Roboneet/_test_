var center = "tc f3 flex flex-column justify-center items-center";
var default_class = " box " + center;
var boxes = [
{
	topic:"What is Julia?",
	top: '25%',
	left: '50%',
	inner: {
		'background': 'linear-gradient(to left top, rgb(157, 60, 193), rgb(27, 27, 115))',
		borderRadius: "50%"
	},
	innerClass: default_class + " near-white",
	innerHTML: "<p class='tc'>What is Julia?</p>",
	events: {
		click: function(event){
			smoothScroll($$("#about").offsetTop)
		}
	},
	outerClass: " medium",
	color: "#000"
},
{
	topic:"Designed for Parallelism and Cloud Computing",
	top: '36%',
	left: "34%",
	content: "Parallelism and Cloud Computing",
	inner: {
		// 'background': 'url("gadfly-demo.png") 0 0 no-repeat',
		// 'background-size': 'cover',
		background: 'linear-gradient(rgb(0, 167, 255), rgb(206, 182, 208))'

	},
	innerClass: default_class,
	color: "#000"
},
{
	topic:"Download Julia",
	top: '60%',
	left: '47%',
	inner: {
		background: "#000",
	},
	innerHTML: "<img src='assets/img/download.png'><p>Download</p>",
	innerClass: " box " + center + " near-white",
	outerClass: " medium flex flex-column justify-center items-center download"
	,color: "#000"
},{
	topic: "Free, Open Source and Library-Friendly",
	top: '70%',
	left: "60%",
	inner:{
		background: "linear-gradient(to top left, rgb(228, 245, 119), rgb(103, 193, 92))",
		
	},
	content: "Open Source",
	innerClass: default_class,
	outerClass: " small"
	,color: "#000"
},{
	topic: "Modern, Composable, Fast and More",
	top: '5%',
	left: "25%",
	inner:{
		background: "#009688",
		
	},
	content: "Features",
	innerClass: default_class,
	outerClass: " small"
	,color: "#000"
	,events: {
		click: () => smoothScroll($$("#features").offsetTop)
	}
},
{
	topic: "The Julia Conference",
	top: '15%',
	left: "15%",
	inner:{
		background: "#960088",
		
	},
	content: "JuliaCon",
	innerClass: default_class,
	outerClass: " small near-white"
	,color: "#000"
	,events: {
		click: () => navigate("http://juliacon.org/")
	}
},
{
	topic: "Neural Nets and Stuff...",
	top: '8%',
	left: "38%",
	inner:{
		backgroundColor: '#ffab28'
		
	},
	content: "Machine Learing",
	innerClass: default_class,
	outerClass: " medium"
	,color: "#000"
},
{
	topic: "Cool Julia Packages",
	top: '70%',
	left: "32%",
	inner:{
		background: "#46328a",
		
	},
	content: "Domains",
	innerClass: default_class + " near-white",
	outerClass: " medium"
	,color: "#700"
	,events: {
		click: () => smoothScroll($$("#domains").offsetTop)
	}
},
{
	topic: "Why learn Julia?",
	top: '49%',
	left: "76%",
	inner:{
		background: "#314e5d",
	
	},
	content: "Why Julia?",
	innerClass: default_class,
	outerClass: " medium near-white"
	,color: "#004044	"
},
{
	topic: "Follow on Twitter",
	top: '47%',
	left: "11%",
	inner:{
		background: "#44aa22",
		borderRadius: "50%"
	},
	content: "",
	innerClass: default_class,
	outerClass: " extra-small",
	innerHTML: "<img src='assets/img/twitter.png'></img>"
	,color: "#009688"
},
{
	topic: "Star and Fork on Github",
	top: '17%',
	left: "78%",
	inner:{
		background: "#fff",
		borderRadius: "50%"
	},
	content: "",
	innerClass: default_class,
	outerClass: " extra-small",
	innerHTML: "<img src='assets/img/github.png'></img>"
	,color: "#000"
},
{
	topic: "Watch our talks",
	top: '9%',
	left: "56%",
	inner:{
		background: "#fff",
		borderRadius: "50%"
	},
	content: "",
	innerClass: default_class,
	outerClass: " extra-small",
	innerHTML: "<img src='assets/img/youtube.png'></img>"
	,color: "#aa0000"
	,events: {
		click: () => smoothScroll($$("#videos").offsetTop)
	}
},
{
	topic: "To see things...",
	top: '20%',
	left: "65%",
	inner:{
		background: "#e86c6c",
		// background: 'url("gadfly-demo.png") 0 0 /cover no-repeat'
	},
	content: "Visualisations",
	innerClass: default_class,
	outerClass: " medium"
	,color: "#a100ff"
},{
	topic: "A quick taste of Julia",
	top: '50%',
	left: '20%',
	inner:{
		background: "url(assets/img/Repl.png) 0 0 / cover no-repeat",

	},
	content: "Teach Me!",
	innerClass: default_class,
	outerClass: " medium near-white",
	innerHTML: ""
	,color: "#181a79"
},
{
	topic: "Use as a general purpose language",
	top: '50%',
	left: '62%',
	inner:{
		background: "#14a983",

	},
	content: "Web development",
	innerClass: default_class,
	outerClass: " small near-white",
	innerHTML: ""
	,color: "#4a19a2"
}
]