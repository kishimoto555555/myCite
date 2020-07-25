$(function() {
$('.faq-list-item').click(function() {
    var $answer = $(this).find('.answer');
    if($answer.hasClass('open')) { 
      $answer.removeClass('open');
      
      $answer.slideUp();
      
    } else {
      $answer.addClass('open'); 

    $answer.slideDown();
      
    }
  });

  $('.change-btn').click(function() {
    
    var $displaySlide = $('.active');
    
    
    $displaySlide.removeClass('active');
    
    if($(this).hasClass('next-btn')){
      $displaySlide.next().addClass('active');
    }else{
      $displaySlide.prev().addClass('active');
    }
    

     
     var slideIndex = $('.hobbySinger').index($('.active'));
    
    
    $('.change-btn').show();
    
    
    if(slideIndex==0){
      $('.prev-btn').hide();
    }else if(slideIndex==3){
      $('.next-btn').hide();
    }
  });
  $('.nav_toggle').click(function () {
    $('.nav_toggle, .nav').toggleClass('show');
    $('#overlay').fadeIn();
});

});