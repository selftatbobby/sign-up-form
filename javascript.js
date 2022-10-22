var formSubmit = document.getElementById('form_submit');


function validatePhoneNumber(input_str) {
  var re = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;

  return re.test(input_str);
}

function validateForm() {
  let fnameInput = document.forms.myForm.fname.value;
  let lnameInput = document.forms.myForm.lname.value;
  let emailInput = document.forms.myForm.email.value;
  let phoneInput = document.forms.myForm.phone.value;
  let passwordInput = document.forms.myForm.password.value;
  let cpasswordInput = document.forms.myForm.cpassword.value;
  if (fnameInput == "" || lnameInput == "" || emailInput == "" || phoneInput == "" || passwordInput == "" || cpasswordInput == "") {
    alert("Form is invalid, must be filled out");
    return false;
  } else if (passwordInput !== cpasswordInput) {
    alert("Passwords do not match");
    document.getElementById('password_input').classList.add('invalid')
    document.getElementById('cpassword_input').classList.add('invalid')
    return false;
  } else if (!validatePhoneNumber(phoneInput)) {
    alert("Phone is invalid");
    return false;
  }
}

function clickValidate() {
  let phoneInput = document.forms.myForm.phone.value;
  let passwordInput = document.forms.myForm.password.value;
  let cpasswordInput = document.forms.myForm.cpassword.value;
  if (!validatePhoneNumber(phoneInput)) {
    document.getElementById('phone_input').classList.add('invalid');
  } else {
    document.getElementById('phone_input').classList.remove('invalid');
  }
  if (passwordInput !== cpasswordInput) {
    document.getElementById('password_input').classList.add('invalid');
    document.getElementById('cpassword_input').classList.add('invalid');
  } else { 
    document.getElementById('password_input').classList.remove('invalid');
    document.getElementById('cpassword_input').classList.remove('invalid');
  }
}