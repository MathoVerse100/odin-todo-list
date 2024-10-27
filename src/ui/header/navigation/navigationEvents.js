import { toggleSidebar } from "../../../stateManagement/header/navigation/navigationScript";


export function navigationEventListeners(object) {
    object.addEventListener("click", () => {
        toggleSidebar();

        const newNavigation = JSON.parse(localStorage.app).header.navigation;
        document.querySelector("#sidebar").style.display = newNavigation;
    });
};