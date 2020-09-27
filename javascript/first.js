
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