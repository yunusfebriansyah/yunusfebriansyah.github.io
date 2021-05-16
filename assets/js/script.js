$(document).ready(function () {
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
      $('.contact .alert-contact').toggleClass('d-none');
      console.log('Success!', response);
        form.reset();
      })
      .catch(error => console.error('Error!', error.message))
  })
});