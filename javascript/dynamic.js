// document.write("dynamic Page")
// XMLHttpRequest(AJAX CALL)

// function getJson(file,callback){
	// we can use the abpve line as function like before or below arrow method
/*	var getJson=(file,callback)=>{
var xhr_req = new XMLHttpRequest()
xhr_req.overrideMimeType("application/json");
xhr_req.open("GET",file,true);
//xhr_req.onreadystatechange=function(){
// we can use the abpve line as function like before or below arrow method
xhr_req.onreadystatechange=()=>{
	// we have taken 4 here doubt check the training folder screenshot
	if(xhr_req.readyState===4 && xhr_req.status===200){
		callback(xhr_req.responseText);
	}
}
xhr_req.send();
}
*/
//passing data to function
// getJson("./Data/dynamicdata.json",function(text){ 
	// we can use the abpve line as function like before or below arrow method
/*getJson("./Data/dynamicdata.json",(text)=>{
var d=JSON.parse(text);	
console.log(d);
t_details(d.details);
d_trainees(d.trainees);
d_traneecoolleges(d.traineescolleges);
})
*/
//fetch and promises api

var getJson=(file)=>{
	return new Promise((resolve,reject)=>{
		return fetch(file).then(response=>{
			if(response.ok){
				resolve(response.json());
			}else{
				reject(new Error("error"))
			}
		})
	})

}
getJson("./Data/dynamicdataorg.json").then(d=>{
	console.log(d);
	t_details(d.details);
	d_trainees(d.trainees);
	d_traneecoolleges(d.traineescolleges);
})



var main=document.querySelector("#parent-div");
var child=document.createElement("div");
// child.textContent="Details of training program";
child.classList.add("child");
var h1=document.createElement("h1");
h1.textContent="Details of training program";
child.appendChild(h1);
main.appendChild(child);

// function t_details(a){
	//using arrow method
var	t_details=(a)=>{
	var image=document.createElement("img");
	image.src=a.image;
	image.alt="bootstrap-image";
	child.appendChild(image);
var n=document.createElement("h1");
n.textContent = a.name;
n.setAttribute("id","name");
child.appendChild(n);

var n1=document.createElement("h1");
n1.textContent = a.attendedcount;
n1.setAttribute("id","attendedcount");
child.appendChild(n1);

var h2=document.createElement("h1");
h2.textContent="Content of Training program";
child.appendChild(h2);
h2.appendChild(document.createElement("hr"));

var ul=document.createElement("ol");
for (var i = 0;i< a.content.length; i++) {

	var li=document.createElement("li");
	li.textContent=a.content[i];
	ul.appendChild(li);
}
child.appendChild(ul);
}
 var d_trainees=(r)=>{
	var child=document.createElement("div");
child.classList.add("child");
var h1=document.createElement("h1");
h1.textContent="Details of trainees";
h1.appendChild(document.createElement("hr"));
child.appendChild(h1);
main.appendChild(child);
for(var i in r){

	var h1=document.createElement("h1");
	h1.textContent=r[i].name;
	child.appendChild(h1);
	var p=document.createElement("p");
	p.textContent=r[i].email;
	child.appendChild(p);
	var ul=document.createElement("ul");
	for(var j in r[i].courses){
var li= document.createElement("li");
li.textContent=r[i].courses[j];
	ul.appendChild(li);
	}
	child.appendChild(ul);

 }
}

var d_traneecoolleges=(clg)=>{
var child=document.createElement("div");
child.classList.add("child");
var h1=document.createElement("h1");
h1.textContent="Details of trainee Colleges";
h1.appendChild(document.createElement("hr"));
child.appendChild(h1);
main.appendChild(child);

var table=document.createElement("table");
var row="";
for(var i in clg){
	row +="<tr><td>"+clg[i].college+"</td><td>"+clg[i].count+"</td><td>"+clg[i].district+"</td><td>"+clg[i].grade+"</td></tr>";
}
// here for table textcontent will return code written. so innerHTML will accept the tags in table and it's reccommended.
table.innerHTML=row;
child.appendChild(table);
}