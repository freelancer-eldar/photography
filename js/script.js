window.scrollTo(0,0);
var
	burger 		= document.getElementById("burger"),
	burmenu		= document.getElementById("burger-menu"),
	burval		= document.getElementById("burger-menu_body"),
	line1			= document.getElementsByClassName('burger-line')[0],
	line2			= document.getElementsByClassName('burger-line')[1],
	line3			= document.getElementsByClassName('burger-line')[2],
	burger_body = document.getElementById("burger-menu_body"),
	actbur	= false,i,classNameItem,
	elem_item_menu,elem_item_menu_delay=0;

function burger_disactive(){
	document.body.style.overflow="auto";
	actbur=false;
	burmenu.style.transform = "translateX(-101%)";
	burger_body.innerHTML="";
	$(".header-top").css("z-index","auto");
	$(".logo-img").attr("src","image/logo/logo.svg");
	$(".logo-name").removeClass("logo-name-black");
	$(".burger-line").css("background-color","#fff")
	line1.style.transform = line2.style.transform = line3.style.transform = "translateY(-50%) rotate(0deg)";
	document.body.style.overflow="auto";
	setTimeout(function(){
		line1.style.top 		= "0";
		line3.style.top 		= "100%";
		line3.style.transform 		= "translateY(-100%)";
	},300);
};
function scrolltoAbout(){
	if(window.innerWidth>1140)
		$("html, body").animate({ scrollTop: Math.ceil($(".section1-image").offset().top) }, 500)
	else
		$("html, body").animate({ scrollTop: Math.ceil($(".fullscreen").innerHeight()) }, 500);
};
function scrolltoClients(){
	$("html, body").animate({ scrollTop: Math.ceil($(".section2").offset().top) }, 500);
};
function scrolltoPortfolio(){
	$("html, body").animate({ scrollTop: Math.ceil($(".section3").offset().top) }, 500);
};
function scrolltoBlog(){
	$("html, body").animate({ scrollTop: Math.ceil($(".section4").offset().top) }, 500);
};
$(".item_about").on("click",scrolltoAbout);
$(".item_clients").on("click",scrolltoClients);
$(".item_portfolio").on("click",scrolltoPortfolio);
$(".item_blog").on("click",scrolltoBlog);

