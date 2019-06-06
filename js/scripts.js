$(document).ready(function () {
  console.log('Jquery is working');
  $('#submit').click(function (event) {
    event.preventDefault();
    console.log('Click Event is working');
    var puke = parseInt($('input:radio[name=puke]:checked').val());
    var height = parseInt($('#height').val());
    if (height >= 33 && height <= 48) {
      $('.adultrow').hide();
      $('.middlerow').hide(); {
        if (puke === 3) {
          $('.tea').hide();
          $('.elephant').hide();
        } else if (puke === 2) {
          $('.tea').hide();
        } else {
          console.log('Rides all the things');
        };
      }
    } else if (height >= 49 && height <= 60) {
      $('.adultrow').hide();
      $('.kidrow').hide(); {
        if (puke === 3) {
          $('.inversion').hide();
          $('.mako').hide();
        } else if (puke === 2) {
          $('.inversion').hide();
        } else {
          console.log('Rides all the things');
        };
      }
    } else if (height >= 61 && height <= 84) {
      $('.kidrow').hide(); {
        if (puke === 3) {
          $('.inversion').hide();
          $('.mako').hide();
          $('.hulk').hide();
          $('.park').hide();
        } else if (puke === 2) {
          $('.hulk').hide();
          $('.inversion').hide();
        } else {
          console.log('Rides all the things');
        };
      }
    } else {
      $('.kidrow').hide();
      $('.middlerow').hide();
      $('.adultrow').hide();
      $('.elserow').removeclass();
      console.log('else condition is working');
    }
  });
});
