import { createNewElement } from "../../../utilities/helperFunctions/newElement";


export const sidebarNavigation = createNewElement({
    nameTag: "button",
    classList: ["sidebar-navigation"],
    textContent: "S",
    attributes: {
        title: "Open/Close Sidebar",
    },
});
