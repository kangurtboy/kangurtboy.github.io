var navigation = document.querySelector('.main-nav');

var toggler = document.querySelector('.main-nav__toggler');

navigation.classList.remove('main-nav--nojs');
toggler.addEventListener('click' , function () {
if(navigation.classList.contains('main-nav--closed')){
	navigation.classList.remove('main-nav--closed');
	navigation.classList.add('main-nav--opened');
}else{
	navigation.classList.add('main-nav--closed');
	navigation.classList.remove('main-nav--opened');
}
});