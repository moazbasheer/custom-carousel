let NumCarousel = 8;
let time = 10;
let currentItem = 0;
let random = Math.floor(Math.random() * 100) % 10 + 10;
console.log(random);
let item = document.querySelector(".carousel-container");
let counter = 0;
item.style.transition = `${3.0 / random}s`;
let interval = setInterval(function() {
  counter ++;
  if(counter == random) {
    clearInterval(interval);
  }
  currentItem ++;
    if(currentItem == NumCarousel) {
      currentItem = 0;
      item.style.transition = 0;
      item.style.transform = `translateY(0)`; 
  } else {
     item.style.transform = `translateY(${-300*(currentItem)}px)`;
  }

}, 3.0 / random * 1000);
