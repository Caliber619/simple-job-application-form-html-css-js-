// function validateForm(){
//     var firtname = document.getElementById('firstname').value;
//     var lastname = document.getElementById('lastname').value;
//     var email = document.getElementById('email').value;
//     var role = document.getElementById('role').value;
//     var address = document.getElementById('address').value;
//     var city = document.getElementById('city').value;
//     var pincode = document.getElementById('pincode').value;
//     var date = document.getElementById('date').value;
//     var cvfile = document.getElementById('cvfile').value;

//     var errorMessage = document.getElementById('error-message');

//     //check if fields are empty
//     if (firstname == ''){
//         alert("First Name must be filled");
//         return false;
//     }


// }
// function validateForm(){
// var name = document.forms.myForm.firstname.value;
// var name = document.forms.myForm.lastname.value;
// var email =document.forms.myForm.email.value;
// var phone =document.forms.myForm.role.value;
// var what = document.forms.myForm.address.value;
// var password =document.forms.myForm.city.value;
// var address = document.forms.myForm.pincode.value;
// var date = document.forms.RegForm.date.value;
// var cvfile = document.forms.RegForm.cvfile.value;

// //Javascript reGex for Email Validation.
// var regEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;  
// // Javascript reGex for Phone Number validation.
// var regPhone=/^\d{10}$/;                        
// // Javascript reGex for Name validation
// var regName = /\d+$/g; 


// //conditions
// if (firstname == "" || regName.test(firstname)) {
//     window.alert("Please enter your name properly.");
//     name.focus();
//     return false;
// }

// }


// try 2nd

// function validateForm() {
//     var firstName = document.getElementById("first_name").value;
//     var lastName = document.getElementById("last_name").value;
//     var email = document.getElementById("email").value;
//     var jobRole = document.getElementById("job_role").value;
//     var address = document.getElementById("address").value;
//     var city = document.getElementById("city").value;
//     var pincode = document.getElementById("pincode").value;
//     var date = document.getElementById("date").value;
//     var cv = document.getElementById("upload").value;
  
//     if (
//         firstName === "" ||
//         lastName === "" ||
//         email === "" ||
//         jobRole === "" ||
//         address === "" ||
//         city === "" ||
//         pincode === "" ||
//         date === "" ||
//         cv === ""
//       ) {
//         alert("Please fill in all fields.");
//         return false;
//       }
      
//       var emailRegex = /^\S+@\S+\.\S+$/;
//       if (!emailRegex.test(email)) {
//         alert("Please enter a valid email address.");
//         return false;
//       }
//       var pincodeRegex = /^\d{6}$/;
//       if (!pincodeRegex.test(pincode)) {
//         alert("Please enter a valid pincode.");
//         return false;
//       }
//       alert("Form submitted successfully!");
//       return true;
//     }


// 3rd try (WORKED :))

// function validateform() {
//     var firstName = document.getElementById("first_name").value;
//     var lastName = document.getElementById("last_name").value;
//     var email = document.getElementById("email").value;
//     var jobRole = document.getElementById("job_role").value;
//     var address = document.getElementById("address").value;
//     var city = document.getElementById("city").value;
//     var pincode = document.getElementById("pincode").value;
//     var date = document.getElementById("date").value;
//     var upload = document.getElementById("upload").value;
  
//     if (
//       firstName === "" ||
//       lastName === "" ||
//       email === "" ||
//       jobRole === "" ||
//       address === "" ||
//       city === "" ||
//       pincode === "" ||
//       date === "" ||
//       upload === ""
//     ) {
//       alert("Please fill in all the required fields.");
//       return false;
//     }
  
//     return true; // Form is valid, continue with form submission
//   }



//4TH TRY (IMPROVED)
function validateform() {
    var firstName = document.getElementById("first_name").value;
    var lastName = document.getElementById("last_name").value;
    var email = document.getElementById("email").value;
    var jobRole = document.getElementById("job_role").value;
    var address = document.getElementById("address").value;
    var city = document.getElementById("city").value;
    var pincode = document.getElementById("pincode").value;
    var date = document.getElementById("date").value;
    var upload = document.getElementById("upload").value;
  
    // Clear existing error messages
    clearErrorMessages();
  
    // Validate each field
    if (firstName === "") {
      displayErrorMessage("Please fill in the First Name field.", "first_name");
    }
    if (lastName === "") {
      displayErrorMessage("Please fill in the Last Name field.", "last_name");
    }
    if (email === "") {
      displayErrorMessage("Please fill in the Email field.", "email");
    }
    if (jobRole === "") {
      displayErrorMessage("Please select a Job Role.", "job_role");
    }
    if (address === "") {
      displayErrorMessage("Please fill in the Address field.", "address");
    }
    if (city === "") {
      displayErrorMessage("Please fill in the City field.", "city");
    }
    if (pincode === "") {
      displayErrorMessage("Please fill in the Pincode field.", "pincode");
    }
    if (date === "") {
      displayErrorMessage("Please select a Date.", "date");
    }
    if (upload === "") {
      displayErrorMessage("Please upload your CV.", "upload");
    }
  
    // Check if any errors were displayed
    var errorMessages = document.querySelectorAll(".error-message");
    if (errorMessages.length > 0) {
      return false; // Form is not valid, prevent submission
    }
  
    return true; // Form is valid, continue with form submission
  }
  
  function displayErrorMessage(message, fieldId) {
    var field = document.getElementById(fieldId);
    var errorMessage = document.createElement("div");
    errorMessage.className = "error-message";
    errorMessage.textContent = message;
  
    // Insert the error message below the field
    field.parentNode.appendChild(errorMessage);
  }
  
  function clearErrorMessages() {
    var errorMessages = document.querySelectorAll(".error-message");
    errorMessages.forEach(function (errorMessage) {
      errorMessage.parentNode.removeChild(errorMessage);
    });
  }