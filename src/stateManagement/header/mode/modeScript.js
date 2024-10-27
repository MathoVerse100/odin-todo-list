import { localStorageDataTheme } from "../../../storage/storageAttibutes.js";


export function toggleTheme() {
    const body = document.body;
    const currentTheme = localStorage.getItem("data-theme");
    const newTheme = currentTheme === "light-mode" ? "dark-mode" : "light-mode";

    body.setAttribute("data-theme", newTheme);
};