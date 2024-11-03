let isCollapsed = false;

function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('collapsed');
    isCollapsed = !isCollapsed; // Thay đổi trạng thái
}

