document.getElementById("theme-chooser-btn").addEventListener("click", function(){
    if (typeof(Storage) !== "undefined") {
        if (localStorage.getItem('darkTheme') == "undefined") {
            localStorage.setItem('darkTheme', 'enabled');
        } else if (localStorage.getItem('darkTheme') == "enabled") {
            localStorage.setItem('darkTheme', 'disabled');
            switchToDefaultTheme();
        } else {
            localStorage.setItem('darkTheme', 'enabled');
            switchToDarkTheme();
        }
    }
});

if (typeof(Storage) !== "undefined" && localStorage.getItem('darkTheme') !== "undefined") {
    if (localStorage.getItem('darkTheme') == "enabled") {
        switchToDarkTheme();
    } else {
        switchToDefaultTheme();
    }
}

function switchToDarkTheme() {
    const style = document.documentElement.style;
    style.setProperty('--main-background-color', '#282c34');
    style.setProperty('--title-color', 'rgba(255,255,255,.8)');
    style.setProperty('--subtitle-color', 'rgba(255,255,255,.7)');
    style.setProperty('--text-color', 'rgba(255,255,255,.6)');
    style.setProperty('--faint-text-color', 'rgba(255,255,255,.5)');
    try {
        document.getElementById('theme-chooser-btn').innerHTML = '☀️';
    } catch {
        return;
    }
}

function switchToDefaultTheme() {
    const style = document.documentElement.style;
    style.setProperty('--main-background-color', '');
    style.setProperty('--title-color', '');
    style.setProperty('--subtitle-color', '');
    style.setProperty('--text-color', '');
    style.setProperty('--faint-text-color', '');
    try {
        document.getElementById('theme-chooser-btn').innerHTML = '🌖';
    } catch {
        return;
    }
}