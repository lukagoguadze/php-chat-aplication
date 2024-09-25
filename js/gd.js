    window.getFriends=async function (){
        fetch("../home/getFriends.php")
            .then(response => response.json())
            .then(data => {
                let userList = document.querySelector(".users-list");
                    userList.innerHTML = ''; 
                    if(data.result){
                       document.querySelector(".users-list").innerHTML+=`<p class="start-friends">${data.result}</p>`;
                    }else{
                data.forEach(user => {
                    if(user.user_image != null){
                        if(user.status_code==1){
                            let userButton = `
                            <button class="select-button" value="${user.user_id}">
                                <div class="select-user">
                                <div class="active">
                                    <img src="../images/${user.user_image}" alt="">
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
                                    <img src="../images/${user.user_image}" alt="">
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
                                    <img src="../images/l.jpeg" alt="">
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
                                    <img src="../images/l.jpeg" alt="">
                                    <p>${user.user_name} ${user.user_lastname}</p>
                                    </div>

                            </button>
                            `;
                            userList.innerHTML += userButton;
                        }

                    }

                });
                ////////ho
                const width = window.innerWidth;
                if(width>630){
                    document.querySelector(".main-list").style.width='35%';
                    document.querySelector(".chat-container").style.display='flex';
                    document.querySelector(".main-list").style.display='block';
                    document.querySelectorAll(".select-button").forEach(button => {
                        button.addEventListener("click", function () {
                            document.querySelector(".chat").innerHTML = "";
                            let receiverId = this.value;
                            console.log("first!")
                            fechUser(data,receiverId)
                        });
                    });
                }else{
                    document.querySelector(".chat-container").style.display='none';
                    document.querySelector(".main-list").style.width='100%';
                    document.querySelectorAll(".select-button").forEach(button => {
                        button.addEventListener("click", function () {
                            document.querySelector(".main-list").style.display='none';
                            document.querySelector(".chat").innerHTML = "";
                            let receiverId = this.value;
                            console.log("second!")
                            fechUser(data,receiverId);
                        });
                    });
                }
             
            }
            });
    }

    window.pollFriends=function(){
        clearInterval(getFriends.interval);
        getFriends.interval = setInterval(() => {
          getFriends();
        },5000)
    }