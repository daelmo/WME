function setHide(){
	var sel = document.getElementById("prop_selection");
	var value = sel.options[sel.selectedIndex].value;
	document.getElementById("c"+value).style.visibility="collapse";	
}

function setShow(){
	var sel = document.getElementById("prop_selection");
	var value = sel.options[sel.selectedIndex].value;
	document.getElementById("c"+value).style.visibility="visible";
}