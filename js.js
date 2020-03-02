let slider = document.querySelectorAll('.content_img');
let row = document.querySelector('.row');
let rowEnd = document.querySelector('.row_end');
let body = document.querySelector('body');


for (i = 0; i < slider.length; i++) {
  slider[i].onclick = () => {
    row.classList.remove('row_none');
    body.classList.add('noscroll')
  }
}
rowEnd.onclick = () => {
  row.classList.add('row_none');
}

// When the user clicks anywhere outside of the modal, close it
row.onclick = function (event) {
  if (event.target == row) {
    row.classList.add('row_none');
    body.classList.remove('noscroll')
  }
}

document.querySelectorAll('');




