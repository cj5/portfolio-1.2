$(document).ready(function(){

    $('.lines-button').click(function() {
        $(this).toggleClass('close');
        $('.menu').toggleClass('open');           
    });

    var projectImageWidth = $('.projects-images img').width();
    var projectImageHeight = $('.projects-images img').height();

    $('.project-overlay').css('width', projectImageWidth);
    $('.project-overlay').css('height', projectImageHeight);
    // $('.project-overlay').css('top', - projectImageHeight - 4);

    function updateContainer() {
        
        var projectImageWidth = $('.projects-images img').width();
        var projectImageHeight = $('.projects-images img').height();

        $('.project-overlay').css('width', projectImageWidth);
        $('.project-overlay').css('height', projectImageHeight);
        // $('.project-overlay').css('top', - projectImageHeight - 4);
    }

    updateContainer();

    $(window).resize(function() {
        updateContainer();
    });
});

// $('.lines-button').click( function(){
//     if ( $(this).hasClass('close open') ) {
//         $(this).removeClass('close open');
//     } else {
//         $('lines-button.close').removeClass('close open');
//         $(this).addClass('close open');    
//     }
// });


// function draw() {
//   var ctx = (a canvas context);
//   ctx.canvas.width  = window.innerWidth;
//   ctx.canvas.height = window.innerHeight;
//   //...drawing code...
// }