const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const refs = {
  themeSwitch: document.querySelector('#theme-switch-toggle'),
  body: document.querySelector('body'),
};

const currentTheme = localStorage.getItem('theme');

function addCurrentTheme() {
  if (currentTheme) {
    refs.body.classList.add(currentTheme);
  } 
  if (refs.body.classList.contains(Theme.DARK)) {
    refs.themeSwitch.checked = true;
  }
}

function onChangeTheme() {
  if (refs.themeSwitch.checked) {
    refs.body.classList.add(Theme.DARK);
    refs.body.classList.replace(Theme.LIGHT, Theme.DARK);
    localStorage.setItem('theme', Theme.DARK);
  } else {
    refs.body.classList.replace(Theme.DARK, Theme.LIGHT);
    localStorage.setItem('theme', Theme.LIGHT);
  }
}

addCurrentTheme();
refs.themeSwitch.addEventListener('change', onChangeTheme);