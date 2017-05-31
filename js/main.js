$('.main-header').sticky({
  getWidthFrom: '.wrapper',
  responsiveWidth: true,
});

$('.main-header').on('sticky-start', function () {
  $('.title').html('Once Review, Code Better!');
});

$('.main-header').on('sticky-end', function () {
  $('.title').html('the code review');
});
