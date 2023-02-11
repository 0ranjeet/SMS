function navimp(){
    return `
    <nav>
    <a href="#">School<span>Name</span></a>
    <div class="menu">
      <div class="hamburger"></div>
    </div>
    <ul id="show">
      <li><a href="#" class='active'>Home</a></li>
      <li><a href="#students">Students</a></li>
      <li><a href="#teachers">Teachers</a></li>
      <li><a href="#classes">Classes</a></li>
      <li><a  id="profile" href="./profile/profile.html"><div id="profile">
        <i style="font-weight: 900;font-size: 25px;" class="fa-regular fa-user"></i>
      </div></a></li>

    </ul>
</nav>
    `;
}
function footimp(){
    return `
    
    `
}
export {navimp,footimp}