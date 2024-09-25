window.openCartOfEmoji=function(event){
  let emojiArr=[];
  let emoji=document.querySelector(".emoji-container");
  emoji.innerHTML="";
  if(emoji.style.display == 'none'){
        emoji.style.display = 'flex'
        fetch("../home/emoji.php")
        .then(response => response.json())
        .then(data => {
            
        let emoji=document.querySelector(".emoji-container");
        emojiArr=data;
            data.forEach(element => {
                
                emoji.innerHTML+=`<button class="emoji-button" onclick='insertInput(${element.emoji_id})'>${element.emoji}</button>`
            });
        })
        window.insertInput=function(emoji_id){
            emojiArr.forEach(element => {
                if(element.emoji_id==emoji_id){
                    document.querySelector(".textarea").value+=element.emoji
                }
            });
        }

    } else {
        emoji.style.display = 'none';
        emoji.innerHTML="";
    }

}   


