function validateForm() {
    let fnameInput = document.forms.myForm.fname.value;
    let lnameInput = document.forms.myForm.lname.value;
    let emailInput = document.forms.myForm.email.value;
    let phoneInput = document.forms.myForm.phone.value;
    let passwordInput = document.forms.myForm.password.value;
    let cpasswordInput = document.forms.myForm.cpassword.value;
    if (fnameInput == "" || lnameInput == ""|| emailInput == "" || phoneInput == "" || passwordInput == ""|| cpasswordInput == ""){
      alert("Form is invalid, must be filled out")
      return false;
    }
  }