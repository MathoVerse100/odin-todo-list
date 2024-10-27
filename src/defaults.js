export function renderDefaults() {
    document.body.setAttribute("data-theme", JSON.parse(localStorage.app).header.mode.theme);
    document.querySelector(".theme-button").textContent = JSON.parse(localStorage.app).header.mode.title;
};
