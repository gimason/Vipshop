$(function() {
	// 头部
	$(".header").load("header/header.html");
	// 尾部
	$(".footer").load("footer/footer.html");
	
	// 跳转
	$("#jingxuan").children(".container").find("a").attr('href','list.html');
	$("#nvzhuang").find("a").attr('href','list01.html');
	$("#xiebao").find("a").attr('href','list02.html');
	$("#nanzhuang").find("a").attr('href','list.html');
	$("#yundong").find("a").attr('href','list01.html');
	$("#shipin").find("a").attr('href','list02.html');
	$("#meizhuang").find("a").attr('href','list.html');
	$("#muying").find("a").attr('href','list01.html');
	$("#jujia").find("a").attr('href','list02.html');
	$("#guoji").find("a").attr('href','list.html');
	$("#shenghuo").find("a").attr('href','list01.html');
	

	//轮播图
	var mySwiper = new Swiper('.banner .swiper-container', {
		loop: true, // 循环模式选项
		autoplay: {
			delay: 1500,
			disableOnInteraction: false
		},

		// 如果需要分页器
		pagination: {
			el: '.swiper-pagination',
			clickable :true,
		},

		//切换效果
		effect: 'fade',

		// 如果需要前进后退按钮
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},

		// 如果需要滚动条
		scrollbar: {
			el: '.swiper-scrollbar',
		},
	})
	mySwiper.scrollbar.$dragEl.css({
		'background': '#e6057d',
		'left': '-230px',
	});
	mySwiper.el.onmouseover = function() {
		//鼠标滑过停止自动切换
		mySwiper.autoplay.stop();
		//鼠标滑过显示左右按钮
		mySwiper.navigation.$nextEl.removeClass('hide');
		mySwiper.navigation.$prevEl.removeClass('hide');
	}
	mySwiper.el.onmouseout = function() {
		mySwiper.autoplay.start();
		mySwiper.navigation.$nextEl.addClass('hide');
		mySwiper.navigation.$prevEl.addClass('hide');
	}
	//鼠标滑过pagination控制swiper切换
	for(i=0;i<mySwiper.pagination.bullets.length;i++){
	  mySwiper.pagination.bullets[i].onmouseover=function(){
	    this.click();
	  };
	} 

	//每日必看
	$(".content01 .mid ul li").hover(function() {
		$(this).stop().animate({
			"background-size": "105%"
		}, 200)
	}, function() {
		$(this).stop().animate({
			"background-size": "100%"
		}, 200)
	})
	$(".content01 .btm ul li a").hover(function() {
		$(this).find("img").stop().animate({
			"width": "90px"
		}, 200)
	}, function() {
		$(this).find("img").stop().animate({
			"width": "80px"
		}, 200)
	})


	// 图片特效
	$(".content02 .neirong>ul li").hover(function() {
		$(this).find("img").stop().animate({
			"opacity": "0.7"
		}, 200)
	}, function() {
		$(this).find("img").stop().animate({
			"opacity": "1"
		}, 200)
	})

	// 左侧浮动栏
	// 滑过事件
	var $nav = $(".content06 ul li");
	$nav.hover(function() {
		$(this).css("background-color", "#fff");
		$(this).find("span").css("color", "#f10180");
		var $idx = parseInt($(this).index()) + 1;
		$(this).find("img").attr("src", "img/shouye/nav_" + $idx + ".png");
	}, function() {
		$(this).find("span").css("color", "#898989");
		var $idx = parseInt($(this).index()) + 1;
		$(this).find("img").attr("src", "img/shouye/nav_" + $idx + ".jpg");
	});
	// 屏幕滚动事件---定位
	var topArr = []; //各楼层所处高度
	var floor = -1;  //楼层位置
	for(var i=1;i<12;i++){
		var top = $(".floor"+i).offset().top-200;
		topArr.push(top);
	}
	$(document).scroll(function(){
		var rollTop = $(document).scrollTop();
		//定义楼层
		for(var i=0;i<topArr.length;i++){
			if(rollTop>topArr[i]){
				floor=i;
			}
		}
		// 侧边导航浮动问题
		if(rollTop>topArr[0]+300){
			$(".content06").css("position","fixed");
		}else{
			floor=100;//当floor=-1时，下面的字体变色会选择最后一个，当-2时，会选择倒数第二个
			$(".content06").css("position","absolute");
		}
		//滚动变色、变图片事件
		var n = floor + 1;
		var $nav = $(".content06 ul li").eq(floor);
		$(".content06 ul li").find("span").css("color", "#898989");
		$nav.find("span").css("color", "#f10180");
		for(var i=0;i<11;i++){
			$(".content06 ul li").eq(i).find("img").attr("src","img/shouye/nav_" + (i+1) + ".jpg");
		}
		$nav.find("img").attr("src", "img/shouye/nav_" + n + ".png");
	})
	
	

	//收藏品牌
	//滑过
	$(".content02 .neirong li>a").hover(function() {
		$(this).children().eq(4).css("display", "block");
	}, function() {
		$(this).children().eq(4).css("display", "none");
	})
	//点击
	$(".content02 .neirong li>a div:last-child").click(function(e) {
		e.preventDefault();
		$(this).toggleClass("change");
		if ($(this).is(".change")) {
			$(this).text("取消收藏");
		} else {
			$(this).text("收藏品牌");
		}
	})

	// 倒计时
	function timer(countdown_econds) {
		// var countdown_econds = parseInt(1800); //倒计时总秒数量
		var stop_time = localStorage.getItem('stop_time')
		if (stop_time == null || stop_time == undefined || stop_time == 'undefined' || stop_time == 'null') {
			var cur = new Date() // 当前时间
			var cur1 = new Date().getTime() // 当前时间戳
			var end_time = new Date(cur.setSeconds(cur.getSeconds() + countdown_econds));
			end_time = end_time.getTime() //结束时间戳
			localStorage.setItem('stop_time', end_time)
		}
		window.setInterval(function() {
			var day = 0,
				hour = 0,
				minute = 0,
				second = 0; //时间默认值    
			if (countdown_econds > 0) {
				day = Math.floor(countdown_econds / (60 * 60 * 24));
				hour = Math.floor(countdown_econds / (60 * 60)) - (day * 24);
				minute = Math.floor(countdown_econds / 60) - (day * 24 * 60) - (hour * 60);
				second = Math.floor(countdown_econds) - (day * 24 * 60 * 60) - (hour * 60 * 60) - (minute * 60);
			} else { //当时间耗尽，跳回指定页面
				localStorage.setItem('stop_time', null)
				window.location = url;
			}
			if (hour <= 9) hour = '0' + hour;
			if (minute <= 9) minute = '0' + minute;
			if (second <= 9) second = '0' + second;
			$(".float .neirong div:first span:eq(0)").text(hour);
			$(".float .neirong div:first span:eq(1)").text(minute);
			$(".float .neirong div:first span:eq(2)").text(second);
			// $(".timeShow").html('00' + ':' + minute + ':' + second);
			countdown_econds--;
		}, 1000);
	}
	timer(parseInt(44585));
	if (localStorage.getItem('stop_time') != undefined && !isNaN(localStorage.getItem('stop_time'))) {
		var stop_time = localStorage.getItem('stop_time')
		var now = new Date().getTime(); //当前时间戳
		var countdown_econds = parseInt((stop_time - now) / 1000);
		if (countdown_econds <= 0) {
			localStorage.setItem('stop_time', null)
		} else {
			timer(countdown_econds);
		}
	}


});


