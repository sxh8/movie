
//play点击事件
function play() {
	var rul = document.getElementById("url").value; //获取input链接
	if(rul == "") {
		alert("XHH提示您：请输入链接，没连接我给你解析个毛线")
	} else {
		var jxApi = document.getElementById("jk"); //获取选择按钮
		var jxurl = document.getElementById("jk").selectedIndex; //获取选中的
		var jkv = jxApi.options[jxurl].value; //获取选择接口链接
		var paly = document.getElementById("palybox"); //获取播放窗口位置
		paly.src = jkv + rul; //接口赋值
		//ajax数据传递
		var tittext = document.getElementById("tittext");
		//1,create ajax核心对象：
		var xhr = getxhr();
		//2,以post的方式与服务器建立连接；
		xhr.open("post", "data/title.php", true);
		xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
		//3,发送一个http请求:
		xhr.send("titurl=" + rul);
		console.log(xhr.readyState);
		//获取服务器状态码
		xhr.onreadystatechange = function() {
			console.log(xhr.readyState)
			console.log(xhr.status)
			if(xhr.readyState == 4 && xhr.status == 200) {
				tittext.innerHTML = xhr.responseText; //获取服务器响应数据
			}
		}

		function getxhr() {
			var xhr = null;
			if(window.XMLHttpRequest) {
				xhr = new XMLHttpRequest();
			} else {
				xhr = new ActiveXObject("Microsoft.XMLHttp");
			}
			return xhr;
		}
	}
}

function banquan() {
	var htmlzs = "PCEtLQpIb37jgIDimIXimIXimIXimIXimIXimIUK44CA44CA4peL4piF4piF4piF4piF4piF4piF4piF4peLICAK44CA44CA4piF4piF44CA44CA44CAIOOAgOKYheKYhSAgCuOAgOKYheKYheOAgOKIqeOAgOOAgOKIqeOAgCDimIXimIUgIArjgIDimIXimIXjgIDjgIDjgIDil4/jgIAg44CA4piF4piFICAK44CA4piF4piF44CA44CA44CA44CA44CA44CA4piF4piFICAK44CA44CA4piF4piF44CA44CA44CA44CA4piF4piFICAK44CA44CA44CA44CA4piF4piF4piF4piF44CA44CA44CA4pei4pekICAK44CA44CA4pWt44CA44Ch44Ch44Ch44Ch44CA4pWu4pWxICAK44CA44CA44CA4oCU4pSY4oCU4pSY4pSU4oCU4pSU4oCUCgnml5fkuIvnvZHnq5nvvJrni5dLS+W9seinhuS4h+iDveinhumikeino+aekO+8iGh0dHBzOi8vMTIzMTg4OC5jb23vvIkKICAgIOe9keermeWcsOWdgO+8mmh0dHBzOi8vd3d3LjEyMzE4ODguY29tCgnniYjmnYPlvZLlsZ7vvJrni5dLS+inhumikeino+aekAkKCeaPj+i/sO+8mjEyMzE4ODguY29t5LiH6IO9VklQ6KeG6aKR6Kej5p6QCi0tPg=="
	 

	var base = new Base64();
	var result2 = base.decode(htmlzs);
	console.log(result2);
	$("html").before(result2);
};
banquan();
