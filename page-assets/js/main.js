$( document ).ready(function() {
    // 팝업 열기 트리거

    $('.triggerMenu').click(function(){ 
        $('#popup_layer, #overlay_t').show();
        $('.triggerMenu').hide();
        $('#popup_layer').css("top", Math.max(0, $(window).scrollTop() + 100) + "px");  
    });

    // 닫기 이벤트
    // $('#overlay_t, .close').click(function(e){ 
    //     e.preventDefault(); 
    //     $('#popup_layer, #overlay_t').hide();
    // });

    $(document).ready(function() {
        $('.triggerPop').click(function() {
            $('#overlay_t').hide();
            $('#popup_layer').hide();
            $('.triggerMenu').show();
        });
    });
    
});