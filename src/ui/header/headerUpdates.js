import { themeButton } from "./mode/modeGeneration.js";
import { sidebarNavigation } from "./navigation/navigationGeneration.js";
import { title } from "./title/titleGeneration.js";


export function renderHeader(parent) {
    parent.append(sidebarNavigation, title, themeButton);
};