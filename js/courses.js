$(document).on('click', '.show-school-courses', function(e){
    bootbox.dialog({
        title: "Universitetskurser",
        message: $('.courses').html()
    });
});

