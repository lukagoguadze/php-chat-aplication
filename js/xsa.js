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
        
            /////Get Frendebi////////////////
            getFriends();
            pollFriends();
        
        document.querySelector(".chat").innerHTML = `<h1 class="j">Chat Aplication</h1>`;
            
        let lastMessageId = 0; 
        ///////////FETHING ALL MESSAGES//////////////////////////////////////////////////
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
            };

        //////////////////////DAPOLVA LAST 10 MESSAGES//////////////////////
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
        ////////////////////REMOVE MESSAGE///////////////////////////////////////////////////
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

        ////////////////////SEND MESSAGE/////////////////////////////////////////
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






 window.openProfileModal = function() {
            let modal = document.querySelector(".modal");
            modal.style.display = 'flex';  
            modal.style.alignItems = 'center';
            modal.style.justifyContent = 'center';
        };
        window.closeModal = function() {
            document.querySelector(".modal").style.display='none';
        };
        window.closeChange = function() {
            document.querySelector(".password-modal").style.display='none';
            document.querySelector(".oldPassword").value="";
            document.querySelector(".newPassword").value="";
            document.querySelector(".newRepeatPassword").value="";
        };
        window.openPasswordModal=function() {
            let modal = document.querySelector(".password-modal");
            modal.style.display = 'flex';  
            modal.style.alignItems = 'center';
            modal.style.justifyContent = 'center';
        };