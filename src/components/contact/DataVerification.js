

function DataVerification (){

let form = document.getElementById("reserve");

// to validate the Guest name
let customerName = document.getElementById("guestName");

	if (customerName.validity.valueMissing) {
		customerName.setCustomValidity("Please enter your name");
	} else {
		customerName.setCustomValidity("");
	}


// validate email address
let emailValue = document.getElementById("guestEmail").value;

    let customerEmail = document.getElementById("guestEmail");
	if (customerEmail.validity.valueMissing) {
		customerEmail.setCustomValidity("Please enter your email address");
	} else if (!(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/.test(emailValue))) {
		customerEmail.setCustomValidity("Please enter your email in the right form");

	} else {
		customerEmail.setCustomValidity("");
	}



if (form.checkValidity()) window.alert("Thank you for your feedback!");

}

export default DataVerification



