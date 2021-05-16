$(document).ready(function () {

  // typing name hero animation
  var i = -1;
  var txt = 'Yunus Febriansyah'; /* The text */
  var speed = 200; /* The speed/duration of the effect in milliseconds */
  function typeWriter() {
    if ( i == -1 ){
      setTimeout(typeWriter, 2000);
      i = 0;
    }else{
      if (i < txt.length) {
        document.getElementById("name").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
      }
    }
  }
  typeWriter();


  // hero animation
  $('.hero-text').addClass('show');
  $('.col-image-hero').addClass('show');


  $(document).scroll(function () { 
    
    // navbar animation
    if( $(document).scrollTop() >= $('#about').offset().top - 30 ){
      $('.navbar.fixed-top').removeClass('d-none');
    }else{
      $('.navbar.fixed-top').addClass('d-none');
    }


    // about animation
    if( $(document).scrollTop() >= $('#about').offset().top - 100 ){
      $('.about-l').addClass('show');
      $('.about-r').addClass('show');
    }

    // skills animation
    if( $(document).scrollTop() >= $('#skills').offset().top - 100 ){
      $('.skills-l').addClass('show');
      $('.skills-r').addClass('show');
      $('.skills-r .progress-bar').addClass('show');
    }

    
    
  });
  
});