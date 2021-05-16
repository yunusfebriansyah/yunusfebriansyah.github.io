$(document).ready(function () {

  // typing name hero animation
  var i = 0;
  var txt = 'Yunus Febriansyah'; /* The text */
  var speed = 200; /* The speed/duration of the effect in milliseconds */

  function typeWriter() {
    if (i < txt.length) {
      document.getElementById("name").innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }

  typeWriter();

  $(document).scroll(function () { 
    
    // navbar animation
    if( $(document).scrollTop() >= $('#about').offset().top - 30 ){
      $('.navbar.fixed-top').removeClass('d-none');
    }else{
      $('.navbar.fixed-top').addClass('d-none');
    }

    
    
  });
  
});