
// Exercise 6
function validate() {
	var error = 0;
	// Get the input fields
	var fName = document.getElementById("fName");
	var fEmail = document.getElementById("fEmail");
	var fPassword = document.getElementById("fPassword");
	var fPhone = document.getElementById("fPhone");

	// Get the error elements
	var errorName = document.getElementById("errorName");
	var errorEmail = document.getElementById("errorEmail");  
	var errorPassword = document.getElementById("errorPassword");  
	var errorPhone = document.getElementById("errorPhone");  
	
	// Validate fields entered by the user: name, phone, password, and email
	if(fName.value == ""){
		error++;
		errorName.style.display = "inline-block";
	}

	if(fEmail.value == ""){
		error++;
		errorEmail.style.display = "inline-block";
	}

	if(fPassword.value == ""){
		error++;
		errorPassword.style.display = "inline-block";
	}

	if(fPhone.value == ""){
		error++;
		errorPhone.style.display = "inline-block";
	}
	 
	if(error>0){
		alert("Error");
	}else{
		alert("OK");
	}


}

//mirar error en cleancart (cuando el carrito no existe)
