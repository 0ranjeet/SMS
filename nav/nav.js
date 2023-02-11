const addStudentButton = document.querySelector(".add-student-button");
const addStudentForm = document.querySelector(".add-student-form");

addStudentButton.addEventListener("click", function() {
addStudentForm.style.display = "block";
});

// toggle add teacher form
const addTeacherButton = document.querySelector(".add-teacher-button");
const addTeacherForm = document.querySelector(".add-teacher-form");

addTeacherButton.addEventListener("click", function() {
addTeacherForm.style.display = "block";
});

// toggle add class form
const addClassButton = document.querySelector(".add-class-button");
const addClassForm = document.querySelector(".add-class-form");

addClassButton.addEventListener("click", function() {
addClassForm.style.display = "block";
});

// cancel button
const cancelButton = document.querySelectorAll(".cancel-button");

cancelButton.forEach(function(button) {
button.addEventListener("click", function() {
this.parentElement.style.display = "none";
});
});
// Add active class to current link



//nav

const burgerToggle = document.querySelector('.menu');
if (burgerToggle) {
  burgerToggle.onclick = toggleMenu;
}


function toggleMenu () {
    
document.querySelector('#show').classList.toggle('show');
document.querySelector('.hamburger').classList.toggle('close');
document.querySelector('#students').classList.toggle('close');
};