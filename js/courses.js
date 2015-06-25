$(document).on('click', '.show-school-courses', function(e) {
    bootbox.dialog({
        title: "Universitetskurser",
        message: $('.courses').html(),
        onEscape: function() {
            console.log("Escape!");
        },
        backdrop: true
    });
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

    //use that min-width is changed on media query
    if ($(".left-pane").css("min-width") == "100%") {
        $(".even .right-pane").moveUp();

        $('.fa-li').removeClass('fa-2x');
    }

    //reversed when making window larger
    if ($(".left-pane").css("min-width") != "100%") {
        $(".even .right-pane").moveDown();

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

function fadeBlocksIn() {
    $('.fadeInBlock').each(function(i) {

        var bottom_of_object = $(this).position().top + $(this).outerHeight();
        var bottom_of_window = $(window).scrollTop() + $(window).height();

        /* Adjust the "200" to either have a delay or that the content starts fading a bit before you reach it  */
        bottom_of_window = bottom_of_window + 250;

        if (bottom_of_window > bottom_of_object) {

            $(this).animate({
                'opacity': '1'
            }, 900);

        }
    });
};

$(function() {
    fadeBlocksIn();

    $(window).scroll(function() {
        fadeBlocksIn();
    });
});