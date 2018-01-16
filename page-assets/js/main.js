// 햄버거 메뉴 이벤트
$( document ).ready(function() {
    var time = 1000;

    // 팝업 열기 트리거
    $('.triggerMenu').click(function(){
        $('#popup_layer, #overlay_t').show(time);
        $('.triggerMenu').hide(time);        
        $('#popup_layer').css("top", Math.max(0, $(window).scrollTop() + 100) + "px");  
        $('.triggerPop').show(time);
    });

    // 닫기 이벤트
    $(document).ready(function() {
        $('.triggerPop').click(function() {
            $('#overlay_t').hide(time);
            $('#popup_layer').hide(time);
            $('.triggerMenu').show(time);
            $('.triggerPop').hide(time);
        });
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
    $(window).ready(function(){
        var year = new Date();
        document.getElementById("now-season1").innerHTML = year.getFullYear() + " S/S";
        document.getElementById("now-season2").innerHTML = year.getFullYear() + " F/W";
    });
});