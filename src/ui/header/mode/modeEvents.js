import { toggleTheme } from "../../../stateManagement/header/mode/modeScript.js"


export function modeEventListeners(object) {
    object.addEventListener("click", toggleTheme);
};