burger.addEventListener("click",function (){
	if(actbur===false){
		actbur=true;
		for(i=0;i<document.querySelectorAll(".header-item").length;i++){
			burger_body.innerHTML+='<div class="burger-menu_item"><a class="buritem_'+$(".header-item").eq(i).children("a").text().toLowerCase()+'" href="#">'+$(".header-item").eq(i).children("a").text()+'</a></div>'
		};
		line1.style.top 			= line3.style.top ="50%";
		line1.style.transform 	= line3.style.transform ="translateY(-50%)";
		setTimeout(function(){
			// document.body.style.overflow="hidden";
			$(".header-top").css("z-index","1000");
			$(".logo-img").attr("src","image/logo/logo-black.svg");
			$(".logo-name").addClass("logo-name-black");
			$(".burger-line").css("background-color","#000");

			setTimeout(function(){
				for(i=0;i<document.getElementsByClassName("burger-menu_item").length;i++){
					elem_item_menu=document.getElementsByClassName("burger-menu_item")[i];
					
					elem_item_menu.style.transition="opacity .3s, margin-left .3s";
					elem_item_menu.style.transitionTimingFunction="ease";
					elem_item_menu.style.transitionDelay=elem_item_menu_delay+"ms";
					elem_item_menu.style.opacity="1";
					elem_item_menu.style.marginLeft="0";
					elem_item_menu_delay+=100;
				};
			},200);

			burmenu.style.transform = "translateX(0)";
			line1.style.transform = line2.style.transform = "translateY(-50%) rotate(45deg)";
			line3.style.transform = "translateY(-50%) rotate(-45deg)";
		},300);
		$(".buritem_home").on("click",function(){
			actbur=false;
			burmenu.style.transform = "translateX(-101%)";
			burger_body.innerHTML="";
			$(".header-top").css("z-index","auto");
			$(".logo-img").attr("src","image/logo/logo.svg");
			$(".logo-name").removeClass("logo-name-black");
			$(".burger-line").css("background-color","#fff")
			line1.style.transform = line2.style.transform = line3.style.transform = "translateY(-50%) rotate(0deg)";
			document.body.style.overflow="auto";
			setTimeout(function(){
				line1.style.top 		= "0";
				line3.style.top 		= "100%";
				line3.style.transform 		= "translateY(-100%)";

				if(window.innerWidth>1140)
					$("html, body").animate({ scrollTop: Math.ceil($(".section1-image").offset().top) }, 500)
				else
					$("html, body").animate({ scrollTop: Math.ceil($(".fullscreen").innerHeight()) }, 500);
			},300);
		});
		$(".buritem_about").on("click",function(){
			actbur=false;
			burmenu.style.transform = "translateX(-101%)";
			burger_body.innerHTML="";
			$(".header-top").css("z-index","auto");
			$(".logo-img").attr("src","image/logo/logo.svg");
			$(".logo-name").removeClass("logo-name-black");
			$(".burger-line").css("background-color","#fff")
			line1.style.transform = line2.style.transform = line3.style.transform = "translateY(-50%) rotate(0deg)";
			document.body.style.overflow="auto";
			setTimeout(function(){
				line1.style.top 		= "0";
				line3.style.top 		= "100%";
				line3.style.transform 		= "translateY(-100%)";

				if(window.innerWidth>1140)
					$("html, body").animate({ scrollTop: Math.ceil($(".section1-image").offset().top) }, 500)
				else
					$("html, body").animate({ scrollTop: Math.ceil($(".fullscreen").innerHeight()) }, 500);
			},300);
		});
		$(".buritem_clients").on("click",function(){
			actbur=false;
			burmenu.style.transform = "translateX(-101%)";
			burger_body.innerHTML="";
			$(".header-top").css("z-index","auto");
			$(".logo-img").attr("src","image/logo/logo.svg");
			$(".logo-name").removeClass("logo-name-black");
			$(".burger-line").css("background-color","#fff")
			line1.style.transform = line2.style.transform = line3.style.transform = "translateY(-50%) rotate(0deg)";
			document.body.style.overflow="auto";
			setTimeout(function(){
				line1.style.top 		= "0";
				line3.style.top 		= "100%";
				line3.style.transform 		= "translateY(-100%)";

				$("html, body").animate({ scrollTop: Math.ceil($(".section2").offset().top) }, 500);
			},300);
		});
		$(".buritem_portfolio").on("click",function(){
			actbur=false;
			burmenu.style.transform = "translateX(-101%)";
			burger_body.innerHTML="";
			$(".header-top").css("z-index","auto");
			$(".logo-img").attr("src","image/logo/logo.svg");
			$(".logo-name").removeClass("logo-name-black");
			$(".burger-line").css("background-color","#fff")
			line1.style.transform = line2.style.transform = line3.style.transform = "translateY(-50%) rotate(0deg)";
			document.body.style.overflow="auto";
			setTimeout(function(){
				line1.style.top 		= "0";
				line3.style.top 		= "100%";
				line3.style.transform 		= "translateY(-100%)";

				$("html, body").animate({ scrollTop: Math.ceil($(".section3").offset().top) }, 500);
			},300);
		});
		$(".buritem_blog").on("click",function(){
			actbur=false;
			burmenu.style.transform = "translateX(-101%)";
			burger_body.innerHTML="";
			$(".header-top").css("z-index","auto");
			$(".logo-img").attr("src","image/logo/logo.svg");
			$(".logo-name").removeClass("logo-name-black");
			$(".burger-line").css("background-color","#fff")
			line1.style.transform = line2.style.transform = line3.style.transform = "translateY(-50%) rotate(0deg)";
			document.body.style.overflow="auto";
			setTimeout(function(){
				line1.style.top 		= "0";
				line3.style.top 		= "100%";
				line3.style.transform 		= "translateY(-100%)";

				$("html, body").animate({ scrollTop: Math.ceil($(".section4").offset().top) }, 500);
			},300);
		});
	} else {
		// document.body.style.overflow="auto";
		actbur=false;
		burmenu.style.transform = "translateX(-101%)";
		burger_body.innerHTML="";
		$(".header-top").css("z-index","auto");
		$(".logo-img").attr("src","image/logo/logo.svg");
		$(".logo-name").removeClass("logo-name-black");
		$(".burger-line").css("background-color","#fff")
		line1.style.transform = line2.style.transform = line3.style.transform = "translateY(-50%) rotate(0deg)";
		document.body.style.overflow="auto";
		setTimeout(function(){
			line1.style.top 		= "0";
			line3.style.top 		= "100%";
			line3.style.transform 		= "translateY(-100%)";
		},300);
		document.body.style.overflow="auto";
	};
});

var slowshowDur=300;
$(".slowshow").css("transition","opacity "+slowshowDur+"ms ease");
function slowShow(e,n){
	var 
		l 		= $("."+e).find('.slowshow__item').length;
	$("."+e).css("opacity","1");
	setTimeout(function(){
		var showint = setInterval(function(){
			if(slowShowi[n]<l){
				document.querySelectorAll("."+e+" .slowshow__item")[slowShowi[n]].classList.add("slowshow__item_active");
				slowShowi[n]++;
			} else clearInterval(showint);
		},150)
	},slowshowDur-20);
	return false;
};

