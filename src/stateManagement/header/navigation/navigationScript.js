export function toggleSidebar() {
    const currentLocalStorage = JSON.parse(localStorage.app);
    const newNavigation = currentLocalStorage.header.navigation === "flex" ? "none" : "flex";

    currentLocalStorage.header.navigation = newNavigation;
    localStorage.setItem("app", JSON.stringify(currentLocalStorage));
};