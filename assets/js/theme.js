document.getElementById("theme-chooser-btn").addEventListener("click", function(){
    if (typeof(Storage) !== "undefined") {
        if (localStorage.getItem('darkTheme') == "undefined") {
            console.log("lol")
            localStorage.setItem('darkTheme', 'disabled');
            switchToLightTheme();
        } else if (localStorage.getItem('darkTheme') == "enabled") {
            localStorage.setItem('darkTheme', 'disabled');
            switchToLightTheme();
        } else {
            localStorage.setItem('darkTheme', 'enabled');
            switchToDarkTheme();
        }
    }
});

if (typeof(Storage) !== "undefined" 
        && localStorage.getItem('darkTheme') !== "undefined" 
        && localStorage.getItem('darkTheme') !== null) {
    if (localStorage.getItem('darkTheme') == "disabled") {
        switchToLightTheme();
    } else {
        switchToDarkTheme();
    }
} else {
    localStorage.setItem('darkTheme', 'enabled');
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
    } catch (e) {
        return;
    }
    document.querySelector('meta[name="theme-color"]').remove();
    let newMetaChrome = document.createElement('meta');
    newMetaChrome.setAttribute('name', 'theme-color');
    newMetaChrome.setAttribute('content', '#282c34');
    document.querySelector('head').append(newMetaChrome);
}

function switchToLightTheme() {
    const style = document.documentElement.style;
    style.setProperty('--main-background-color', '#fdfdfd');
    style.setProperty('--title-color', 'rgba(0,0,0,.7)');
    style.setProperty('--subtitle-color', 'rgba(0,0,0,.8)');
    style.setProperty('--text-color', 'rgba(0,0,0,.7)');
    style.setProperty('--faint-text-color', 'rgba(0,0,0,.5)');
    try {
        document.getElementById('theme-chooser-btn').innerHTML = '🌖';
    } catch (e) {
        return;
    }
    document.querySelector('meta[name="theme-color"]').remove();
    let newMetaChrome = document.createElement('meta');
    newMetaChrome.setAttribute('name', 'theme-color');
    newMetaChrome.setAttribute('content', '#fdfdfd');
    document.querySelector('head').append(newMetaChrome);
}