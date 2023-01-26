// Show login form on page load
document.getElementById("login-form").style.display = "block";

function login() {
  // Get entered username and password
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  // Get stored signup data from localStorage
  var storedData = JSON.parse(localStorage.getItem("signupData"));

  // Validate login credentials
  if (username === storedData.username && password === storedData.password) {
    // Successful login
    console.log("Login successful!");

    // Set an auto logout timer for 1 hour
    setTimeout(function() {
      console.log("Auto logout");
      localStorage.removeItem("signupData");
      document.getElementById("login-form").style.display = "block";
    }, 3600000);
  } else {
    // Invalid login credentials
    console.log("Invalid login credentials. Please try again.");
  }
}

function redirectToSignup() {
  document.getElementById("login-form").style.display = "none";
  document.getElementById("signup-form").style.display = "block";
}

function signup() {
  // Get entered signup data
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var dob = document.getElementById("dob").value;
  var address = document.getElementById("address").value;

  // Store signup data in localStorage
  localStorage.setItem("signupData", JSON.stringify({username: username, password: password, dob: dob, address: address}));

  // Redirect to login form
  document.getElementById("signup-form").style.display = "none";
  document.getElementById("login-form").style.display = "block";
  }
