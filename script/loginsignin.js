const url = localStorage.getItem("api");
const parent = document.querySelector("back");
function signupfun() {
  document.querySelector("#ubody").style.display = "block";
  if (parent) {
    parent.classList.add("blur");
  }
  var sign = document.createElement("div")
  sign.setAttribute("id", "signbox");



  var s = document.createElement("h3")
  s.innerText = "Sign in "
  var email = document.createElement("input")
  email.setAttribute("class", "signbox_input")
  email.placeholder = "email Address*"
  email.setAttribute("id", "email")
  var pswrd = document.createElement("input")
  pswrd.setAttribute("class", "signbox_input")
  pswrd.placeholder = "Password*"
  pswrd.type = "password"
  pswrd.setAttribute("id", "pswrd")
  var keep = document.createElement("div")
  keep.setAttribute("id", "keep")
  var lkeep = document.createElement("div")
  lkeep.setAttribute("id", "lkeep")



  var rkeep = document.createElement("h4")
  rkeep.setAttribute("id", "rkeep")
  rkeep.innerText = "Forgot password?"
  rkeep.addEventListener("click", forget)
  var signin = document.createElement("p")
  signin.setAttribute("id", "create")
  signin.innerText = "Sign In"
  signin.addEventListener("click", signinf)




  sign.append(s, email, pswrd, keep, signin)
  keep.append(lkeep, rkeep)
  lkeep.append()
  document.querySelector("#ubody").append(sign)


}
function forget() {

}



function signinf() {

  document.querySelector("#ubody").style.display = "block";
  if (parent) {
    parent.classList.add("blur");
  }

  indata = {
    email: document.querySelector("#email").value,
    password: document.querySelector("#pswrd").value,
  }
   console.log(indata)
  if (indata.email == "" || indata.password == "") {
    alert("create an account")

    document.getElementById("alert-container").classList.add("alert");

  } else if ((indata.email != "") && (indata.password != "")) {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify(indata);

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch(`${url}/api/v1/common/login`, requestOptions)
      .then(response => response.json())
      .then(result => {
        if (result.code == 200) {
          var val = result.authentication_token;
          localStorage.setItem("token", val)
          localStorage.setItem("keepSignedIn","in")
          alert("log in succsesfull")
          document.querySelector("#ubody").style.display = "none";
          document.querySelector("#ubody").style.filter = "none";
          document.querySelector("#ubody").style.webkitFilter = "none";
          document.querySelector("#signbox").remove();
          document.querySelector("#ubody").style.display = "none";
          if (parent) {
            parent.classList.remove("blur");
          }
        }
      })
      .catch(error => console.log('error', error));
  } else {
    alert("user doesnot exist!")
    document.getElementById("alert-container").classList.add("alert");
    document.querySelector("#ubody").style.display = "block";
    parent.classList.add("blur");
    joinfun();
  }


  // document.querySelector("#sign").innerText=userdata.username;
}
function joinfun() {
  document.querySelector("#ubody").style.display = "block";
  if (parent) {
    parent.classList.add("blur");
  }

  var userdata = {
    username: document.querySelector("#first").value,
    email: document.querySelector("#email").value,
    password: document.querySelector("#pwd").value,
  }

  alert("Sign up Succesfull go for login ")
  document.getElementById("alert-container").classList.add("alert");
  signupfun();
  document.querySelector("#signbox").remove();
  localStorage.setItem("userdata", JSON.stringify(userdata))
}

if (!localStorage.getItem("keepSignedIn")){
  signupfun();
}


/* JavaScript for closing the signup box */

// Set the timeout for 1 day (24 hour x 60 minutes x 60 seconds)
var timeout = 24 * 60 * 60 * 1000;

// Start the timer when the user signs in
setTimeout(signOut, timeout);

function signOut() {
  // Code to sign out the user

  localStorage.removeItem("keepSignedIn");
  alert("You have been signed out due to inactivity.");
  document.getElementById("alert-container").classList.add("alert");
  // Redirect to the sign in
  signupfun();
}

