// Toggle dark mode
const themeToggle = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;

themeToggle.addEventListener('click', () => {
    const isDarkMode = htmlElement.classList.toggle('dark');
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
});

// Set the initial theme based on localStorage
if (localStorage.getItem('theme') === 'dark') {
    htmlElement.classList.add('dark');
}