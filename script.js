$(function(){
  $('.page-list-item').hover(
    function(){
      $(this).find('a').css('color','#333')

    },
    function(){
      $(this).find('a').css('color','white')
    }
  );

  $('.travel-link').hover(
    function(){
      $('.travelpic' , this).fadeIn()
      $(this).css('width','200%')
      $('a' , this).css('color','rgba(255, 255, 255, 1)')
    },
    function(){
      $('.travelpic' , this).fadeOut()
      $(this).css('width','100%')
      $('a' , this).css('color','#333')
    }
  );

})

