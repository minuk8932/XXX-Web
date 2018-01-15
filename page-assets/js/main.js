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

$(document).ready(function(){
    $(window).scroll(function(){
        var scrollT = $(this).scrollTop();  // 스크롤 바 상단 위치 값
        var menuH = $('#shop-items').offset(); // 스크롤 바가 존재하는 div의 높이 값
        
        if(scrollT > menuH.top){                     // 스크롤 한 경우
            $('.first-dropbtn').css('z-index', 1);   // 이미지를 다른 dropbtn과 같은 설정
        }
        else{                                        // 스크롤 안 한 경우
            $('.first-dropbtn').css('z-index', 200); // 제일 바깥으로 끌어내 이미지가 보일 수 있게 설정
        }
    });
});