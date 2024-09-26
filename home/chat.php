<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <?php
        include("uploadImg.php");


         ?> 

    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <title>Chat</title>
    <link rel="stylesheet" href="luk.css">
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
            <input class="search-input" type="text" size="30" onkeyup="showResult(this.value)" placeholder="Search By Email">
            <div id="livesearch"></div>
            <div class="users-list">
                <div class="search-container"></div>
            </div>
        </div>
        <div class="chat-container">

            <div class="reciver-info"></div>
            <div class="line"></div>
            <div class="chat">
                <!-- <div class="chat-message"></div>
                <div class="textBox"></div> -->
            </div>
            <div class="emoji-container"></div>

            <div class="message-input">

            <button onclick="openCartOfEmoji(event)" class="open-cart-of-emoji">🙂</button>      

                <form class="message-form" action="<?php htmlspecialchars($_SERVER["PHP_SELF"]) ?>" method="POST" enctype="multipart/form-data">
                    <div class="texareaDiv">
                        <!-- <label class="custom-file-upload">
                            <input type="file" id="myfile" name="image" />
                            <i class="fa-solid fa-file-image fa-2xl" style="color: #2988d1;"></i>
                        </label> -->
                       
                        <textarea spellcheck="false" id="message" class="textarea" name="message"  placeholder="Type a message..."></textarea>
                    </div>

                    <div class="btnDiv">
                        <button type="submit" id="send" name="submit"><i class="fa-regular fa-paper-plane"></i></button>
                    </div>
                </form>
            </div>
        </div>

        <div class="modal" id="modal">
            <div class="modal-body">
                <form action="<?php htmlspecialchars($_SERVER["PHP_SELF"]) ?>" method="POST" enctype="multipart/form-data">
                    <label class="custom-file-upload">
                        <input type="file" id="myfile" name="imgFile" />
                        <img src="../images/lukasimg.jpg" alt="">
                    </label>
                    <button type="submit" name="submit">Upload</button>
                </form>
                <span>luka goguadze</span>
                <p>good chatiaa</p>
                <button onclick="closeModal()">close</button>
            </div>

        <div class="password-modal">
            <div class="password-modal-body">
                <div class="password-header">
                    <h2>Change Password</h2>
                </div>
                <div class="line"></div>
                <div class="inputs-container">
                    <form class="password-form" onsubmit="event.preventDefault(); save();">
                        <input type="password" class="oldPassword" name="oldPassword" placeholder="Old Password" required>
                        <input type="password" class="newPassword" name="newPassword" placeholder="New Password" required>
                        <input type="password" class="newRepeatPassword" name="newRepeatPassword" placeholder="Repeat Password" required>
                        <div class="password-button">
                            <button class="save-change" type="submit">Save Change</button>
                            <button class="close" onclick="closeChange()">Close</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>

<script src="../js/jlk.js"></script><!-- main  -->
<script src="../js/ty.js"></script><!-- get friend -->
<script src="../js/nhg.js"></script><!-- user info -->
<script src="../js/xdc.js"></script><!-- search -->
<script src="../js/qc.js"></script><!-- emoji -->
<script src="../js/fff.js"></script><!-- sidbar-style -->
<script src="../js/changePassword.js"></script><!-- chang password -->

<script>    
    function openModal() {
        document.getElementById('modal').style.display = 'block';
    }

    function closeModal() {
        document.getElementById('modal').style.display = 'none';
    }
 
</script>

</body>
</html>
