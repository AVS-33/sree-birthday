// // trigger to play music in the background with sweetalert
// window.addEventListener('load', () => {
//   Swal.fire({
//       title: 'Do you want to play music in the background?',
//       icon: 'warning',
//       showCancelButton: true,
//       confirmButtonColor: '#3085d6',
//       cancelButtonColor: '#d33',
//       confirmButtonText: 'Yes',
//       cancelButtonText: 'No',
//   }).then((result) => {
//       if (result.isConfirmed) {
//           document.querySelector('.song').play();
//           animationTimeline();
//       } else {
//           animationTimeline();
//       }
//   });
// });

(function() {
  function $(id) {
    return document.getElementById(id);
  }

  var card = $('card'),
      openB = $('open'),
      closeB = $('close'),
      timer = null;
  console.log('wat', card);
  openB.addEventListener('click', function () {
    card.setAttribute('class', 'open-half');
    if (timer) clearTimeout(timer);
    timer = setTimeout(function () {
      card.setAttribute('class', 'open-fully');
      timer = null;
    }, 1000);
  });

  closeB.addEventListener('click', function () {
    card.setAttribute('class', 'close-half');
    if (timer) clearTimerout(timer);
    timer = setTimeout(function () {
      card.setAttribute('class', '');
      timer = null;
    }, 1000);
  });

}());
