//////////USEREBIS DAFECHVA (INFO HEADER)  //////////////////
function fechUser(data,receiverId){
      let user = data.find(user => user.user_id == receiverId);
      let receiverName = `${user.user_name} ${user.user_lastname}`;
      if(user.user_image!=null){
      if(user.status_code==0){
          document.querySelector(".reciver-info").innerHTML = `
          <img src="../image/${user.user_image}" alt="">
          <p>${receiverName}</p>
          <div class="status">
          <div class="status-off-icon"></div>
          </div>
      `;
      }else if(user.status_code==1){
          document.querySelector(".reciver-info").innerHTML = `
          <img src="../image/${user.user_image}" alt="">
          <p>${receiverName}</p>
          <div class="status">
          <div class="status-on-icon"></div>
          </div>
          `;
      }
  }else{
      if(user.status_code==0){
          document.querySelector(".reciver-info").innerHTML = `
          <img src="../image/an.webp" alt="">
          <p>${receiverName}</p>
          <div class="status">
          <div class="status-off-icon"></div>
          </div>
      `;
      }else if(user.status_code==1){
          document.querySelector(".reciver-info").innerHTML = `
          <img src="../image/an.webp" alt="">
          <p>${receiverName}</p>
          <div class="status">
          <div class="status-on-icon"></div>
          </div>
          `;
      }
  }
  document.querySelector(".reciver-info").setAttribute('data-receiver-id', receiverId);
                  lastMessageId = 0; 
                  document.querySelector(".reciver-info").style.display = 'block';
                  document.querySelector(".chat").style.overflowY = "scroll";
                  document.querySelector(".line").style.display = 'block';
                  document.querySelector(".message-input").style.display = 'flex';
                  fetchMessages(receiverId);
                  pollMessages(receiverId);
}

