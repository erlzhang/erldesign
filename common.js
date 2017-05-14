var name = document.getElementsByClassName('author_name')[0].innerHTML;
var name_content = name.innerHTML;

var con = document.getElementsByClassName('author_name')[0];
con.innerHTML = name[0];

var i = 1;

if( i <= name.length){
	var increase = setInterval(function(){
		var s = con.innerHTML;
		con.innerHTML = s + name[i];
		console.log(i);
		if( i >= (name.length-1) ){
			clearInterval(increase);
			document.getElementsByClassName('career')[0].style.opacity = "1";
			setTimeout(function(){
				document.getElementsByClassName('career-after')[0].style.width = "100%";
				document.getElementsByClassName('second')[0].style.opacity = "1";
			},400);
			setTimeout(function(){
				document.getElementsByClassName('more')[0].style.opacity = "1";
			},900);
		}
		i++;
	},150);
}

