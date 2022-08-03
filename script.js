const hex = document.querySelector('#hex-code'),
   btn = document.querySelector('.btn');

let body = document.getElementsByTagName('body');


function changeColor() {
   let arraySymhol = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
   let hexResult = '';


   for (let i = 0; i < 6; i++) {
      hexResult += `${arraySymhol[Math.floor(Math.random() * arraySymhol.length)]}`;
      hex.textContent = hexResult;
      document.body.style.backgroundColor = `#${hexResult}`;

   }
}

btn.addEventListener('click', () => {
   changeColor();
});
