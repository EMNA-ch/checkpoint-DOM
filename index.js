var buttons = document.querySelectorAll('.btn-cont button');
var deleteBtn = document.querySelectorAll('.fas.fa-trash-alt');
var heartBtn = document.querySelectorAll('.fas.fa-heart');

function counter(event) {
  var btn = event.target;
  let quantity = btn.parentElement.querySelector('p');
  if (btn.innerHTML === '+') {
    quantity.innerHTML = Number(quantity.innerHTML) + 1;
  } else if (btn.innerHTML === '-' && Number(quantity.innerHTML) > 0) {
    quantity.innerHTML = Number(quantity.innerHTML) - 1;
  }
  var price =
    btn.parentElement.parentElement.parentElement.querySelector('.price');
  var unitPrice =
    btn.parentElement.parentElement.parentElement.querySelector('.unitPrice');
  price.innerHTML = Number(unitPrice.innerHTML) * Number(quantity.innerHTML);
  calcTotal();
}

function calcTotal() {
  var prices = document.querySelectorAll('.price');
  var total = 0;

  for (let i = 0; i < prices.length; i++) {
    total += Number(prices[i].innerHTML);
  }
  var total2 = document.querySelector('#total');

  total2.innerHTML = total;
}

function deleteProduct(e) {
  e.target.closest('tr').remove();
  calcTotal();
}
function changeColorHeart(e) {
  console.log(e.target.style);

  if (e.target.style.color == 'red') {
    e.target.style.color = '';
  } else {
    e.target.style.color = 'red';
  }
}

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', counter);
}

for (let i = 0; i < deleteBtn.length; i++) {
  deleteBtn[i].addEventListener('click', deleteProduct);
}
for (let i = 0; i < heartBtn.length; i++) {
  heartBtn[i].addEventListener('click', changeColorHeart);
}
