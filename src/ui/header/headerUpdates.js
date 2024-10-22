import { themeButton } from "./mode/modeScript.js";
import { sidebarNavigation } from "./navigation/navigationScript.js";
import { title } from "./title/titleScript.js";


export function renderHeader(parent) {
    parent.append(sidebarNavigation, title, themeButton);
};