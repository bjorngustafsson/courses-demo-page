$(document).on('click', '.show-school-courses', function(e){
    bootbox.dialog({
        title: "Universitetskurser",
        message: $('.courses').html(),
        onEscape: function() { console.log("Escape!"); },
        backdrop: true
    });
});




/*---------move course header pane to left on media query, use that min-width is changed on media query --------- */
$(document).ready(function() {
    // run test on initial page load
    checkSize();

    // run test on resize of the window
    $(window).resize(checkSize);
});

//Function to the css rule
function checkSize(){

    //use that min-width is changed on media query
    if ($(".left-pane").css("min-width") == "100%" ){
        console.log("fasfasd");
        $(".even .right-pane").moveUp();

        $('.fa-li').removeClass('fa-2x');
    }

    //reversed when making window larger
    if ($(".left-pane").css("min-width") != "100%" ){
        console.log("fasfasd");
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