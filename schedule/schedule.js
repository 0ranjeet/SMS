fetch('/schedule/staff.json')
    .then((response) => response.json())
    .then((json) => json.forEach(e => {
      n=121;
        
       let tr= document.createElement("tr");
       let td=document.createElement("td");
       td.innerText=e.staff;
       let a=e.time;
       tr.append(td);
       a.forEach( i =>{
        n++;
        let td1=document.createElement("td");
        td1.innerText="";
        td1.setAttribute("id",`${n}addclass`);
        td1.addEventListener("click",editclass(td1));
       
        tr.append(td1)
        
       });
      
       
       
       document.querySelector("table").append(tr)
        
    }));
       
      
     function editclass(td1){
     
     td1.addEventListener("click",popb)
     
     function popb(){
      let pop=document.createElement("div");
      pop.setAttribute("id","pop");
      let forms=document.createElement("form");
      forms.setAttribute("id","form");
      forms.setAttribute("action"," ");

      let lbl=document.createElement("label");
      lbl.setAttribute("for","dropdown")
      lbl.innerText="select subject,class and section for staff"
      let classn=document.createElement("select");
      classn.setAttribute("id","dropdown");
      classn.setAttribute("name","dropdown");
      let op1=document.createElement("option");
      op1.innerText="class(1)";
      op1.setAttribute("value","class(1)")
      let op2=document.createElement("option");
      op2.innerText="class(2)";
      op2.setAttribute("value","class(2)")
      let op3=document.createElement("option");
      op3.innerText="class(3)";
      op3.setAttribute("value","class(3)")
      let sec=document.createElement("select");
      sec.setAttribute("id","dropdown0");
      sec.setAttribute("name","dropdown0");
      let op01=document.createElement("option");
      op01.innerText="Sec-A";
      op01.setAttribute("value","Sec-A")
      let op02=document.createElement("option");
      op02.innerText="Sec-B";
      op02.setAttribute("value","Sec-B")
      let op03=document.createElement("option");
      op03.innerText="Sec-C";
      op03.setAttribute("value","Sed-C")
      let sub=document.createElement("select");
      sub.setAttribute("id","dropdown1");
      sub.setAttribute("name","dropdown1");
      let opn1=document.createElement("option");
      opn1.innerText="Science";
      opn1.setAttribute("value","Science")
      let opn2=document.createElement("option");
      opn2.innerText="Math";
      opn2.setAttribute("value","Math")
      let opn3=document.createElement("option");
      opn3.innerText="English";
      opn3.setAttribute("value","English")
      let inn=document.createElement("input");
      inn.setAttribute("type","submit");
      inn.setAttribute("vlaue","Submit");
      
      
      classn.append(op1,op2,op3)
      sec.append(op01,op02,op03)
      sub.append(opn1,opn2,opn3)
     
      forms.append(lbl,classn,sec,sub,inn)
      pop.append(forms)
 
      document.querySelector("body").append(pop)
      addFormListener()
     }
     
     
     function addFormListener() {
  const form = document.querySelector("#form");
  form.addEventListener("submit", function(event) {
    event.preventDefault();
    const dropdown = document.querySelector("#dropdown");
    const dropdown1 = document.querySelector("#dropdown1");
    const dropdown0 = document.querySelector("#dropdown0");

    const selectedOption = dropdown.options[dropdown.selectedIndex].value;
    const selectedOption1 = dropdown1.options[dropdown1.selectedIndex].value;
    const selectedOption0 = dropdown0.options[dropdown0.selectedIndex].value;
    
    td1.innerText= selectedOption+"-"+selectedOption1+"-"+selectedOption0;
    document.querySelector("#pop").remove();
  });
}
     }
// Call the function after the form is added to the DOM
document.querySelector("#pop").addEventListener("click", function() {
  addFormListener();
});

