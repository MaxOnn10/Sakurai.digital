let burger = document.querySelector(".burger");
let body = document.body;

//accordion
const accordion = document.getElementsByClassName('faq__accordion-item');

for (i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener('click', function () {
    this.classList.toggle('active')
  })
}

Fancybox.bind("[data-fancybox]", {
  autoFocus: false,
  dragToClose: false,
  groupAttr: false
});
//slider
// var splide = new Splide('.splide', {
//   cover      : false,
//   pagination : false,
//   arrows: false,
//   perPage: 2
//   // perMove: 1,
  
// });

// splide.mount();

//burger-menu
burger.addEventListener('click', function () {
  burger.classList.toggle("burger--active");
  document.querySelector(".header__menu").classList.toggle("active"),
  document.querySelector(".header__menu-list").classList.toggle("active"),
  document.querySelector(".header__menu-item").classList.toggle("active"),
  body.classList.toggle("disable-scroll");

});

document.querySelector('.header__menu-list').addEventListener("click", function () {
  document.querySelector(".header__menu").classList.remove("active"),
  document.querySelector(".header__menu-list").classList.remove("active"),
  document.querySelector(".header__menu-item").classList.remove("active"),
  body.classList.remove("disable-scroll");
});
