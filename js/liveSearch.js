///////////SEARCH RESULT///////////////////
window.showResult=function (str) {
    fetch("../home/gb.php?q="+str)
    .then(response => response.json())
    .then(data => {
        document.getElementById("livesearch").innerHTML="";
        if(str.length==0){
            document.getElementById("livesearch").innerHTML=""; 
            document.getElementById("livesearch").style.display="none";
            document.getElementById("livesearch").style.border="0px";
            return;
        }
        else{
            if(data.length!=0){
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
            }else{
                document.getElementById("livesearch").style.display="block";
                document.getElementById("livesearch").innerHTML="user not found!";
            }
        };
            
          
    })
};

//////////////SELECT USER FROM SEARCH/////////////////////
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
            });
        });
    });
}