/*
Portfolio 作品集核心js
*/
var perpage = 6//每页显示数目
var group = initPortfolios(portfolios);
showPortfolios(0)

function showPortfolios(page){
	var array = group[page] || portfolios,
	    content = "";
	//循环输出内容
	for (var i = 0; i < array.length ;i++){
		content += '<div class="item"><a href="';
		content += array[i].url;
		content += '" rel="bookmark" target="_blank"><img src="img/'+array[i].slug+'.png" alt="' + array[i].title + '" /></a></div>\n';
	}
	document.getElementsByClassName('portfolio')[0].innerHTML = content;
	
	//如果需要分页
	if( group.length > 0 ){
		var nav = initNav(group.length, page)
		document.getElementsByClassName('item-control-container')[0].innerHTML = nav;
	}
}

function initNav(pagecount, page) {
	var nav = "<ul class='item-control'>";
	for ( var i = 0; i < pagecount; i ++ ){
		nav += '<li id="item-' + i + '" onclick="showPortfolios(' + i + ')"'
		if( i == page ) {
			nav += " class='active'"
		}
		nav += "></li>"
	}
	nav += "</ul>";
	return nav;
}

function initPortfolios(array) {
	if( array.length > perpage ){
		var group = [],
			index = 0
		for( var i = 0; i < array.length; i ++ ){
			if( !group[index] ){
				group[index] = []
			}
			if( group[index].length >= 6 ) {
				index ++
				group[index] = [];
			}
			group[index].push(array[i]);
		}
		return group
	}else {
		return false;
	}
}
