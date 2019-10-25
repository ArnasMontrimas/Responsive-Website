$(document).ready( () => {

    // ** FUNCTIONS ** //

    showHideButton = () => {
        if(window.matchMedia('(min-width: 800px)').matches){
            $("#top").hide();
        }
        if(window.matchMedia('(max-width: 800px)').matches){
            $("#top").show();
            $(".menu").hide();
        };
    };

    onResizeShowHideButton = () => {
        if(window.matchMedia('(min-width: 800px)').matches) {
            $("#top").hide();
            $(".menu").show();
        }
        else {
            $("#top").show();
        };
        if (window.matchMedia('(min-width: 480px) and (max-width: 799px)').matches) {
            $("#top").show();
        };
    };

    // ** NAV SHOW AND HIDE CODE ** //

    $(".toggle").click(() => {
        $(".menu").slideToggle(400, "linear");
    });

    // ** CALL TO FUNCTIONS ** //

    showHideButton();
    $(window).resize(onResizeShowHideButton);
    
});