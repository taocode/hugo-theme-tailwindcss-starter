function applyDarkMode(isDark) {
  const root = document.documentElement
  root.classList.toggle('dark', isDark)
  root.style.colorScheme = isDark ? 'dark' : 'light'
}

function initMenuToggle() {
  let showMenu = document.getElementById('show-menu')
  let menuToggle = document.getElementById('toggle-menu')
  if (!menuToggle) return
  menuToggle.addEventListener('click', () => {
    showMenu.checked = !showMenu.checked
  })
}

function initDarkMode() {
  const lsThemeMode = localStorage.getItem('theme-mode')
  let darkMode = (lsThemeMode !== null) 
            ? lsThemeMode !== 'light' 
            : ! matchMedia('(prefers-color-scheme: light)').matches
  applyDarkMode(darkMode)
  const toggleDarkMode = document.getElementById('toggle-dark-mode')
  if (!toggleDarkMode) return
  toggleDarkMode.addEventListener('click',() => {
    darkMode = !darkMode
    applyDarkMode(darkMode)
    localStorage.setItem('theme-mode', darkMode ? 'dark' : 'light')
  })   
}

function init() {
  initMenuToggle();
  initDarkMode();
}

document.addEventListener("DOMContentLoaded", init);
