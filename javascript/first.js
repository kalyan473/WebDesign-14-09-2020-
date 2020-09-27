
// creating objects

// 

// for loop for object

// for (var i = 0; i < details.courses.length; i++) {
// 	document.writeln(details.courses[i]+"<br>")
// }
// document.write(details.name,"<br>");

// for-in loop 

var a = "Apssdc React";
for(var i in a){
	document.writeln(a[i]+"<br>");
}


// for (var i in details){
// 	document.write(details[i]+"<br>")
// }

// for of loop we use can only strings,arrays not the objects

// for (var i of details.courses){
// 	document.writeln(i);
// }
var s = "123456"

for (var i of s){
	document.write(i+"<br>");
}

// user defined functions
function add(){
	var details={
	name:"Bonagiri Sai Kalyan",
	email:"saikalyan2233@gmail.com",
	experience:"Learning new technologies",
	courses:["webdesign using reactjs","C",""]
}
for (var i in details){
	document.write(details[i]+"<br>")
}
}
add();

function Change(){
/*	var b=document.getElementById("para").innerHTML="helloooo";*/
	var b=document.getElementById("para");
	b.textContent="hello";
}

//Arrow function
/*
function sai(a,b){
	alert(a+b);
}
sai(99,1);
*/
var sai=(a,b)=>{
alert(a-b);
}

sai(20,5);
//if function without param's the below
/*()=>{

}
*/
//difference between var,let,const

var r=10;
{
	var r=20;
	document.write(r,"<br>");
}
document.write(r,"<br>");

let r1=10;
{
	let r1=20;
	document.write(r1,"<br>");
}
document.write(r1,"<br>");

const r2=10;
{
	const r2=20;
	document.write(r2,"<br>");
}
document.write(r2,"<br>");