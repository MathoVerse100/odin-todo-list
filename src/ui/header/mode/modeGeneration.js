import { createNewElement } from "../../../utilities/helperFunctions/newElement";


export const themeButton = createNewElement({
    nameTag: "button",
    classList: ["theme-button"],
    textContent: "Light",
    attributes: {
        title: "Toggle Theme",
    },
});


