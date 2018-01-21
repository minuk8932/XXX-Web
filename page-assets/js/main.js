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
$(document).ready(function(){
    $('.slide-ul').bxSlider({
        captions: true  // 설명글 추가
        ,auto: true
        ,autoHover: true
        ,pager: true
        ,controls: false // 화살표 버튼 제거
        ,minSlides:4
        ,maxSlides:4
        ,slideWidth: 300
        ,speed: 500
        ,pause: 2000
        ,infiniteLoop: true
        ,mode: 'horizontal'
    });
});