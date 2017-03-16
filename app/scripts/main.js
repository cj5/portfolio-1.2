$('.lines-button').click(function() {
    $(this).toggleClass("close");
    $('.menu').toggleClass("open");           
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