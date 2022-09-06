
// Exercise 6
function validate() {
	var error = 0;
	// Get the input fields
	var fName = document.getElementById("fName");
	var fEmail = document.getElementById("fEmail");
	var fPassword = document.getElementById("fPassword");
	var fPhone = document.getElementById("fPhone");
	var fAddress = document.getElementById("fAddress");
	var fLastN = document.getElementById("fLastN");
	

	// Get the error elements
	var errorName = document.getElementById("errorName");
	var errorEmail = document.getElementById("errorEmail");  
	var errorPassword = document.getElementById("errorPassword");  
	var errorPhone = document.getElementById("errorPhone");
	var errorAddress = document.getElementById("errorAddress");
	var errorLastN = document.getElementById("errorLastN");
	
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

	if(fAddress.value == ""){
		error++;
		errorAddress.style.display = "inline-block";
	}

	if(fLastN.value == ""){
		error++;
		errorLastN.style.display = "inline-block";
	}
	 
	if(error>0){
		return false;
	}else{
		alert("OK");
	}


}

//mirar error en cleancart (cuando el carrito no existe)
