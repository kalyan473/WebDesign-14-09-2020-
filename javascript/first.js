
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

//example for class
class Square{
	constructor(height,width){
		this.h=height;
		this.w=width;
	}
}
var a=new Square("40cm","40cm");
document.write(a.h);
document.write(a.w);

//spread parameter(...parametername)(only 3 dots)
const array1=[1,2,3];
const array2=[...array1];
array2.push(4,5,6,7);
document.write("<br>"+array2+"<br>");
//here we are getting copy of the array1 to array2
//Destructure of Elements
var n=["sai","kalyan","manu","akshitha"];
var [name1,name2,name3,name4]=n;
document.write(name3+"<br>");
//Interpolation:

var n=[4,6,3,6,3,5];
var m=`i have the number ${n}`;
document.write(m);

/*var n1=~i am 

kalyan~;
document.write(n1);*/