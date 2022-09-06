
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
	
	var texto = /^[A-Za-z]+$/; //expresion regular para validar que solo hay letras (de la A a la Z mayusculas y minusculas)
	if(fName.value.length < 3){
		error++;
		errorName.style.display = "inline-block";
	}

	else if(!fName.value.match(texto)){  //! se sirve para negar , en este caso la negacion es "si NO hace esto"... hace error
		error++;
		errorName.innerHTML = "The name can't contain numbers or special characters";
		errorName.style.display = "inline-block";
	}

	var valideEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	if(fEmail.value.length < 3){
		error++;
		errorEmail.style.display = "inline-block";
	}

	else if(!fEmail.value.match(valideEmail)){
		error++;
		errorEmail.innerHTML = "The Email doesn't exist";
		errorEmail.style.display = "inline-block";
	}

	var validarPassword = /^[A-Za-z]|[0-9]$/;  //expresion regular para validar que contiene Numeros y letras.

	if(fPassword.value.match(validarPassword)){
		error++;
		errorPassword.innerHTML = "The Password must have letters and numbers";
		errorPassword.style.display = "inline-block";
	}

	if(fPhone.value.length < 3){
		error++;
		errorPhone.style.display = "inline-block";
	}

	if(fAddress.value.length < 3){
		error++;
		errorAddress.style.display = "inline-block";
	}

	if(fLastN.value.length < 3){
		error++;
		errorLastN.style.display = "inline-block";
	}

	else if(!fLastN.value.match(texto)){  //! se sirve para negar , en este caso la negacion es "si NO hace esto"... hace error
		error++;
		errorLastN.innerHTML = "The name can't contain numbers or special characters"
		errorLastN.style.display = "inline-block";
	}
	 
	if(error>0){
		return false;
	}else{
		alert("OK");
	}


}

//mirar error en cleancart (cuando el carrito no existe)
