////////////CHANGE PASSWORD////////////
function save() {
    const oldPassword = document.querySelector(".oldPassword").value;
    const newPassword = document.querySelector(".newPassword").value;
    const repeatPassword = document.querySelector(".newRepeatPassword").value;

    fetch("../home/changePassr.php", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            oldPassword: oldPassword,
            newPassword: newPassword,
            newRepeatPassword: repeatPassword
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            document.querySelector(".oldPassword").value="";
            document.querySelector(".newPassword").value="";
            document.querySelector(".newRepeatPassword").value="";
            alert(data.success);
        } else {
            alert(data.error);
        }
    })
};
