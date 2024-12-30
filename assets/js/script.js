const root = document.documentElement;
const increaseFontButton = document.getElementById('increase-font');
const defaultFontButton = document.getElementById('default-font');
const decreaseFontButton = document.getElementById('decrease-font');
const toggleDarkModeButton = document.getElementById('toggle-darkmode');

let currentFontSize = 16;

increaseFontButton.addEventListener('click', () => {
    currentFontSize += 2;
    root.style.setProperty('--font-size', `${currentFontSize}px`);
});

defaultFontButton.addEventListener('click', () => {
    currentFontSize = 16;
    root.style.setProperty('--font-size', `${currentFontSize}px`);
});

decreaseFontButton.addEventListener('click', () => {
    currentFontSize = Math.max(12, currentFontSize - 2);
    root.style.setProperty('--font-size', `${currentFontSize}px`);
});

toggleDarkModeButton.addEventListener('click', () => {
    if (root.hasAttribute('data-theme')) {
        root.removeAttribute('data-theme');
    } else {
        root.setAttribute('data-theme', 'dark');
    }
});