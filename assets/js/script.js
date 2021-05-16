$(document).ready(function () {
  
  $(document).scroll(function () { 
    
    if( $(document).scrollTop() >= $('#about').offset().top - 30 ){
      $('.navbar.fixed-top').removeClass('d-none');
    }else{
      $('.navbar.fixed-top').addClass('d-none');
    }

  });
  
});