import { createNewElement } from "../../../../utilities/helperFunctions/newElement.js";
import { toKebab } from "../../../../utilities/helperFunctions/toKebab.js";


function createHeadline(name) {
    const headline = createNewElement({
        classList: [`${toKebab(name)}-headline`, "headline"],
    });

    const headlineTitle = createNewElement({
        classList: [`${toKebab(name)}-headline-title`, "headline-title"],
        textContent: name,
    });

    const headlineOptions = createNewElement({
        classList: ["headline-options"],
        textContent: "Option",
    });

    headline.append(headlineTitle, headlineOptions);

    return headline;
};


export const projectsHeadline = createHeadline("Projects");
