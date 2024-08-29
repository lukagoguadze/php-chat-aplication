window.getFriends=function (){
    fetch("../home/getFriends.php")
        .then(response => response.json())
        .then(data => {
            let sidebar=document.querySelector(".sidebar-profile");
            let userList = document.querySelector(".users-list");
                sidebar.innerHTML = ''; 
                userList.innerHTML = ''; 
            data.forEach(user => {
                if(user.user_image != null){
                    if(user.status_code==1){
                        let userButton = `
                        <button class="select-button" value="${user.user_id}">
                            <div class="select-user">
                            <div class="active">
                                <img src="../image/${user.user_image}" alt="">
                                <div class="s"></div>
                                </div>
                                <p>${user.user_name} ${user.user_lastname}</p>
                            </div>
                         </button>
                         `;
                          userList.innerHTML += userButton;
                    }else{
                        let userButton = `
                        <button class="select-button" value="${user.user_id}">
                            <div class="select-user">
                            <div class="active">
                                <img src="../image/${user.user_image}" alt="">
                                </div>
                                <p>${user.user_name} ${user.user_lastname}</p>
                            </div>
                        </button>
                       `;
                         userList.innerHTML += userButton;

                    }
            
                
                }else{
                    if(user.status_code==1){
                        let userButton = `
                        <button class="select-button" value="${user.user_id}">
                            <div class="select-user">
                              <div class="active">
                                <img src="../image/an.webp" alt="">
                                <div class="s"></div>
                                </div>
                                <p>${user.user_name} ${user.user_lastname}</p>
                            </div>
                        </button>
                        `;
                        userList.innerHTML += userButton;
                    }else{
                        let userButton = `
                        <button class="select-button" value="${user.user_id}">
                            <div class="select-user">
                                <img src="../image/an.webp" alt="">
                                <p>${user.user_name} ${user.user_lastname}</p>
                                </div>

                        </button>
                        `;
                        userList.innerHTML += userButton;
                    }

                }

                // document.querySelector(".chat").innerHTML = `<h1 class="j">Chat Aplication</h1>`;
            });
            
            sidebar.innerHTML=`
            <li><button onclick=\"openProfileModal()\" class="open-profile"><p>Profile</p><i class="fa-solid fa-user"></i></button></li>
            <li><button type="button" class="btn btn-secondary change-password" onclick=\"openPasswordModal()\">change password<i class="fa-solid fa-key"></i></button></li>
            <li><button type="button" class="btn btn-secondary open-profile" onclick="window.location.href='../auth/logOut.php'">Logout <i class="fa-solid fa-right-from-bracket"></i></button></li>
        `;
            document.querySelectorAll(".select-button").forEach(button => {
                button.addEventListener("click", function () {
                    document.querySelector(".chat").innerHTML = "";
                    let receiverId = this.value;
                    fechUser(data,receiverId)
                });
            });
        });
}

window.pollFriends=function(){
    console.log("jigo");
    clearInterval(getFriends.interval);
    getFriends.interval = setInterval(() => {
      getFriends();
    },5000)
}