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
  oneElement.style.color = '#E1670E'
  oneBlock.style.display = 'flex';
  twoBlock.style.display = 'none';
  twoElement.style.color = '#333333'
  threeBlock.style.display = 'none';
  threeElement.style.color = '#333333'
  fourBlock.style.display = 'none';
  fourElement.style.color = '#333333'
});

twoElement.addEventListener('click', function() {
  oneBlock.style.display = 'none';
  oneElement.style.color = '#333333'
  twoBlock.style.display = 'block';
  twoElement.style.color = '#E1670E'
  twoBlock.style.display = 'flex';
  threeBlock.style.display = 'none';
  threeElement.style.color = '#333333'
  fourBlock.style.display = 'none';
  fourElement.style.color = '#333333'
});

threeElement.addEventListener('click', function() {
  oneBlock.style.display = 'none';
  oneElement.style.color = '#333333'
  twoBlock.style.display = 'none';
  twoElement.style.color = '#333333'
  threeBlock.style.display = 'block';
  threeElement.style.color = '#E1670E'
  threeBlock.style.display = 'flex';
  fourBlock.style.display = 'none';
  fourElement.style.color = '#333333'
});

fourElement.addEventListener('click', function() {
  oneBlock.style.display = 'none';
  oneElement.style.color = '#333333'
  twoBlock.style.display = 'none';
  twoElement.style.color = '#333333'
  threeBlock.style.display = 'none';
  threeElement.style.color = '#333333'
  fourBlock.style.display = 'block';
  fourElement.style.color = '#E1670E'
  fourBlock.style.display = 'flex';
});


let headerSvg = document.querySelector('.header__nav__svg');
let headerNavContainer = document.querySelector('.header__nav__container')
let headerContainerSvgClose = document.querySelector('.header__container__svg-close')

headerSvg.addEventListener('click', function(){
  headerNavContainer.style.display = 'block';
  headerNavContainer.style.display = 'flex';
});

headerContainerSvgClose.addEventListener('click', function(){
  headerNavContainer.style.display = 'none';
});


let questionListItems = document.querySelectorAll('.question__list-items');
let questionItemsDescription = document.querySelectorAll('.question__items-description');
let questionItemsSvg = document.querySelectorAll('.question__items__svg');

let oneListItems = questionListItems[0];
let twoListItems = questionListItems[1];
let threeListItems = questionListItems[2];
let fourListItems = questionListItems[3];
let fiveListItems = questionListItems[4];

let oneItemsDescription = questionItemsDescription[0];
let twoItemsDescription = questionItemsDescription[1];
let threeItemsDescription = questionItemsDescription[2];
let fourItemsDescription = questionItemsDescription[3];
let fiveItemsDescription = questionItemsDescription[4];


let oneItemsSvg = questionItemsSvg[0];
let twoItemsSvg = questionItemsSvg[1];
let threeItemsSvg = questionItemsSvg[2];
let fourItemsSvg = questionItemsSvg[3];
let fiveItemsSvg = questionItemsSvg[4];

let isSlideVisible = false;
let isSlideVisible2 = false;
let isSlideVisible3 = false;
let isSlideVisible4 = false;
let isSlideVisible5 = false;


oneListItems.addEventListener('click', function(){
  if(!isSlideVisible) {
    oneItemsDescription.style.display = 'block';
    oneItemsSvg.style.transform = 'rotate(45deg)';
    isSlideVisible = true;
  }
  else{
    oneItemsDescription.style.display = 'none';
    oneItemsSvg.style.transform = 'rotate(90deg)';
    isSlideVisible = false;
  }
});

twoListItems.addEventListener('click', function(){
  if(!isSlideVisible2) {
    twoItemsDescription.style.display = 'block';
    twoItemsSvg.style.transform = 'rotate(45deg)';
    isSlideVisible2 = true;
  }
  else{
    twoItemsDescription.style.display = 'none';
    twoItemsSvg.style.transform = 'rotate(90deg)';
    isSlideVisible2 = false;
  }
});

threeListItems.addEventListener('click', function(){
  if(!isSlideVisible3) {
    threeItemsDescription.style.display = 'block';
    threeItemsSvg.style.transform = 'rotate(45deg)';
    isSlideVisible3 = true;
  }
  else{
    threeItemsDescription.style.display = 'none';
    threeItemsSvg.style.transform = 'rotate(90deg)';
    isSlideVisible3 = false;
  }
});

fourListItems.addEventListener('click', function(){
  if(!isSlideVisible4) {
    fourItemsDescription.style.display = 'block';
    fourItemsSvg.style.transform = 'rotate(45deg)';
    isSlideVisible4 = true;
  }
  else{
    fourItemsDescription.style.display = 'none';
    fourItemsSvg.style.transform = 'rotate(90deg)';
    isSlideVisible4 = false;
  }
});

fiveListItems.addEventListener('click', function(){
  if(!isSlideVisible5) {
    fiveItemsDescription.style.display = 'block';
    fiveItemsSvg.style.transform = 'rotate(45deg)';
    isSlideVisible5 = true;
  }
  else{
    fiveItemsDescription.style.display = 'none';
    fiveItemsSvg.style.transform = 'rotate(90deg)';
    isSlideVisible5 = false;
  }
});