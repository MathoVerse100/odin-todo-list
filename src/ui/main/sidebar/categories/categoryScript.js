import { createNewElement } from "../../../../utilities/helperFunctions/newElement.js";
import { toKebab } from "../../../../utilities/helperFunctions/toKebab.js";


function createSidebarButton(name) {
    const button = createNewElement({
        classList: [toKebab(name), "sidebar-button"],
    });

    const icon = createNewElement({
        classList: ["sidebar-button-icon"],
    });

    const buttonText = createNewElement({
        classList: [`${toKebab(name)}-sidebar-button-text`, "sidebar-button-text"],
        textContent: name,
    });

    const taskCounter = createNewElement({
        classList: [`${toKebab(name)}-task-counter`, "task-counter"],
        textContent: "0",
    });

    button.append(icon, buttonText, taskCounter);

    return button;
};


export const allTasksSidebarButton = createSidebarButton("All Tasks");
export const todaySidebarButton = createSidebarButton("Today");
export const tomorrowSidebarButton = createSidebarButton("Tomorrow");
export const calendarSidebarButton = createSidebarButton("Calendar");
