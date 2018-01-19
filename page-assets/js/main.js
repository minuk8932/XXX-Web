// 햄버거 메뉴 이벤트
$(document).ready(function(){
    var time = 500;

    // 메뉴 열기
    $("#burger-container").on('click', function(){
        $(this).toggleClass("open");
        var openVar = document.querySelector('#burger-container').className;
        
        if(openVar == "close open"){
            $('#popup_layer, #overlay_t').show(time);
        }
    });

    // 메뉴 닫기
    $("#burger-container").on('click', function(){
        $(this).toggleClass("close");
        var closeVar = document.querySelector('#burger-container').className;

        if(closeVar == "close"){
            $('#popup_layer, #overlay_t').hide(time);
        }
    });
});

// shop 탭 최상단 상품 이미지 드롭버튼 이벤트
$(document).ready(function(){
    $(window).scroll(function(){
        var scrollT = $(this).scrollTop();  // 스크롤 바 상단 위치 값
        
        if(scrollT > 0){                     // 스크롤 한 경우
            $('.first-dropbtn').css('z-index', 1);   // 이미지를 다른 dropbtn과 같은 설정
        }
        else{                                        // 스크롤 안 한 경우
            $('.first-dropbtn').css('z-index', 200); // 제일 바깥으로 끌어내 이미지가 보일 수 있게 설정
        }
    });
});

// shop의 season 탭 날짜 형식 정의
$(document).ready(function(){
    var year = new Date();
    document.getElementById("now-season1").innerHTML = year.getFullYear() + " S/S";
    document.getElementById("now-season2").innerHTML = year.getFullYear() + " F/W";
});

// floating banner
var quick_menu = $('.season');
var quick_top = 50;

quick_menu.css('top', $(window).height());

$(document).ready(function(){
    quick_menu.animate( { 
        "top": $(document).scrollTop() + quick_top +"px" 
    }, 200 );

    $(window).scroll(function(){
        quick_menu.stop();
        quick_menu.animate( { 
            "top": $(document).scrollTop() + quick_top + "px" 
        }, 500 );
    });
});

// Lookbook 슬라이드 이벤트
$(document).ready(function() {
	var current=0;
	var slide_length = $('.slide_ul>li').length;  //이미지의 갯수: 변수
	var btn_ul = '<ul class="slide_btn"></ul>';

	$('.slide_ul>li').hide();
	$('.slide_ul>li').first().show();
	
    $(btn_ul).prependTo($('.slide'));   //slide 클래스위에 생성
    
	for (var i = 0 ; i < slide_length; i++){    //동그라미 버튼 생성 이미지 li 개수 만큼
		var child = '<li><a href="#none">'+i+'</a></li>';
		$(child).appendTo($('.slide_btn'));
	}
	
	$('.slide_btn > li > a').first().addClass('active');	
	$('.slide_btn > li > a').on('click' , slide_stop);
    
    $('.slide_ul').bxSlider({
        captions: true  // 설명글 추가
        ,controls: false // 화살표 버튼 제거
    });

    //자동 슬라이드
    function autoplay(){
	    if(current == slide_length-1){
	        current = 0;
        }
        else{
	        current++;
        }

        $('.slide_ul>li').stop().fadeOut(1000);
        $('.slide_ul>li').eq(current).stop().fadeIn(1000);
        $('.slide_btn > li > a').removeClass('active');	
        $('.slide_btn > li > a').eq(current).addClass('active');	
    }
    setInterval(autoplay,3000);

    //버튼 클릭시 슬라이드
    function slide_stop(){
            var fade_idx = $(this).parent().index(); 
            current = $(this).parent().index(); //클릭한 버튼의 Index 를 받아서 그 다음 이미지부터 슬라이드 재생.
            
            if($('.slide_ul > li:animated').length >= 1)
                return false;   //버튼 반복 클릭시 딜레이 방지

            $('.slide_ul > li').fadeOut(400);
            $('.slide_ul > li').eq(fade_idx).fadeIn(400);
            $('.slide_btn > li > a').removeClass('active');	
            $(this).addClass('active');
	}	
});