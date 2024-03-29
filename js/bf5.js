let burger = document.querySelector(".burger");
let body = document.body;

//game-accordion
const gameAccordion = document.getElementsByClassName('features__list-item');

for (i = 0; i < gameAccordion.length; i++) {
  gameAccordion[i].addEventListener('click', function () {
    this.classList.toggle('active')
  })
}
Fancybox.bind("[data-fancybox]", {
  autoFocus: false,
  dragToClose: false,
  groupAttr: false
});

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

//tabs
const buttonsContainer = document.querySelector('.tabs__buttons');
const buttonItem = buttonsContainer.querySelectorAll('.tabs__button')
const tabs             = document.querySelector('.tabs__content');

buttonsContainer.addEventListener('click', event => {
  
	let index = event.target.closest('.tabs__button').dataset.value;
  let target = event.target;
  tabs.querySelector('.active').classList.remove('active');
  tabs.querySelector(`.tab--${index}`).classList.add('active');

  if (target.classList.contains('tabs__button')){
    for (let i = 0; i < buttonItem.length; i++) {
      buttonItem[i].classList.remove('active');
    }
    target.classList.add('active');
  }

});
const element = document.getElementById("image-compare");
  
const options = {

  // UI Theme Defaults

  controlColor: "#fff",
  controlShadow: false,
  addCircle: false,
  addCircleBlur: false,

  // Label Defaults

  showLabels: false,
  labelOptions: {
    before: 'Before',
    after: 'After',
    onHover: false
  },

  // Smoothing

  smoothing: true,
  smoothingAmount: 100,

  // Other options

  hoverStart: false,
  verticalMode: false,
  startingPoint: 50,
  fluidMode: false
};
  
// Add your options object as the second argument
const viewer = new ImageCompare(element, options).mount();
