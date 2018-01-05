$( document ).ready(function() {
    var time = 1000;

    // 팝업 열기 트리거
    $('.triggerMenu').click(function(){
        $('#popup_layer, #overlay_t').show(time);
        $('.triggerMenu').hide(time);        
        $('#popup_layer').css("top", Math.max(0, $(window).scrollTop() + 100) + "px");  
        $('.triggerPop').show(2000);
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