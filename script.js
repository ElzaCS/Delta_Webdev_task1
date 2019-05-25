var list = document.createElement('ul');
var info = document.createElement('p');
var food = document.getElementById('food');
var cal = document.getElementById('cal');
var add = document.querySelector('.add');
var totcal = document.querySelector('.totcal');


add.addEventListener("click",insert); 


document.body.appendChild(info);
document.body.appendChild(list);
var total=0;

function insert() {
  var listItem = document.createElement('li');
  listItem.textContent = food.value;
  total=total+Number(cal.value);
  list.appendChild(listItem);
  totcal.textContent="Total="+total;
}
