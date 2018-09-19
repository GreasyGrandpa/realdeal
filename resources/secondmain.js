$(document).ready(function(){ 
  $('.master').ready(function(){
    $('.master').fadeIn(1000);
  });
  $('.linkish').mouseenter(function(){
    $(this).animate({'font-size':'1.3rem'}, 500);
  });
  $('.linkish').mouseleave(function(){
    $(this).finish();
    $(this).animate({'font-size':'1rem'}, 500);
  });
});
