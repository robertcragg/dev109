const formBlur = document.getElementById("contactForm");

formBlur.addEventListener(
  "focus",
  (event) => {
    event.target.style.background = "#D4D3D3"
  },
  true,
);

formBlur.addEventListener(
  "blur",
  (event) => {
    event.target.style.background = "";
  },
  true,
);

function isValid() {
  if (firstName() && lastName() && userEmail() && userComment()) {
    return true;
  }
  else {
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
    document.getElementById("fname-error").innerHTML = "<p>Invalid character: Alpha chars. only</p>";
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
    document.getElementById("lname-error").innerHTML = "<p>Invalid Character: Alpha chars. only</p>";
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

function userComment() {
  //1) Create variables
  var validComment = false;

  //2) read value from HTML
  var comment = document.getElementById("comment").value;

  //3) Do validation
  if (comment === "null" || comment === "") {
    document.getElementById("comment-error").innerHTML = "<p>Required Field</p>";
    console.log("Comment invalid — blank")
  }
  else {
    validComment = true;
    document.getElementById("comment-error").innerHTML = "";
    console.log("Comment valid")
  };

  //5) return status of each field
  return (validComment);
}
