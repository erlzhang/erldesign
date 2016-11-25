/*
Portfolio 作品集核心js
*/
var perpage = 8//每页显示数目

//分类获取数据
function typePortfolio(type){
	var typeportfolio=[];
	for(var i=0; i < portfolios.length;i++){
		if(portfolios[i].type == type){
			typeportfolio.push(portfolios[i]);
		}
	}
	return typeportfolio;
}

function showPortfolios(page,type){
	var s = window.location.search.substring(1)
	var array,content="";
	
	//分类调用
	if(type){
		array = typePortfolio(type);
	}else{
		array = portfolios;
		type = "";
	}
	
	var str = 0,end = array.length,prev="",next="";
	
	//如果需要分页
	if( array.length > perpage ){
		
		//计算分页数
		var pagecount = Math.floor(array.length / perpage)+1;
		if(array.length % perpage === 0)
			pagecount -= 1;
		str = 0+(page-1)*perpage;
		end = page * perpage;
		if (page === pagecount)
			end = array.length;
		
		//输出分页导航
		if(page != pagecount){
			next = '<span id="next" onclick="showPortfolios('+(page+1)+',\''+type+'\')">下一页</span>';
		}
		if(page > 1){
			prev = '<span id="prev" onclick="showPortfolios('+(page-1)+',\''+type+'\')">上一页</span>';
		}
	}
	
	//循环输出内容
	for (var i = str; i < end;i++){
		content += '<figure><a href="';
		content += array[i].url;
		content += '" rel="bookmark" target="_blank"><img src="images/'+array[i].slug+'.jpg" /><figcaption><h2>'+array[i].title+'</h2><p>'+array[i].description+'</p></figcaption></a></figure>\n';
	}
	document.getElementsByClassName('portfolio')[0].innerHTML = content;	
	document.getElementsByClassName('nav')[0].innerHTML = prev + next;
}

