const sidebar = document.querySelector('.sidebar');
let sidebar_items=document.querySelector(".sidebar-profile");
document.addEventListener('DOMContentLoaded', function() {
    sidebar.style.display = 'none'; 
});

function toggleSidebar() {
    if (sidebar.style.display === 'none') {
        document.querySelector(".users-list").style.display='none';
        sidebar.style.display = 'block';
        sidebar_items.innerHTML=`
            <li><button onclick=\"openProfileModal()\" class="open-profile"><p>Profile</p><i class="fa-solid fa-user"></i></button></li>
            <li><button type="button" class="btn btn-secondary change-password" onclick=\"openPasswordModal()\">change password<i class="fa-solid fa-key"></i></button></li>
           <li> 
                <div class="dropdown">
                    <button onclick="myFunction()" class="dropbtn">chat color  <i class="fa-solid fa-fill-drip" style="color: white;"></i></button>
                    <form action="<?php htmlspecialchars($_SERVER["PHP_SELF"]) ?>" method="POST">
                    <dropdown id="myDropdown" class="dropdown-content">
                        <button name="color" value="white"  class="selected-color">White</button>
                        <button name="color" value="black" class="selected-color">Black</button>
                        <button name="color" value="red" class="selected-color">Red</button>
                    </dropdown>
                    </form>
                </div>
                
            </li>
            <li><button type="button" class="btn btn-secondary open-profile" onclick="window.location.href='../auth/logOut.php'">Logout <i class="fa-solid fa-right-from-bracket"></i></button></li>
        `;
    } else {
        sidebar.style.display = 'none';
        document.querySelector(".users-list").style.display='block';
    }
}





function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }