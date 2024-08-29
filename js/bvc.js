document.addEventListener("DOMContentLoaded", function () {
    function getSenderId() {
        return fetch("../home/getSenderId.php")
            .then(response => response.json())
            .then(data => data.id);
    }
 getSenderId().then(senderId => {
  if(senderId != null){
    document.getElementById("livesearch").style.display="none   ";
    document.querySelector(".message-input").style.display = 'none';
    document.querySelector(".reciver-info").style.display = 'none';
    document.querySelector(".chat").style.overflowY = "hidden";
    document.querySelector(".line").style.display = 'none';
    fetch("../home/getFriends.php")
        .then(response => response.json())
        .then(data => {
            let sidebar=document.querySelector(".sidebar-profile");
            let userList = document.querySelector(".users-list");
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

                document.querySelector(".chat").innerHTML = `<h1 class="j">Chat Aplication</h1>`;
            });
            sidebar.innerHTML=`
                    <li><button onclick=\"openProfileModal()\" class="open-profile"><p>Profile</p><i class="fa-solid fa-user"></i></button></li>
                    <li><button type="button" class="btn btn-secondary change-password" onclick=\"openPasswordModal()\">change password<i class="fa-solid fa-key"></i></button></li>
                    <li><button type="button" class="btn btn-secondary open-profile" onclick="window.location.href='../auth/logOut.php'">Logout <i class="fa-solid fa-right-from-bracket"></i></button></li>
                `

            document.querySelectorAll(".select-button").forEach(button => {
                button.addEventListener("click", function () {
                    document.querySelector(".chat").innerHTML = "";
                    let receiverId = this.value;
                    fechUser(data,receiverId)
                });
            });
        });

        window.showResult=function (str) {

            fetch("../home/gb.php?q="+str)
            .then(response => response.json())
            .then(data => {
              
              if(str.length==0){
                document.getElementById("livesearch").innerHTML=""; 
                document.getElementById("livesearch").style.display="none";
                document.getElementById("livesearch").style.border="0px";
                return;
              }else{
                document.getElementById("livesearch").style.display="block";
                for (let i = 0; i < data.length; i++) {
                  if(data[i].user_image!=null){
                    document.getElementById("livesearch").innerHTML+=`<button class="live-select-button" value="${data[i].user_id}"><img src='../image/${data[i].user_image}'><p class='pg'>${data[i].user_name} ${data[i].user_lastname}</p></button>`
                    selectUserFromSearch();
                  }else{
                    document.getElementById("livesearch").innerHTML+=`<button class="live-select-button" value="${data[i].user_id}"><img src='../image/an.webp'><p class='pg'>${data[i].user_name} ${data[i].user_lastname}</p></button>`
                    selectUserFromSearch();
                  }
                  document.getElementById("livesearch").style.border="1px solid #A5ACB2";
                }
              }
            })
          }
          function selectUserFromSearch(){
          document.querySelectorAll(".live-select-button").forEach(button => {
            button.addEventListener("click", function () {
                document.querySelector(".chat").innerHTML = "";
                let receiverId = this.value;
                fetch("../home/userList.php")
                .then(response => response.json())
                .then(data => {
                    fechUser(data,receiverId)
                    document.querySelector(".search-input").value="";
                    document.getElementById("livesearch").style.display="none";
                })
          })
        })
        }

    let lastMessageId = 0; 

    window.fetchMessages=function (receiverId) {
        fetch(`../home/getAllMessages.php?receiverId=${receiverId}&lastMessageId=${lastMessageId}`)
            .then(response => response.json())
            .then(data => {
                    if(data=='empty'){
                        lastMessageId = 0;
                        console.log("fechAll:"+lastMessageId)
                        document.querySelector(".chat").innerHTML ="";
                    }else if (data.length > 0) {
                        lastMessageId = data[data.length - 1].message_id;
                        console.log("fechAll:"+lastMessageId)
                        for (let i = 0; i < data.length; i++) {
                            if (data[i].receiver_id != receiverId) {
                                document.querySelector(".chat").innerHTML += `
                                <div class="reciver"><div class="save-p"><p>${data[i].message}</p></div></div>`;
                            } else {
                                document.querySelector(".chat").innerHTML += `
                                <div class="sender"><button class="remove" onclick=\"removeMessage(${data[i].message_id})\"><i class="fa-solid fa-trash"></i></button><div class="save-p"><p>${data[i].message}</p></div></div>`;
                            }
                        }
                                document.querySelector(".chat").scrollTop = document.querySelector(".chat").scrollHeight;
                    }
            })
            .catch(error => console.error('Error fetching messages:', error));
    }

    window.pollMessages=function (receiverId) {
        clearInterval(pollMessages.interval);
        pollMessages.interval = setInterval(() => {
            console.log("fech")
            fetch(`../home/getLastMesg.php?receiverId=${receiverId}`)
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    for(let i=data.length-1; i>=0; i--){
                        if (data[i].message_id > lastMessageId) {
                            lastMessageId = data[i].message_id;
                            if (data[i].receiver_id != receiverId) {
                                document.querySelector(".chat").innerHTML += `
                                <div class="reciver"><div class="save-p"><p>${data[i].message}</p></div></div>`;
                            } else{
                                document.querySelector(".chat").innerHTML += `
                                <div class="sender"><div class="save-p"><p>${data[i].message}</p></div></div>`;
                            }
                            document.querySelector(".chat").scrollTop = document.querySelector(".chat").scrollHeight;
                        }
                    }
                    });
                   
        }, 5000);
    };

        window.removeMessage =function(message_id) {
            let receiverId = document.querySelector(".reciver-info").getAttribute("data-receiver-id");
            fetch(`../home/removeMessage.php?messageId=${message_id}&senderId=${senderId}`)
                .then(response => response.json())
                .then(data => {
                    if (data.success) {
                        document.querySelector(".chat").innerHTML = "";
                        fetchMessages(receiverId);
                        alert("Message removed successfully!");
                    } else {
                        alert("Failed to remove message: " + data.message);
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                    alert("An error occurred while trying to remove the message.");
                });
        };

       
            document.querySelector("#send").addEventListener("click", function (event) {
                event.preventDefault();
                let message = document.querySelector("#message").value;
                document.querySelector("#message").value = '';
                let receiverId = document.querySelector(".reciver-info").getAttribute("data-receiver-id");
                if(message!=""){
     function sendMess(){
                    fetch("../home/sendMessags.php", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            message: message,
                            sender_id: senderId,
                            receiver_id: receiverId
                        })
                    })
                        .then(response => response.json())
                        .then(data => {
                            if (data.success) {
                                document.querySelector("#message").value = '';
                               
                                document.querySelector(".chat").scrollTop = document.querySelector(".chat").scrollHeight;
                            } else {
                                alert("Failed to send message.");
                            }
                        })
                        .catch(error => console.error('Error sending message:', error));
                    }
                    setTimeout(sendMess,1000);
                }else{
                    message.disabled = true;
                }
            });
     }else{
    window.location.href='../auth/login.php';
    }
  })
});






 // window.openProfileModal = function() {
        //     let modal = document.querySelector(".modal");
        //     modal.style.display = 'flex';  
        //     modal.style.alignItems = 'center';
        //     modal.style.justifyContent = 'center';
        // };
        // window.closeModal = function() {
        //     document.querySelector(".modal").style.display='none';
        // };
        // window.closeChange = function() {
        //     document.querySelector(".password-modal").style.display='none';
        //     document.querySelector(".oldPassword").value="";
        //     document.querySelector(".newPassword").value="";
        //     document.querySelector(".newRepeatPassword").value="";
        // };
        // window.openPasswordModal=function() {
        //     let modal = document.querySelector(".password-modal");
        //     modal.style.display = 'flex';  
        //     modal.style.alignItems = 'center';
        //     modal.style.justifyContent = 'center';
        // };