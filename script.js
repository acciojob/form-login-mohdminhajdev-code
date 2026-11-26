function getFormvalue(event) {
    //Write your code here
	event.preventDefault();

	let form = document.getElementById("form1");

	let fname = form.elements["fname"].value;
	let lname = form.elements["lname"].value;

	alert(fname + " " + lname)

	
}https://www.svgrepo.com/show/345221/three-dots.svg
