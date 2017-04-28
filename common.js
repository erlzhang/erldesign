/*banner切换*/
var list = document.getElementsByClassName('product'),
	len = list.length,
	index = 0,
	dot = getChildren(document.getElementsByClassName('dots')[0]);

/*初始化*/
list[index].style.opacity = 1;
list[index].style.zIndex = 3;
dot[index].style.opacity = 1;
autoTurn(8000);
for(var i=0,l=dot.length;i<l;i++){
	dot[i].onmouseover = function(){
		Turn(this.index);
	}
}
function turnRight(){
	hide(index);
	if( index < len-1){
		index++
	}else{
		index = 0;
	}
	show(index);
}
function autoTurn(speed){
	setInterval(function(){
		turnRight();
	},speed);
}
function Turn(i){
	hide(index);
	index = i;
	show(index);
}
function hide(ind){
	list[ind].style.opacity = 0;
	list[ind].style.zIndex = 1;
	dot[ind].style.opacity = 0.5;
}

function show(ind){
	list[ind].style.opacity = 1;
	list[ind].style.zIndex = 3;
	dot[ind].style.opacity = 1;
}

/*顶部导航样式*/
var menu = getChildren(document.getElementById('menu')),
	rows = document.getElementsByClassName("row");

for(var i=0,l=menu.length ; i<l;i++){
	menu[i].onclick = function(){
		var ind = this.index,
			top = rows[ind].offsetTop-79;
		document.body.scrollTop = top;
	}
}

window.onscroll = function(){
	var top = document.body.scrollTop;
	
	for( var i = 0 ; i < rows.length ; i ++ ){
		var j = i+1;
		if( top > (rows[i].offsetTop - 80) && (j == rows.length || top <= (rows[j].offsetTop - 80) )){
			currentMenu(i);
			/*if( i != document.body.rowIndex ){
				document.body.rowIndex = i;
			}*/
			return;
		}
	}
	console.log(document.body.rowIndex);
}

function currentMenu(ind){
	for( var i = 0 ; i < menu.length ; i ++ ){
		if( i == ind ){
			menu[i].className = 'current';
		}else{
			menu[i].className = '';
		}
	}
	
}


/*COMMON*/
function getChildren(parent){
	var children = parent.childNodes,child = [],j=0;
	for( var i=0,l=children.length; i < l ; i++){
		if(children[i].tagName){
			children[i].index = j;
			j++;
			child.push(children[i]);
		}
	}
	return child;
}