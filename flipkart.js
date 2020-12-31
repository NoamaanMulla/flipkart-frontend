let anime = document.querySelector('.carousel figure');
let left = document.querySelector('.main_carousel_left_arrow');
let right = document.querySelector('.main_carousel_right_arrow');
let step = 0;

function animate() {
  if (step > -600) {
      anime.style.transform = 'translateX('+ step +'vw)';
    } else {
      anime.style.transform = 'transformX(100vw)';
      step = 100;
  }
}

setInterval(function () {
   step = step - 100;
   animate();
}, 5000);

right.onclick = function() {
  step = step - 100;
  animate(); 
}

left.onclick = function() {
  step = step + 100;
  animate();
}

// let next = [
//     document.querySelectorAll('.item_carousel_right_arrow')[0],
//     document.querySelectorAll('.item_carousel_right_arrow')[1],
//     document.querySelectorAll('.item_carousel_right_arrow')[2],
//     document.querySelectorAll('.item_carousel_right_arrow')[3],
//     document.querySelectorAll('.item_carousel_right_arrow')[4]
// ]
// let previous = [
//     document.querySelectorAll('.item_carousel_left_arrow')[0],
//     document.querySelectorAll('.item_carousel_left_arrow')[1],
//     document.querySelectorAll('.item_carousel_left_arrow')[2],
//     document.querySelectorAll('.item_carousel_left_arrow')[3],
//     document.querySelectorAll('.item_carousel_left_arrow')[4]
// ]

// previous.forEach(element => {
//     element.style.display = 'none';
// });

// next[0].onclick = function() {
//     document.querySelectorAll('.shop_items')[0].style.transform = 'translateX(-44vw)';
//     next[0].style.display = 'none';
//     previous[0].style.display = 'inline-block';
// }

// previous[0].onclick = function() {
//     document.querySelectorAll('.shop_items')[0].style.transform = 'translateX(0vw)';
//     previous[0].style.display = 'none';
//     next[0].style.display = 'inline-block';
// }

// next[1].onclick = function() {
//     document.querySelectorAll('.shop_items')[1].style.transform = 'translateX(-27vw)';
//     next[1].style.display = 'none';
//     previous[1].style.display = 'inline-block';
// }

// previous[1].onclick = function() {
//     document.querySelectorAll('.shop_items')[1].style.transform = 'translateX(0vw)';
//     previous[1].style.display = 'none';
//     next[1].style.display = 'inline-block';
// }

// next[2].onclick = function() {
//     document.querySelectorAll('.shop_items')[2].style.transform = 'translateX(-27vw)';
//     next[2].style.display = 'none';
//     previous[2].style.display = 'inline-block';
// }

// previous[2].onclick = function() {
//     document.querySelectorAll('.shop_items')[2].style.transform = 'translateX(0vw)';
//     previous[2].style.display = 'none';
//     next[2].style.display = 'inline-block';
// }

// next[3].onclick = function() {
//     document.querySelectorAll('.shop_items')[3].style.transform = 'translateX(-27vw)';
//     next[3].style.display = 'none';
//     previous[3].style.display = 'inline-block';
// }

// previous[3].onclick = function() {
//     document.querySelectorAll('.shop_items')[3].style.transform = 'translateX(0vw)';
//     previous[3].style.display = 'none';
//     next[3].style.display = 'inline-block';
// }

// next[4].onclick = function() {
//     document.querySelectorAll('.shop_items')[4].style.transform = 'translateX(-27vw)';
//     next[4].style.display = 'none';
//     previous[4].style.display = 'inline-block';
// }

// previous[4].onclick = function() {
//     document.querySelectorAll('.shop_items')[4].style.transform = 'translateX(0vw)';
//     previous[4].style.display = 'none';
//     next[4].style.display = 'inline-block';
// }