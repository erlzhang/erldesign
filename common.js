
var feature = getSection('feature'),
	style = getSection('style'),
	project = getSection('project'),
	skill = getSection('skills'),
	contact = getSection('contact');


var windowHeight = window.innerHeight,offset = 200;

document.body.onscroll = function(){
	var top = document.body.scrollTop;
	
	if( top >= (feature.offsetTop - windowHeight + 200) && feature.in == 0 ){
		addClass(feature,'in');
		feature.in = 1;
	}
	
	if( top >= (style.offsetTop - windowHeight + 200) && style.in == 0 ){
		addClass(style,'in');
		style.in = 1;
	}
	
	if( top >= (project.offsetTop - windowHeight + 200) && project.in == 0 ){
		addClass(project,'in');
		project.in = 1;
	}
	
	if( top >= (skill.offsetTop - windowHeight + 200) && skill.in == 0 ){
		addClass(skill,'in');
		skill.in = 1;
		addClass(contact,'in');
		contact.in = 1;
	}
}

var container = document.getElementsByClassName('features')[0];
//var containerHeight = document.defaultView.getComputedStyle(container).height;
var featureList = document.getElementsByClassName('feature_item');
var featureNav = document.getElementsByClassName('feature-nav-item');
container.style.position = 'relative';
//container.style.height = containerHeight;
var featureIndex = 0;
showFeature(featureIndex);

setInterval(nextFeature,5000);

document.getElementsByClassName('feature-next')[0].onclick = nextFeature;



function nextFeature(){
	if( featureIndex == (featureList.length - 1) ){
		featureIndex = 0;
	}else{
		featureIndex++;
	}
	showFeature(featureIndex);
}

function showFeature(index){
	featureIndex = index;
	for ( var i = 0,l = featureList.length ; i < l; i++ ){
		featureList[i].style.position = 'absolute';
		if( index == i){
			featureList[i].style.opacity = 1;
			featureList[i].style.zIndex = 3;
			addClass(featureNav[i],"c");
		}else{
			featureList[i].style.opacity = 0;
			featureList[i].style.zIndex = 2;
			featureList[i].style.display = "block";
			removeClass(featureNav[i],"c");
		}
	}	
}

function getSection(className){
	var e = document.getElementsByClassName(className)[0];
	e.in = 0;
	return e;
}

function addClass(e,c){
	var o = e.className;
	if(o && o[o.length -1]!= " " ){
		o = o + " ";
	}
	e.className = o + c;
}

function removeClass(e,c){
	var pattern = new RegExp("\\b" + c + "\\b\\s*","g");
	var o = e.className;
	e.className = o.replace(pattern,"");
}
