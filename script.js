'use strict';

let curentIndex = 0;

const arrImage = [
  'http://vsegda-pomnim.com/uploads/posts/2022-03/1648744702_42-vsegda-pomnim-com-p-priroda-les-ozero-foto-50.jpg',
  'https://funart.pro/uploads/posts/2021-03/1617069574_32-p-oboi-priroda-tsentralnoi-rossii-34.jpg',
  'https://99px.ru/sstorage/53/2015/10/tmb_146982_7779.jpg',
  'https://mobimg.b-cdn.net/v3/fetch/7a/7a1e9634540cbb94e38f8adc46fe8daa.jpeg?w=1470&r=0.5625',
  'https://img2.akspic.ru/originals/8/9/2/2/22298-nagore-oksbou_bend-gora-priroda-otrazhenie-1920x1080.jpg'
]

//Part of Home Work

const addImages = function(arr) {
  let elem = document.querySelector('.nav');

  for(let i = 0; i < arr.length; i++) {
    elem.innerHTML += `<div class="point" onclick="goTo(${i})">`;
  }

  const element = document.querySelector('.point');
  element.classList.add('active');
}

addImages(arrImage);

//End

function slide(step) {
  console.log(step)
  if(curentIndex === 0 && step === -1) {
    curentIndex = arrImage.length - 1;
  
  }
  if (curentIndex === arrImage.length && step === 1) {
    curentIndex = -1;

  }
  curentIndex = curentIndex + step;
  frame.style.backgroundImage = `url(${arrImage[curentIndex]})`;

  activePoint()
  
}

function goTo(index) {
  console.log(index)
  curentIndex = index;
  frame.style.backgroundImage = `url(${arrImage[index]})`;

  activePoint()
}



function activePoint() {
  document.querySelector('.active').classList.remove('active');
  document.querySelectorAll('div.point')[curentIndex].classList.add('active');
}
