function addm(){
  const api= localStorage.getItem("api");
  var d=new Date();
  c=d.getFullYear()+'-'+d.getMonth()+'-'+d.getDate();
  console.log(c)
  idata={
    email: document.querySelector('#remail').value,
    phone: document.querySelector('#phone').value,
    password: document.querySelector('#password').value,
    createdOn: c,
    accountStatus: "active",
    role: "admin"
  }
  console.log(idata)
  var token=localStorage.getItem("token")
  var myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer ${token}`);
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify(idata);

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch(`${api}/api/v1/admin/register`, requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
}