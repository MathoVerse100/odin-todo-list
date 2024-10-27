export function localStorageDataTheme() {
    if (!localStorage.getItem("data-theme")) {
        localStorage.setItem("data-theme", "light-mode");
    };
};