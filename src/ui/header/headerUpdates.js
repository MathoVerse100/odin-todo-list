import { modeEventListeners } from "./mode/modeEvents.js";
import { themeButton } from "./mode/modeGeneration.js";
import { sidebarNavigation } from "./navigation/navigationGeneration.js";
import { title } from "./title/titleGeneration.js";


export function renderHeader(parent) {
    modeEventListeners(themeButton);

    parent.append(sidebarNavigation, title, themeButton);
};