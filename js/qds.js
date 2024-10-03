//////////USEREBIS DAFECHVA (INFO HEADER)  //////////////////
function fechUser(data,receiverId){
      let user = data.find(user => user.user_id == receiverId);
      let receiverName = `${user.user_name} ${user.user_lastname}`;
      if(user.user_image!=null){
      if(user.status_code==0){
          document.querySelector(".reciver-info").innerHTML = `
          <button onclick='backFriend()' class='back-button'><i class="fa-solid fa-angle-left back"></i></button>
          <img src="../images/${user.user_image}" alt="">
          <p>${receiverName}</p>
          <div class="status">
          <div class="status-off-icon"></div>
          </div>
      `;
      }else if(user.status_code==1){
          document.querySelector(".reciver-info").innerHTML = `
          <button onclick='backFriend()' class='back-button'><i class="fa-solid fa-angle-left back"></i></button>
          <img src="../images/${user.user_image}" alt="">
          <p>${receiverName}</p>
          <div class="status">
          <div class="status-on-icon"></div>
          </div>
          `;
      }
  }else{
      if(user.status_code==0){
          document.querySelector(".reciver-info").innerHTML = `
          <button onclick='backFriend()' class='back-button'><i class="fa-solid fa-angle-left back"></i></button>
          <img src="../images/l.jpeg" alt="">
          <p>${receiverName}</p>
          <div class="status">
          <div class="status-off-icon"></div>
          </div>
      `;
      }else if(user.status_code==1){
          document.querySelector(".reciver-info").innerHTML = `
          <button onclick='backFriend()' class='back-button'><i class="fa-solid fa-angle-left back"></i></button>
          <img src="../images/l.jpeg" alt="">
          <p>${receiverName}</p>
          <div class="status">
          <div class="status-on-icon"></div>
          </div>
          `;
      }
  }
  window.document.querySelector(".reciver-info").setAttribute('data-receiver-id', receiverId);
                  lastMessageId = 0; 
                  document.querySelector(".chat-container").style.display='flex';
                  document.querySelector(".reciver-info").style.display = 'block';
                  document.querySelector(".chat").style.overflowY = "scroll";
                  document.querySelector(".line").style.display = 'block';
                  document.querySelector(".message-input").style.display = 'flex';
                //   window.offset=0;
                  fetchMessages(receiverId);
                  pollMessages(receiverId);
}
/////////// FOR PHONE //////////////////////////
function backFriend(){
    document.querySelector(".chat-container").style.display='none';
    clearInterval(pollMessages.interval);
    document.querySelector(".main-list").style.display='block';
    document.querySelector(".main-list").style.width='100%';
}