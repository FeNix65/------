let howItemsStepsLinks = document.querySelectorAll('.how__items-steps__links');
let howListItems = document.querySelectorAll('.how__list-items');

let oneElement = howItemsStepsLinks[0];
let twoElement = howItemsStepsLinks[1];
let threeElement = howItemsStepsLinks[2];
let fourElement = howItemsStepsLinks[3];

let oneBlock = howListItems[0];
let twoBlock = howListItems[1];
let threeBlock = howListItems[2];
let fourBlock = howListItems[3];


oneElement.addEventListener('click', function() {
  oneBlock.style.display = 'block';
  twoBlock.style.display = 'none';
  threeBlock.style.display = 'none';
  fourBlock.style.display = 'none';
});

twoElement.addEventListener('click', function() {
  oneBlock.style.display = 'none';
  twoBlock.style.display = 'block';
  twoBlock.style.display = 'flex';
  threeBlock.style.display = 'none';
  fourBlock.style.display = 'none';
});

threeElement.addEventListener('click', function() {
  oneBlock.style.display = 'none';
  twoBlock.style.display = 'none';
  threeBlock.style.display = 'block';
  threeBlock.style.display = 'flex';
  fourBlock.style.display = 'none';
});

fourElement.addEventListener('click', function() {
  oneBlock.style.display = 'none';
  twoBlock.style.display = 'none';
  threeBlock.style.display = 'none';
  fourBlock.style.display = 'block';
  fourBlock.style.display = 'flex';
});

let headerSvg = document.querySelector('.header__svg');