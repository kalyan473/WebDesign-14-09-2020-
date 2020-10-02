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
getJson("./Data/dynamicdata.json").then(d=>{
	console.log(d);
	t_details(d.details);
	 // t_career(d.career);
	 //d_trainees(d.trainees);
	 d_traneecoolleges(d.traineescolleges);
})
var main=document.querySelector("#main-div");
var child=document.createElement("div");
child.classList.add("child");
var h1=document.createElement("h1");
h1.textContent="";
child.appendChild(h1);
main.appendChild(child);

var	t_details=(a)=>{
	var image=document.createElement("img");
	image.src=a.image;
	image.alt="bootstrap-image";
	image.setAttribute("id","image");
	child.appendChild(image);
var n=document.createElement("h1");
n.textContent = a.name;
n.setAttribute("id","name1");
child.appendChild(n);

var n1=document.createElement("h3");
n1.textContent = a.designation;
n1.setAttribute("id","name1");
child.appendChild(n1);

var n2=document.createElement("h3");
n2.textContent = a.profskills;
n2.setAttribute("id","name2");
child.appendChild(n2);

var s1=document.createElement("div");
s1.textContent = a.skill1;
s1.setAttribute("id","skill");
child.appendChild(s1);

var s2=document.createElement("div");
s2.textContent = a.skill2;
s2.setAttribute("id","skill");
child.appendChild(s2);

var s3=document.createElement("div");
s3.textContent = a.skill3;
s3.setAttribute("id","skill");
child.appendChild(s3);

var n3=document.createElement("h3");
n3.textContent = a.persskills;
n3.setAttribute("id","name2");
child.appendChild(n3);


var ul=document.createElement("ul");
for (var i = 0;i< a.skills.length; i++) {

	var li=document.createElement("li");
	li.textContent=a.skills[i];
	ul.appendChild(li);
}
child.appendChild(ul);
}

/*var	t_career=(clg)=>{
	var child=document.createElement("div");
child.classList.add("child1");

main.appendChild(child);
	var n=document.createElement("h2");
n.textContent = clg.careerobj;
// n.setAttribute("id","name1");
child.appendChild(n);

var n1=document.createElement("p");
n1.textContent = clg.desc;
// n.setAttribute("id","name1");
child.appendChild(n1);

var table=document.createElement("table");
var row="";
for(var i in clg){
	row +="<tr><td>"+clg[i].college+"</td><td>"+clg[i].schl+"</td><td>"+clg[i].qualn+"</td><td>"+clg[i].grade+"</td></td>"+clg[i].durn+"</td></tr>";
}
// here for table textcontent will return code written. so innerHTML will accept the tags in table and it's reccommended.
table.innerHTML=row;
child.appendChild(table);

}
*/var d_traneecoolleges=(clg)=>{
var child=document.createElement("div");
child.classList.add("child1");
var h1=document.createElement("h2");
h1.textContent="Career Objective:";
child.appendChild(h1);
var p=document.createElement("p");
p.textContent="To be associated with a dynamic and progressive organization that will allow me to utilize my abilities and qualifications in the field to add value to the organization while providing me with opportunities for growth.";

child.appendChild(p);

main.appendChild(child);
var h1=document.createElement("h2");
h1.textContent="Education:";
child.appendChild(h1);

var table=document.createElement("table");
var row1="";
for(var i in clg){
	row1 +="<tr><td>"+clg[i].college+"</td><td>"+clg[i].schl+"</td><td>"+clg[i].qualn+"</td><td>"+clg[i].durn+"</td></tr>";
}
// here for table textcontent will return code written. so innerHTML will accept the tags in table and it's reccommended.

table.innerHTML=row1;
table.setAttribute("id","table1");
child.appendChild(table);
var h1=document.createElement("h2");
h1.textContent="Contact Details:";
child.appendChild(h1);

var n1=document.createElement("div");
n1.textContent="Phone:  9550472483  Email:   saikalyan2233@gmailcom";
 n1.setAttribute("id","Cont1");
 child.appendChild(n1);
 var n2=document.createElement("div");
 n2.textContent="Github:  	https://github.com/kalyan473";
 n2.setAttribute("id","Cont1");
 child.appendChild(n2);



}

