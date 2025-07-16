const toggleButton = document.getElementById('theme-toggle');
const body = document.body;

// Load theme from localStorage
if (localStorage.getItem('theme') === 'light') {
  body.classList.add('light-theme');
}

toggleButton.addEventListener('click', () => {
  body.classList.toggle('light-theme');
  const currentTheme = body.classList.contains('light-theme') ? 'light' : 'dark';
  localStorage.setItem('theme', currentTheme);
});
