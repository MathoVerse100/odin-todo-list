import { toggleTheme } from "../../../stateManagement/header/mode/modeScript.js"


export function modeEventListeners(object) {
    object.addEventListener("click", () => {
        toggleTheme();

        const newMode =  JSON.parse(localStorage.app).header.mode;
        document.querySelector(".theme-button").textContent = newMode.title;
        document.body.setAttribute("data-theme", newMode.theme);
    });
};
