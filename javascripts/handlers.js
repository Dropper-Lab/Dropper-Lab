// DarkMode handler
class darkMode{
    constructor() {
        const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: Dark)').matches;
        // Get darkMode statement and create if not present
        let darkMode = localStorage.getItem("darkMode");
        if (darkMode === null || !["true", "false"].includes(darkMode)) localStorage.setItem("darkMode", String(prefersDark));

        let rDarkMode = localStorage.getItem("darkMode");
        this.run(eval(rDarkMode));

        document.querySelector("html").classList.remove("hidden");
    }

    toggle() {
        let darkMode = !eval(localStorage.getItem("darkMode"));
        localStorage.setItem("darkMode", String(darkMode));
        this.run(darkMode);
    }

    run(darkMode) {
        document.querySelector("html").classList[(darkMode) ? "add" : "remove"]("dark");
        document.getElementById("logoSpace").src = `./images/logo/${(darkMode) ? "light" : "dark"}.svg`;
    }
}

let dark = new darkMode();

// Connect dark mode toggles
document.getElementById("toggleDarkMode-mobile").addEventListener("click", () => dark.toggle());
document.getElementById("toggleDarkMode-desktop").addEventListener("click", () => dark.toggle());

window.onload = () => {
    new Typed('#teamKeywords', {
        strings: ['Creative', 'Passionate', "The Best"],
        typeSpeed: 55,
        backSpeed: 55,
        showCursor: false,
        loop: false,
    });
}