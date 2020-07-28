$(function() {
	// 头尾
	$(".header").load("header/header.html");
	$(".footer").load("footer/footer.html");

	// 跳转
	$(".content01").find("a").attr("href", "xiangqingye2.html");
	$(".content02").find("a").attr("href", "list01.html");
	$(".content03").find("a").attr("href", "xiangqingye.html");

	//右侧导航条
	//存储每一层的高度
	var topArr = [],
		floor;
	for (var i = 1; i < 6; i++) {
		var top = $(".floor" + i).offset().top;
		topArr.push(top);
	}
	topArr[0]-=50;//调整导航条出现的时机
	//滚动事件
	$(document).scroll(function() {
		var screenTop = $(document).scrollTop();
		//判断滑动到第几层楼
		for(var i=0;i<topArr.length;i++){
			if(screenTop>topArr[i]){
				floor=i;
			}
		}
		//导航条的显示与隐藏
		if (screenTop > topArr[0]) {
			$(".gps").css("display", "block");
		} else {
			$(".gps").css("display", "none");
		}
		//添加样式
		var $nav = $(".gps a").eq(floor);
		$nav.siblings().removeClass("red");
		$nav.addClass("red");
	})
	
	
	// 左侧导航栏返回顶部
	$("#back").click(function(){
		$("html,body").animate({
			scrollTop:0
		},200)
	});


	// 第一层动画---变大
	var $hezi = $(".content01 ul li");
	$hezi.find("div").before("<div class='shuoming'>");
	$hezi.find(".shuoming").text("精选爆款 点击抢购");
	$hezi.hover(function() {
		$(this).find("div").stop().animate({
			"margin-top": "30px"
		}, 200)
		$(this).stop().animate({
			"width": "180px",
			"height": "220px"
		}, 200);
		$(this).find("img").eq(1).stop().animate({
			"width": "140px"
		}, 200);
		$(this).find(".shuoming").stop().fadeIn(200);
	}, function() {
		$(this).find("div").stop().animate({
			"margin-top": "15px"
		}, 200)
		$(this).stop().animate({
			"width": "170px",
			"height": "200px"
		}, 200);
		$(this).find("img").eq(1).stop().animate({
			"width": "130px"
		}, 200);
		$(this).find(".shuoming").stop().fadeOut(200);
	})

	// 第二层动画---红色升起
	$(".content02 ul li").append("<div class='hong'>");
	$(".content02 ul li").hover(function() {
		$(this).children(".hong").stop().animate({
			"top": "0"
		}, 200);
		$(this).find("span").css({
			"color": "#fff"
		})
	}, function() {
		$(this).find("span").css({
			"color": "#4a4a4a"
		})
		$(this).children(".hong").stop().animate({
			"top": "100px"
		}, 200);
	})

	// 第三层以后的动画
	var $div = $(".content03 .neirong li");
	$div.hover(function() {
		$(this).find("div").stop().animate({
			"top": "330px"
		}, 300)
	}, function() {
		$(this).find("div").stop().animate({
			"top": "378px"
		}, 300)
	})
})
