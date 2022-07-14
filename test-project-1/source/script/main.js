//открытие и закрытие гамбургер меню
var mainNav = document.querySelector('.main-nav');
var toggle    =    document.querySelector('.main-nav__toggle');

mainNav.classList.remove('main-nav--nojs');
toggle.addEventListener('click' , function() {
	if (mainNav.classList.contains('main-nav--closed')){
		mainNav.classList.remove('main-nav--closed');
		mainNav.classList.add('main-nav--opened');
	}else{
		mainNav.classList.add('main-nav--closed');
		mainNav.classList.remove('main-nav--opened');
	}
});

//модалное окно
var modalEl = document.querySelector('.modal');
var loginEl = document.querySelector('.user-list__link');
var closeButton = document.querySelector('.modal__close');

document.addEventListener('click', function (event) {
	if (event.target === loginEl || event.target.classList.contains('user-list__login-icon')) {
		modalEl.classList.add('modal__open');
	}
	if (event.target === closeButton) {
		modalEl.classList.remove('modal__open');	
	}
})