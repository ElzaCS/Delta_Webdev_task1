var list = document.createElement('ul');
var info = document.createElement('p');
var food = document.getElementById('food');
var carb = document.getElementById('carb');
var fat = document.getElementById('fat');
var pro = document.getElementById('pro');
var add = document.querySelector('.add');
var sum = document.querySelector('.sum');
var totcal = document.querySelector('.totcal');
var moral = document.querySelector('.moral');
var moral2 = document.querySelector('.moral2');
var moral3 = document.querySelector('.moral3');
var moral4 = document.querySelector('.moral4');
var alert1 = document.querySelector('.alert1');
var alert2 = document.querySelector('.alert2');
var alert3 = document.querySelector('.alert3');

add.addEventListener("click",insert); 

document.body.appendChild(info);
document.body.appendChild(list);
var tot=0;
var c=0;
var p=0;
var f=0;
var alert="";
var total=0;
sessionStorage.c=0;
  	sessionStorage.f=0;
  	sessionStorage.p=0;
  	sessionStorage.total=0;
  
function insert() {
	var carb = document.getElementById('carb');
	var fat = document.getElementById('fat');
	var pro = document.getElementById('pro');
	var gBmr = document.getElementById('gBmr');
  var listItem = document.createElement('li');

  listItem.textContent = food.value;

  	sessionStorage.c = Number(sessionStorage.c)+Number(carb.value);
  	sessionStorage.f = Number(sessionStorage.f)+Number(fat.value);
	sessionStorage.p = Number(sessionStorage.p)+Number(pro.value);  
  
  	tot=Number(tot)+(4*Number(carb.value)) +(9*Number(fat.value))+(4*Number(pro.value));
  	sessionStorage.total = Number(sessionStorage.total)+Number(tot);

	list.appendChild(listItem);
	totcal.textContent="Total Calories= "+Number(tot);
	  var j=prompt(gBmr.value,Number(tot));
	if (Number(tot)>Number(gBmr.value))
		alert3.textContent="You are exceeding your BMR!!!";
}

sum.addEventListener("click",summary);
var tott=0;
function summary() {
	var mor= "Distribution of energy: ";
	var c_tx=""+(4*Number(sessionStorage.c))+"calories from carbs";
	var f_tx=""+(9*Number(sessionStorage.f))+"calories from fats";
	var p_tx=""+(4*Number(sessionStorage.p))+"calories from proteins";
	moral.textContent=mor+c_tx+" , "+p_tx+" , "+f_tx;
	tott=Number(tott)+(4*Number(sessionStorage.c))+(9*Number(sessionStorage.f))+(4*Number(sessionStorage.p));

	var cp=(4*Number(sessionStorage.c)*100)/Number(tott);
	moral2.textContent=Math.round(cp)+"% of your calories are from carbohydrates. "+"Between 45 and 65 percent of the calories in your diet need to come from carbohydrates.";
	if (Math.round(cp)<45)
		alert1.textContent="You need more carbohydrates to satisfy your minimum calorie requirements!"
	else if (Math.round(cp)>65)
		alert1.textContent="You need less carbohydrates to satisfy your maximum calorie requirements!"
	else
		alert1.textContent="Your carbohydrates intake is within the required healthy range!"
	
	var fp=(9*Number(sessionStorage.f)*100)/Number(tott);
	moral3.textContent=Math.round(fp)+"% of your calories are from fats. "+"14% of their calories need to from fat.";
	if (Math.round(fp)<14)
		alert2.textContent="You need more fats to satisfy your minimum calorie requirements!"
	else if (Math.round(fp)>14)
		alert2.textContent="You need to reduce fat intake to satisfy your maximum calorie requirements!"
	else
		alert2.textContent="Your fats intake is within the required healthy range!"
}

