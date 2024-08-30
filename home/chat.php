<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
     <?php
    //  include("../home/getFriends.php")
     //  session_start();
    ?> 
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <title>Chat</title>
    <link rel="stylesheet" href="dsa.css">
</head>
<body>

<div class="full">
    <div class="main">
      <div class="main-list">
      <div class="sidebar">
        <ul>
            <ul class="chat-btn">
            <button class="setings" onclick="toggleSidebar()"><h3>chat</h3></button>
            </ul>
            <ul class="sidebar-profile"></ul>
        </ul>
      </div>
            <div class="list-header">
                <button class="setings" onclick="toggleSidebar()"><h3>chat</h3></button>
                </div>
                <input class="search-input" type="text" size="30" onkeyup="showResult(this.value)" placeholder="search">
                <div id="livesearch"></div>
                <div class="users-list">
                  <div class="search-container">
                    
                  
                </div>
            </div>  
     </div>
        <div class="chat-container">
            <div class="reciver-info"></div>
            <div class="line"></div>
            <div class="chat">
                <div class="chat-message"></div>
                    <div class="textBox"></div>
                </div>
            <div class="message-input">
                <form class="message-form" action="<?php htmlspecialchars($_SERVER["PHP_SELF"]) ?>" method="POST">
                    <div class="texareaDiv">
                        <label class="custom-file-upload">
                            <input type="file" id="myfile" name="myfile"/>
                            <i class="fa-solid fa-file-image fa-2xl" style="color: #2988d1;"></i>
                        </label>
                   <textarea spellcheck="false" id="message" name="message" placeholder="Type a message..."></textarea>
                </div>
                    <div class="btnDiv"><button type="submit" id="send"><i class="fa-regular fa-paper-plane"></i></button></div>
                    
                </form>
            </div>
        </div>
        <div class="modal">
            <div class="modal-body">
               <img src="../image/lukasimg.jpg" alt="">
               <span>luka goguadze</span>
               <p>good chatiaa</p>
               <button onclick="closeModal()">close</button>
            </div>
        </div>

        <div class="password-modal">
        <div class="password-modal-body">
                <div class="password-header">
                    <h2>change password</h2>
                </div>
                <div class="line"></div>
                <div class="inputs-container" >
                    <form class="password-form" onsubmit="event.preventDefault(); save();">
                            <input type="password" class="oldPassword" name="oldPassword" placeholder="old password" required>
                            <input type="password" class="newPassword" name="newPassword" placeholder="new password" required>
                            <input type="password" class="newRepeatPassword" name="newRepeatPassword" placeholder="repeat password" required>
                            <div class="password-button">
                                <button class="save-change"  type="submit">save change</button>
                                <button class="close" onclick="closeChange()">close</button>
                            </div>
                    </form>
                </div>
        </div>
    </div>

    </div>
    </div>
    <script src="../js/friend.js"></script>
    <script src="../js/xsa.js"></script>
    <script src="../js/getUser.js"></script>
    <script src="../js/liveSearch.js"></script>
    <script src="../js/sidmashin.js"></script>
    <script src="../js/changePassword.js"></script>
</body>
</html>
