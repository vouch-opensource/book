// Theme toggle functionality
const themeToggleButton = document.getElementById('theme-toggle');
const body = document.body;

// Check if a theme is already saved in local storage
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    body.classList.add(savedTheme);
}

// Toggle theme on button click
themeToggleButton.addEventListener('click', () => {
    if (body.classList.contains('dark-theme')) {
        body.classList.remove('dark-theme');
        localStorage.setItem('theme', 'light-theme');
    } else {
        body.classList.add('dark-theme');
        localStorage.setItem('theme', 'dark-theme');
    }
});

// Sidebar toggle functionality
const sidebarToggleButton = document.getElementById('sidebar-toggle');
const sidebar = document.getElementById('sidebar');
const closeSidebarButton = document.getElementById('close-sidebar');
const mainContent = document.querySelector('.main-content');

// Function to toggle sidebar visibility
function toggleSidebar() {
    if (window.innerWidth <= 768) {
        sidebar.classList.toggle('shown'); // Mobile behavior
    } else {
        sidebar.classList.toggle('hidden'); // Desktop behavior
        mainContent.classList.toggle('full-width'); // Expand content width when sidebar is hidden
    }
}

// Add event listeners to toggle sidebar
sidebarToggleButton.addEventListener('click', toggleSidebar);
closeSidebarButton.addEventListener('click', toggleSidebar);

// Close sidebar when clicking outside (for mobile)
document.addEventListener('click', (event) => {
    if (window.innerWidth <= 768 && !sidebar.contains(event.target) && !sidebarToggleButton.contains(event.target)) {
        sidebar.classList.remove('shown');
    }
});

// Select all toggle containers (folder + link)
const toggleContainers = document.querySelectorAll('.toggle-container');

// Add click event listener to each container
toggleContainers.forEach(container => {
    const button = container.querySelector('.toggle-btn');
    const link = container.querySelector('a');
    const submenu = container.parentElement.querySelector('.submenu');
    const arrow = container.querySelector('.arrow');

    // Function to toggle submenu visibility
    function toggleSubmenu() {
        submenu.classList.toggle('hidden');
        if (submenu.classList.contains('hidden')) {
            arrow.classList.remove('down-arrow');
            arrow.classList.add('right-arrow');
        } else {
            arrow.classList.remove('right-arrow');
            arrow.classList.add('down-arrow');
        }
    }

    // Add click events for both button and link
    button.addEventListener('click', toggleSubmenu);
    link.addEventListener('click', toggleSubmenu);
});
