/* Main-nav js */

var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('.main-nav--nojs');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-nav--closed')
  ) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});

/* popup js*/

var modalSucces = document.querySelector('.modal-succes');
var findButton = document.querySelector('.item-emotions__button');
var shutDownBtn = document.querySelector('.modal__button');

findButton.addEventListener('click', function () {
  if (modalSucces.classList.contains('modal-succes--closed')) {
    modalSucces.classList.remove('modal-succes--closed');
    modalSucces.classList.add('modal-succes--opened');
  }
  if (modalSucces.classList.contains('modal-succes--opened')) {
    shutDownBtn.addEventListener('click', function () {
      modalSucces.classList.remove('modal-succes--opened');
      modalSucces.classList.add('modal-succes--closed');
    });
    /* modalSucces.classList.remove('modal-succes--opened');
    modalSucces.classList.add('modal-succes--closed'); */
  }
});
