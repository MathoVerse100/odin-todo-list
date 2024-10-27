import { capitalizeFirstLetter } from "../../../utilities/helperFunctions/capitalizeFirstLetter";


export function toggleTheme() {
    const currentLocalStorage = JSON.parse(localStorage.app);
    const newTheme = currentLocalStorage.header.mode.theme === "light-mode" ? "dark-mode" : "light-mode";

    currentLocalStorage.header.mode.theme = newTheme;
    currentLocalStorage.header.mode.title = capitalizeFirstLetter(newTheme.split("-")[0]);
    localStorage.setItem("app", JSON.stringify(currentLocalStorage));
};