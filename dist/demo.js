







$(document).ready(function(){
    
 
    $('.single').slick({
    autoplay : true,
        autoplaySpeed : 5000,
      pauseOnFocus : false,
        pauseOnHover : false,
     arrows : false,
        draggable : false,
             });
  
    $('.left').click(function(){
      $('.single').slick('slickPrev');
    })

    $('.right').click(function(){
      $('.single').slick('slickNext');
    })
    
    
    
   
    $('.album').slick({
 
    autoplay : true,
        infinite : true,
      pauseOnFocus : false,
        pauseOnHover : false,
       
     arrows : false,
        draggable : true,
    centerMode :true,
  
    variableWidth: true,
      rows: 2,
       slidesPerRow : 1,
       lazyLoad :  'progressive' ,

            

    
    
    
    responsive: [{

      breakpoint: 1024,
      settings: {
         rows: 1,
        slidesPerRow : 1,
      }

    }, {

      breakpoint: 600,
      settings: {
         rows: 1,
       
      }

    }]

    
    });  

        




});





$(function () {
$.scrollUp({
scrollName: 'scrollUp', 
topDistance: '600' , 
topSpeed: 300 , 
animation: 'fade', 
animationInSpeed: 500, 
animationOutSpeed: 500, 
scrollText: '^',
activeOverlay: false, 
});
});





$(function () {
$('a').smoothScroll({
duration: 1000, 
easing: 'swing', 
offset: 0 
});
});




$(function() {
$.scrollify({
  section : ".scroll",

});


});