const body = document.querySelector('body');
const colorBody = document.querySelectorAll('.color__body');
const itemsB = document.querySelectorAll('.color__item');
const items = document.querySelectorAll('.item');



colorBody.forEach(item => {
     const color = item.getAttribute('color')

     item.addEventListener('click', () => {
          body.style.background = color
     })

})

itemsB.forEach(item => {
     const colorIt = item.getAttribute('colorIt')
     console.log(colorIt);
console.log(item);

     item.addEventListener('click', () => {
          items.forEach(el => {
               el.style.background = colorIt
          })
     })

})