$(document).on('click', '.show-school-courses', function(e) {
    $(".courses").dialog("open");
    /*
    bootbox.dialog({
        title: "Universitetskurser",
        message: $('.courses').html(),
        onEscape: function() {
            console.log("Escape!");
        },
        backdrop: true
    });
    */
});

/*---------move course header pane to left on media query, use that min-width is changed on media query --------- */
$(document).ready(function() {
    // run test on initial page load
    checkSize();

    // run test on resize of the window
    $(window).resize(checkSize);

    //also run this so elements can fade in when resizing otherwise it can cause a lot of whitespace at bottom of screen
    $(window).resize(fadeBlocksIn);

});

//Function to the css rule
function checkSize() {
    console.log('min-width', $(".left-pane").css("min-width") );
    //use that min-width is changed on media query, ugly fix for now
    //IE and FF fix, since IE returns pixels instead of 100%, must use more argument in if conditions
    if ($(".left-pane").css("min-width") == "100%" || !($(".left-pane").css("min-width") == "0px")) {

        //ugly fix for FF
        if  ( !($(".left-pane").css("min-width") == "-moz-min-content")){
            console.log('moveup');
            $(".even .right-pane").moveUp();
            $('.fa-li').removeClass('fa-2x');
        }
    }

    //reversed when making window larger
    if (($(".left-pane").css("min-width") != "100%" && ($(".left-pane").css("min-width") == "0px"))
    || ($(".left-pane").css("min-width") == "-moz-min-content"))
    {
        $(".even .right-pane").moveDown();
        console.log('movedownelement');
        $('.fa-li').addClass('fa-2x');
    }

}

$.fn.moveUp = function() {
    $.each(this, function() {
        $(this).after($(this).prev());
    });
};

$.fn.moveDown = function() {
    $.each(this, function() {
        $(this).before($(this).next());
    });
};

/*--------------- END ------------- */

//Fade in any elements that has class fadeInBlock when they are visible
function fadeBlocksIn() {
    $('.fadeInBlock').each(function(i) {

        var bottom_of_object = $(this).position().top + $(this).outerHeight();
        var bottom_of_window = $(window).scrollTop() + $(window).height();

        /* Adjust the "200" to either have a delay or that the content starts fading a bit before you reach it  */
        bottom_of_window = bottom_of_window + 320;

        if (bottom_of_window > bottom_of_object) {

            $(this).animate({
                'opacity': '1'
            }, 1200);

        }
    });
};

$(function() {
    fadeBlocksIn();

    $(window).scroll(function() {
        fadeBlocksIn();
    });
});

$(function () {
    $(".courses" ).dialog({
        width: 550,
        autoOpen: false,
        show: {
            effect: "blind",
            duration: 400
        },
        hide: {
            effect: "blind",
            duration: 400
        }
    });
})