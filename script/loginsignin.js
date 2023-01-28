const parent = document.querySelector("back");
function signupfun(){
  document.querySelector("#ubody").style.display = "block";
  parent.classList.add("blur");
  var sign=document.createElement("div")
  sign.setAttribute("id","signbox");

  var close=document.createElement("h1")
  close.setAttribute("id","close")
  close.innerText="X"
  close.addEventListener("click",closefun)
  function closefun(){
    document.querySelector("#ubody").style.display = "none";
  document.querySelector("#ubody").style.filter = "none";
  document.querySelector("#ubody").style.webkitFilter = "none";
   document.querySelector("#signbox").remove();
   document.querySelector("#ubody").style.display = "none";
   parent.classList.remove("blur");
  }
  var s=document.createElement("h3")
  s.innerText="Sign in "
  var email=document.createElement("input")
  email.setAttribute("class","signbox_input")
  email.placeholder="email Address*"
  email.setAttribute("id","email")
  var pswrd=document.createElement("input")
  pswrd.setAttribute("class","signbox_input")
  pswrd.placeholder="Password*"
  pswrd.type="password"
  pswrd.setAttribute("id","pswrd")
  var keep=document.createElement("div")
  keep.setAttribute("id","keep")
  var lkeep=document.createElement("div")
  lkeep.setAttribute("id","lkeep")
 
  var info=document.createElement("i")
  info.setAttribute("class","fa-solid fa-circle-info")
  
  var rkeep=document.createElement("h4")
  rkeep.setAttribute("id","rkeep")
  rkeep.innerText="Forgot password?"

  var signin=document.createElement("p")
  signin.setAttribute("id","create")
  signin.innerText="Sign In"
  signin.addEventListener("click",signinf)
  
  signin.setAttribute("id","signbox_signin")
  var line=document.createElement("hr")
  line.setAttribute("id","line")
  var newto=document.createElement("h3")
  newto.innerText="New here"
  var create=document.createElement("p")
  create.setAttribute("id","create")
  create.innerText="Create Account"
  create.addEventListener("click",createfun)
  

  sign.append(close,s,email,pswrd,keep,signin,line,newto,create)
  keep.append(lkeep,rkeep)
  lkeep.append(info)
  document.querySelector("#ubody").append(sign)


}
function createfun(){
  document.querySelector("#ubody").style.display = "block";
  parent.classList.add("blur");
  document.querySelector("#signbox").innerHTML="";
  var close=document.createElement("h1")
  close.setAttribute("id","close")
  close.innerText="X"
  close.addEventListener("click",closefun)
  function closefun(){
    document.querySelector("#ubody").style.display = "none";
  document.querySelector("#ubody").style.filter = "none";
  document.querySelector("#ubody").style.webkitFilter = "none";
   document.querySelector("#signbox").remove();
   document.querySelector("#ubody").style.display = "none";
   parent.classList.remove("blur");
  }
  var createa=document.createElement("h2")
  createa.innerText="Create an Account";
  var hr=document.createElement("hr")
  
  var name=document.createElement("div")
  
  var first=document.createElement("input")
  first.placeholder="First Name"
  first.setAttribute("id","first")
  first.setAttribute("class","signbox_input")
  var last=document.createElement("input")
  last.setAttribute("class","signbox_input")

  last.placeholder="Last Name"
  name.append(first,last)

  var email=document.createElement("input")
  email.setAttribute("class","signbox_input")
  email.setAttribute("id","email")
  email.placeholder="Email Address"
var pwd=document.createElement("input")
pwd.placeholder="Password (6 to12 charcters)"
pwd.setAttribute("class","signbox_input")
pwd.setAttribute("id","pwd")
pwd.type="password"

var phn=document.createElement("input")
phn.placeholder="Phone Number (optional)"
phn.setAttribute("class","signbox_input")

var birthday=document.createElement("div")
birthday.setAttribute("id","birthday")

var gift=document.createElement("span")
gift.innerText="D.O.B"
birthday.append(gift)
var date=document.createElement("div")
date.setAttribute("id","date")
var month=document.createElement("input")
month.setAttribute("type", "date");
month.setAttribute("class","signbox_input")
month.placeholder="Month"

date.append(month)

var zip=document.createElement("input")
zip.setAttribute("class","signbox_input")

    zip.placeholder="Zip Code (to hear about store events near you)"
   
    var keep=document.createElement("div")
    keep.setAttribute("id","lkeep")
   
    var ksign=document.createElement("input")
    ksign.type="checkbox"
    ksign.setAttribute("id","check")
    var ksignin=document.createElement("h4")
    ksignin.innerText="Keep me signed in"
    var info=document.createElement("i")
    info.setAttribute("class","fa-solid fa-circle-info")

    var create=document.createElement("p")
    create.setAttribute("id","create")
    create.innerText="Join Now"
    create.addEventListener("click",joinfun)

    var hr1=document.createElement("hr")
    
keep.append(ksign,ksignin,info)
  document.querySelector("#signbox").append(close,createa,hr,name,email,pwd,phn,birthday,date,zip,keep,create,hr1)
  
}



function signinf(){
  userdata=JSON.parse(localStorage.getItem("userdata"))
  document.querySelector("#ubody").style.display = "block";
  parent.classList.add("blur");
     
      var indata={
          username:document.querySelector("#email").value,
          userpwd:document.querySelector("#pswrd").value,
      }
      if(indata===null){
          alert("create an account")
      }else if((indata.username==userdata.email)&&(indata.userpwd==userdata.password)){
          localStorage.setItem("signdat",JSON.stringify(userdata))
          alert("log in succsesfull")
          document.querySelector("#ubody").style.display = "none";
          document.querySelector("#ubody").style.filter = "none";
          document.querySelector("#ubody").style.webkitFilter = "none";
           document.querySelector("#signbox").remove();
           document.querySelector("#ubody").style.display = "none";
           parent.classList.remove("blur");
      }else{
          alert("user doesnot exist!")
          document.querySelector("#ubody").style.display = "block";
          parent.classList.add("blur");
          joinfun();
      }
      document.querySelector("#signbox").remove();
      
      document.querySelector("#sign").innerText=userdata.username;
}
function joinfun(){
  document.querySelector("#ubody").style.display = "block";
  parent.classList.add("blur");
  
      var userdata={
          username:document.querySelector("#first").value,
          email:document.querySelector("#email").value,
          password:document.querySelector("#pwd").value,
      }
     
      alert("Sign up Succesfull go for login ")
      signupfun();
      document.querySelector("#signbox").remove();
      localStorage.setItem("userdata",JSON.stringify(userdata))
    }
    window.onload=signupfun;


 
  /* JavaScript for closing the signup box */
  
  // Set the timeout for 1 hour (60 minutes x 60 seconds)
var timeout = 60 * 60 * 1000;

// Start the timer when the user signs in
setTimeout(signOut, timeout);

function signOut() {
    // Code to sign out the user
    localStorage.removeItem("keepSignedIn");
    alert("You have been signed out due to inactivity.");
    // Redirect to the sign in
   signupfun();
}

      
