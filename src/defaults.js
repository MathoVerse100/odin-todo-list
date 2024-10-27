export function renderDefaults() {
    const defaultSettings = JSON.parse(localStorage.app);
    document.body.setAttribute("data-theme", defaultSettings.header.mode.theme);
    document.querySelector(".theme-button").textContent = defaultSettings.header.mode.title;
    document.querySelector("#sidebar").style.display = defaultSettings.header.navigation;
};
