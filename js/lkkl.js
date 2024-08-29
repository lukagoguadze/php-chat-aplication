const sidebar = document.querySelector('.sidebar');

document.addEventListener('DOMContentLoaded', function() {
    sidebar.style.display = 'none'; 
});

function toggleSidebar() {
    if (sidebar.style.display === 'none') {
        document.querySelector(".users-list").style.display='none';
        sidebar.style.display = 'block';
    } else {
        sidebar.style.display = 'none';
        document.querySelector(".users-list").style.display='block';
    }
}