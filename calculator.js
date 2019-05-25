var age = document.getElementById('age');
var height = document.getElementById('height');
var weight = document.getElementById('weight');

var story = document.querySelector('.story');


var cal = document.querySelector('.cal');
cal.addEventListener("click",result);


function result() {
	story.textContent = "";
	story.style.visibility = 'visible';
	let bmr=0;
	let a=Number(age.value);
	let h=Number(height.value);
	let w=Number(weight.value);
if (document.getElementById("Hus").checked==true)
	h=h*2.54;
if (document.getElementById("Wus").checked==true)
	w=w*0.45359237;
	
if(document.getElementById("m").checked==true) {
	bmr=(10*w)+(6.25*h)-(5*a)+5;
	story.textContent=bmr+"Kcal/day";
}
else if(document.getElementById("f").checked==true) {
	bmr=(10*w)+(6.25*h)-(5*a)-161;
	story.textContent="Your BMR is "+bmr+" Kcal/day";
}
else
	story.textContent="Please choose a gender for accurate calculation.";

}
