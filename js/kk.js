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
                        <div id="myDropdown" class="dropdown-content"></div>
                    </div>
                </li>
                <li><button type="button" class="btn btn-secondary open-profile" onclick="window.location.href='../auth/logOut.php'">Logout <i class="fa-solid fa-right-from-bracket"></i></button></li>
            `;
            getColor();
        } else {
            sidebar.style.display = 'none';
            document.querySelector(".users-list").style.display='block';
        }
    }


    ///////DROPDOWNIS SHEVSEBA BD DAN//////////////////
    function getColor(){
        let dropdown = document.querySelector(".dropdown-content");
        fetch("../home/chatStyle.php?action=getColorName")
        .then(response => response.json())
        .then(data => {
            dropdown.innerHTML='';
            data.forEach(i => {
                let g=`<button value="${i.c_style_id}" onclick="selectStyle(${i.c_style_id})"  class="selected-color">${i.color_name} <div class="color-div" style="background-color: ${i.bk_color};"></div></button>`;
                dropdown.innerHTML+=g;
             });
                
        });
    }
    ///////////////CHAT STYLE//////////////////
    function selectStyle(colorId){
        fetch(`../home/chatStyle.php?action=getChangeStyle&color=${colorId}`)
        .then(response => response.json())
        .then(data => {
            document.querySelector(".main").style.backgroundColor = data.bk_color;
            chatStyle();
        })

    }

    /////////////DROPDOWNEBI////////////////////////////
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