function image_hoverChange(){
	var block_photo = document.getElementsByClassName("gallery-column_block");
	for(i=0;i<document.getElementsByClassName("gallery-column_block").length;i++){
		if(block_photo[i].offsetHeight<300){
			document.getElementsByClassName("hover_plus")[i].classList.add("hover_plus_top");
			document.getElementsByClassName("gallery-share")[i].classList.add("gallery-share_bottom");
		} else {
			document.getElementsByClassName("hover_plus")[i].classList.add("hover_plus_normal");
			document.getElementsByClassName("gallery-share")[i].classList.add("gallery-share_normal");
		};
	};
};
$(document).ready(function(){
	for(i=0;i<document.getElementsByClassName("gallery-column_block").length;i++){
		document.getElementsByClassName("gallery-column_block")[i].style.height=(document.getElementsByClassName("gallery-column_block")[i].offsetHeight-5)+"px";
	};
	$(".hover_plus").on("mouseenter",function(){
		if($(this).hasClass("hover_plus_top")){
			$(this).css({
				"transform":"translateX(-50%) rotate(90deg)",
				"cursor":"pointer"
			});
			$(this).on("mouseleave",function(){
				$(this).css({
					"transform":"translateX(-50%) rotate(0deg)"
				});
			})
		};
	});
	image_hoverChange();
	$(".icon-share2").addClass("gallery-icon-share");
});
function scrollParallaxCheck(name){
	return window.pageYOffset>$("."+name).offset().top-window.innerHeight
		&&window.pageYOffset<$("."+name).offset().top+$("."+name).innerHeight();
};
var parallax1 = parallax2 = parallax3 = 0,
slowShowbool=[],slowShowi=[];
for(i=0;i<document.getElementsByClassName("slowshow").length;i++){
	slowShowbool.push(false);
	slowShowi.push(0);
};
if(window.pageYOffset<$(".fullscreen").innerHeight()){
	parallax1=Math.round(window.pageYOffset/3);
}
$(".full-image").css("top",parallax1+"px");
window.addEventListener("scroll",function(){
	for(i=0;i<document.getElementsByClassName("slowshow").length;i++){
		let slwname=document.getElementsByClassName("slowshow")[i].classList[0],diff=(window.innerHeight/3);
		if(window.pageYOffset>=$("."+slwname).offset().top-diff){
			if(!slowShowbool[i]){
				slowShow(slwname,i);
				slowShowbool[i]=true;
			};
		};
	};

	if(window.pageYOffset<$(".fullscreen").innerHeight()){
		parallax1=Math.round(window.pageYOffset/3);
	}

	if(scrollParallaxCheck("section2")){
		if(window.innerWidth>955){
			parallax2=Math.round(window.pageYOffset)/2000-0.4;
		} else {
			parallax2=Math.round(window.pageYOffset)/2000-0.7;
		};
	};
	if(scrollParallaxCheck("section05")){
		if(window.innerWidth>955){
			parallax3=Math.round(window.pageYOffset)/4000-0.8;
		} else {
			parallax3=Math.round(window.pageYOffset)/20000-0.2;
		};
	};




	if(window.window.pageYOffset<window.innerHeight)
		$(".full-image").css("top",parallax1+"px");

	if(window.pageYOffset>($(".section2").offset().top-window.innerHeight)
		&&parallax2>=0&&window.pageYOffset<($(".section2").offset().top+$(".section2").height()))
		$(".section2-image").css("transform","scale("+(1+parallax2)+")");

	if(window.pageYOffset>($(".section05").offset().top-window.innerHeight)
		&&parallax3>=0&&window.pageYOffset<($(".section05").offset().top+$(".section05").height()))
		$(".section05-image").css("transform","scale("+(1+parallax3)+")")
});
document.getElementById("continue").addEventListener("click",scrolltoAbout);

if(window.innerWidth>910)
	$(".hr-row").css("width",($(".parent").width()+$(".parent").height())+"px");
else {
	$(".hr-row").css("width","100%");
};
var 
	block1w = $(".gallery-column_block1").width(),
	block1wdbl,
	block1h = $(".gallery-column_block1").children(".photo-gallery").height();
