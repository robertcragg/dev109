function isValid() {
  if (firstName() && lastName() && userEmail() && userPhone() && userName() && userPassword() && userAddress() && userCity() && userState() && userCountry() && userZip()) {
    return true;
  }
  else {
    document.getElementById("submit-error").innerHTML = "<p><strong>Error Submitting Form — See Below</strong></p>";
    event.preventDefault();
    return false;
  }
}


function firstName() {
  //1) Create variable
  var validFirstName = false;

  //2) read value from HTML
  var fname = document.getElementById("fname").value;

  //3) Do validation
  if (fname === "null" || fname === "" || fname.length > 20) {
    document.getElementById("fname-error").innerHTML = "<p>Required Field: 20 chars. max</p>";
    console.log("First name invalid — length")
  }
  else if (fname.match("^[a-zA-Z]+$") === null) {
    document.getElementById("fname-error").innerHTML = "Invalid character: Alpha chars. only</p>";
    console.log("First name invalid — bad characters")
  }
  else {
    validFirstName = true;
    document.getElementById("fname-error").innerHTML = "";
    console.log("First name valid")
  };

  //4) return status of each field
  return (validFirstName);
}


function lastName() {
  //1) Create variable
  var validLastName = false;

  //2) read value from HTML
  var lname = document.getElementById("lname").value;

  //3) Do validation
  if (lname === "null" || lname === "" || lname.length > 50) {
    document.getElementById("lname-error").innerHTML = "<p>Required Field: 50 chars. max</p>";
    console.log("Last name invalid — length")
  }
  else if (lname.match("^[a-zA-Z]+$") === null) {
    document.getElementById("lname-error").innerHTML = "Invalid Character: Alpha chars. only</p>";
    console.log("Last name invalid — bad characters")
  }
  else {
    validLastName = true;
    document.getElementById("lname-error").innerHTML = "";
    console.log("Last name valid")
  };

  //4) return status of each field
  return (validLastName);
}


function userEmail() {
  //1) Create variables
  var validEmail = false;

  //2) read value from HTML
  var email = document.getElementById("email").value;
  
  //3) Create index for validation
  var atpos = email.indexOf("@");
  var dotpos = email.lastIndexOf(".");

  //4) Do validation
  if (email === "null" || email === "") {
    document.getElementById("email-error").innerHTML = "<p>Required Field</p>";
    console.log("Email invalid — blank")
  }
  else if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= email.length) {
    document.getElementById("email-error").innerHTML = "<p>Invalid Email Format</p>";
    console.log("Email invalid — bad format")
  }
  else {
    validEmail = true;
    document.getElementById("email-error").innerHTML = "";
    console.log("Email valid")
  };

  //5) return status of each field
  return (validEmail);
}

function userPhone() {
  //1) Create variables
  var validPhone = false;

  //2) read value from HTML
  var phone = document.getElementById("phone").value;

  //4) Do validation
  if (phone === "null" || phone === "" || phone.length > 15) {
    document.getElementById("phone-error").innerHTML = "<p>Required Field: 15 chars. max</p>";
    console.log("Phone invalid — blank")
  }
  else if (phone.match("^[0-9]+$") === null) {
    document.getElementById("phone-error").innerHTML = "<p>Invalid Phone: Numeric chars. only</p>";
    console.log("Phone invalid — bad characters")
  }
  else {
    validPhone = true;
    document.getElementById("phone-error").innerHTML = "";
    console.log("Phone valid")
  };

  //5) return status of each field
  return (validPhone);
}


function userName() {
  //1) Create variable
  var validUserName = false;

  //2) read value from HTML
  var username = document.getElementById("username").value;

  //3) Do validation
  if (username === "null" || username === "" || username.length > 12) {
    document.getElementById("username-error").innerHTML = "<p>Required Field: 12 chars. max</p>";
    console.log("Username invalid — length")
  }
  else if (username.match("^[a-zA-Z]+$") === null) {
    document.getElementById("username-error").innerHTML = "Invalid character: Alpha chars. only</p>";
    console.log("Username invalid — bad characters")
  }
  else {
    validUserName = true;
    document.getElementById("username-error").innerHTML = "";
    console.log("Username valid")
  };

  //4) return status of each field
  return (validUserName);
}

//NEED TO FIX VALIDATION BEFORE SUBMITAL!!!!
function userPassword() {
  //1) Create variable
  var validPassword = false;

  //2) read value from HTML
  var password = document.getElementById("password").value;

  //3) Do validation
  if (password === "null" || password === "" || password.length > 7) {
    document.getElementById("password-error").innerHTML = "<p>Required Field: 7 chars. max</p>";
    console.log("Password invalid — length")
  }
  else if (password.match("^[a-zA-Z]+$") === null) {
    document.getElementById("username-error").innerHTML = "Invalid character: Alpha chars. only</p>";
    console.log("Password invalid — bad characters")
  }
  else {
    validPassword = true;
    document.getElementById("password-error").innerHTML = "";
    console.log("Password valid")
  };

  //4) return status of each field
  return (validPassword);
}


function userAddress() {
  //1) Create variable
  var validAddress = false;

  //2) read value from HTML
  var address = document.getElementById("address").value;

  //3) Do validation
  if (address === "null" || address === "") {
    document.getElementById("address-error").innerHTML = "<p>Required Field</p>";
    console.log("Address invalid — blank")
  }
  else {
    validAddress = true;
    document.getElementById("address-error").innerHTML = "";
    console.log("Address valid")
  };

  //4) return status of each field
  return (validAddress);
}


function userCity() {
  //1) Create variable
  var validCity = false;

  //2) read value from HTML
  var city = document.getElementById("address").value;

  //3) Do validation
  if (city === "null" || city === "") {
    document.getElementById("city-error").innerHTML = "<p>Required Field</p>";
    console.log("City invalid — blank")
  }
  else {
    validCity = true;
    document.getElementById("city-error").innerHTML = "";
    console.log("City valid")
  };

  //4) return status of each field
  return (validCity);
}
