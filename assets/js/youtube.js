var playlistId = 'PLP8iPy9hna6SQPwZUDtAM59-wPzCPyD_S',
  videoCount = 62,
  videoIds =
        [ 'KkKBwJkYgVk', 'EZD3Scuv02g', 'fl0g9tHeghA',
          '5gXMpbY1kJY', 'e6-hcOHO0tc', 'yDwUL3aRSRc',
          '2f32XSMYlDk', 'ScCY_nE0hlU', 'bX4TXWO7dA0',
          'oOd3JnEm3c8', 'luScuvqiow4', 'szE4txAD8mk',
          '4XorFlvQEiI', 'xtfNug-htcs', 'S5sA-Ch_KPo',
          'PwAkLwG1uTE', 'XVv1GipR5yU', 'mvjAFV_UWkI',
          'r2hhRSHiQwY', 'R111conL0jM', 'qAD0ZXriBJs',
          'JIX_ZeBnAPM', 'wMw-6xMMKbI', 'zdH7IHqIBsk',
          'vW59MtN33pM', 'IOVrVOacLP8', 'kY5te9NwXo8',
          'euZkvgx0fG8', '02NkiDoRDCU', 'LGB8GvAL4HA',
          'UBz2Ixvlydo', 'HvhjogGF6aQ', '_zW3CQQG7E8',
          'yAwaxzggTNI', 'EvJ-OvTC5eE', 'ZfjRjljXYXk',
          'j0tmyWJ-aSQ', 'Tmz39y9wugg', 'Qa7nfaDacII',
          'N39V6JMWazo', '3PpleRjaqeQ', 'HkjE0Ibe_2M',
          '4Fk1WOO0Lqk', 'XNldTC0i4qY', 'GgAY6j1whYg',
          'CShweOpWz6w', 't-LIXuhUes8', 'Sxb3U_PjmPA',
          'ErGi9sNgUjw', '3-mfhLk2uYY', 'bnYLIGT6I1A',
          'gl0xNwRxQ5Y', 'l1hMZl5YHD4', 'Jv1JQVQYm0I',
          'y6D7jsWh89o', 'C3iR_PknlFc', 'teDH6cEv8U4',
          '1hvCuQtt6Yg', 'sdjyMbyS4mU', 'On0AtfGh758',
          'AVOooQYi9F4', 'Ti9qqAe_NF4', '30TUEhbGmuc',
          'QN85W8ZGoSk', 'FY7_MHml9z8', 'dONbskqVMVs',
          'IjJqVwtWO3s', 'h4VpT0YcnH8', 'Vd2LJI3JLU0',
          'ovzTaOsFGl0', 'pXT7lnealfs', 'EEP2NMgC9Zo',
          'fHG4uEOlMbY', 'XKdKdfHB2KM', 'rAxzR7lMGDM'
        ],
  makeUrl = (videoId, playlistId, index) => ( 'https://www.youtube.com/embed/' + videoId + '?list=' + playlistId + '&index=' + index),
  createIframe = (videoUrl, height) => ('<iframe width="100%" height=" '+ (height - 10) +'px" src="' + videoUrl + '" frameborder="0" allowfullscreen></iframe>');

// set height of #videoSlideShow
var height = 300;
if(window.innerWidth >= 768){
  height = $$("#videos .desc").getBoundingClientRect().height;
}else{
  height = window.innerWidth*2/3;
}

$$("#videoSlideShow").style.height = height + "px";

var count = 2;
var video_slide_data = videoIds.map((el, i)=>{
  return createIframe(makeUrl(el, playlistId, i), height);
}).map((html)=>{
  return {
    img: "",
    html
  }
}).reduce((acc, el, i, list)=>{
  if(Math.random() < (count/list.length)){
    acc.push(el)
  }
  return acc;
}, []).slice(0, count + 1)

var videoSlide = new Slide(video_slide_data, $$("#videoSlideShow"), {
  list:false,
  arrows: true, 
  debug:true, 
  transitionDelay:"0s", 
  animationIn:"fadeInRight",
  events:{
    onclick:(event, slideShow)=>{

      // doesn't work with iframes! :(
      console.log("clicked")
      slideShow.stop(); 
    }
  }
});
videoSlide.start();
