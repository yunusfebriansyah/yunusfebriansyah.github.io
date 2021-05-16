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

    // porffolio animation
    if( $(document).scrollTop() >= $('#portfolio').offset().top - 100 ){
      $($('#portfolio .portfolio-item').get()).each(function(i){
        let item = $(this);
        setTimeout(function(){
          $(item).addClass('show');
        }, i*350);
      });
    }

    
    
  });


  // send contact form to google sheet
  const scriptURL = 'https://script.google.com/macros/s/AKfycbyLxZT_93GfeivE1OK6WWMdjg2H-6WB0KlD460K5bH3v6k89Vm-qfIMz-n5olbmR3qDLQ/exec';
  const form = document.forms['submit-to-google-sheet'];

  form.addEventListener('submit', e => {
    e.preventDefault();
    $('.contact .btn-loading').toggleClass('d-none');
    $('.contact .btn-send').toggleClass('d-none');
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        $('.contact .btn-loading').toggleClass('d-none');
        $('.contact .btn-send').toggleClass('d-none');
        $('.contact .alert-success-contact').toggleClass('d-none');
        form.reset();
      })
      .catch(error => {
        $('.contact .alert-danger-contact').toggleClass('d-none');
      })
  })


});