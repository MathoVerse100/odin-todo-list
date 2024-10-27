import { modeEventListeners } from "./mode/modeEvents.js";
import { navigationEventListeners } from "./navigation/navigationEvents.js";
import { themeButton } from "./mode/modeGeneration.js";
import { sidebarNavigation } from "./navigation/navigationGeneration.js";
import { title } from "./title/titleGeneration.js";


export function renderHeader(parent) {
    modeEventListeners(themeButton);
    navigationEventListeners(sidebarNavigation);

    parent.append(sidebarNavigation, title, themeButton);
};