console.log("block1h=="+block1h);
function galleryBreak1(ww){
	if(ww<=1516){
		// console.log($(".section3-text").parent().height());
		if($(".section3-text").parent().height()>1120){
			$(".section3-text").css({
				"min-width":"0",
				"height":"1120px"
			});
		} else {
			$(".section3-text").css({
				"min-width":"0",
				"height":$(".section3-text").parent().height()+"px"
			});
		};
		if(ww<=1040){
			$(".section3-text").css({
				"max-width":$(".gallery").width()+"px",
				"height":"auto"
			});
			$(".section3-text_container").css("padding","130px 0");
		};

		$(".gallery-column_block1").children(".photo-gallery").css("display","none")
		$(".gallery-column_block").eq(0).css("background-image","url("+$(".gallery-column_block").eq(0).children(".photo-gallery").attr("src")+")");

		if(ww<=666){
			$(".photo-gallery").css("display","none")
			for(i=0;i<document.getElementsByClassName("gallery-column_block").length;i++){
				$(".gallery-column_block").eq(i).css("background-image","url("+$(".gallery-column_block").eq(i).children(".photo-gallery").attr("src")+")");
			};
		} else {
			$(".photo-gallery").css("display","block")
			for(i=0;i<document.getElementsByClassName("gallery-column_block").length;i++){
				$(".gallery-column_block").eq(i).css("background-image","none");
			};
		};
		if($(".hover_plus").hasClass("hover_plus_normal")){
			$(".gallery-column_block1").children(".hover_plus").removeClass("hover_plus_normal");
			$(".gallery-column_block1").children(".hover_plus").addClass("hover_plus_top");
		};
		$(".gallery-column_block1").css("height","233px");
		$(".gallery-column_block2").css({
			"width":($(".gallery-column_block2").parent().width()-$(".gallery-column_block2").siblings(".gallery-column_block1").width()-30)+"px",
			"height":"233px"
		});
		$(".gallery-column_block2").children(".photo-gallery").css("width","100%");
	} else {
		$(".photo-gallery").css("display","block");
		$(".gallery-column_block").eq(0).css("background-image","none");

		$(".section3-text").css({
			"min-width":"400px",
			"height":"auto"
		});
		$(".photo-gallery").css("display","block");
		$(".gallery-column_block").css("background-image","none");
		if($(".hover_plus").hasClass("hover_plus_top")){
			$(".gallery-column_block1").children(".hover_plus").removeClass("hover_plus_top");
			$(".gallery-column_block1").children(".hover_plus").addClass("hover_plus_normal");
		};
		$(".gallery-column_block1").css("height",block1h+"px");
		$(".gallery-column_block2").css("width","auto");
	};
};
galleryBreak1(window.innerWidth);
window.addEventListener("resize",function(){
	var ww=window.innerWidth;
	if(ww>910){
		$(".hr-row").css("width",($(".parent").width()+$(".parent").height())+"px");
	} else {
		$(".hr-row").css("width","100%");
	};
	if(actbur!=false){
		if(ww>680){
			$("#burger-menu").css("display","none");
			$(".logo-name").removeClass("logo-name-black");
			$(".logo-img").attr("src","image/logo/logo.svg");
		} else {
			$("#burger-menu").css("display","block");
			$(".logo-img").attr("src","image/logo/logo-black.svg");
			$(".logo-name").addClass("logo-name-black");
		};
	};
	galleryBreak1(ww);
	image_hoverChange();
});

$(".view-overflow").css("width",($(".view-author-link").width()+110)+"px");
$(".view-author-link").on("mouseenter",function(){
	$(".view-overflow").css({"transform":"scale(1.05)","background-color":"#343670"});
	$(".view-overflow-line1").css("left","105%");
	$(".view-overflow-line2").css("left","105%");
});
$(".view-author-link").on("mouseleave",function(){
	$(".view-overflow").css({"transform":"scale(1)","background-color":"#2b2d5c"});
	$(".view-overflow-line1").css("left","-90%");
	$(".view-overflow-line2").css("left","-90%");
});

$(".in").on("focus",function(){
	$(this).css("color","#fff");
	$(this).parent(".input-box").addClass("in-active");
	$(this).siblings(".in-name").css({
		"opacity":"0",
		"left":"0"
	});
	$(this).on("keyup",function(event){
		if(event.key=="Enter"){
			document.getElementsByClassName("in")[$(".in").index(this)+1].focus();
		};
	});
});
$("form").keydown(function(event){
	if(event.keyCode == 13) {
	   event.preventDefault();
	   return false;
	};
});
$(".in").on("blur",function(){
	// $(this).parent(".input-box").removeClass("in-active");
	$(this).parent(".input-box").removeClass("in-active");
	$(this).css("color","#2b2d5c");
	if($(this).val()==""){
		$(this).siblings(".in-name").css({
			"opacity":"1",
			"left":"27px"
		});
	};
});

$("#section05__arrow").on("click",function(){
	$(".foot-container").css("height",$(".foot-container").innerHeight+"px");
	
});

var foot_between = [0,1];
for(i=0;i<foot_between.length;i++){
	$(".footer-column").eq(foot_between[i]).addClass("flexbox");
	$(".footer-column").eq(foot_between[i]).children(".footer-item").addClass("flexbetween");
};