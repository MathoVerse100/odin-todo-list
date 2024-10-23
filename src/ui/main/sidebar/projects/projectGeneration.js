import { createNewElement } from "../../../../utilities/helperFunctions/newElement.js";
import { toKebab } from "../../../../utilities/helperFunctions/toKebab.js";


function createProjectButton(name) {
    const projectButton = createNewElement({
        classList: [`${toKebab(name)}-project-button`, "project-button"],
    });

    const projectOptions = createNewElement({
        classList: ["project-button-options"],
    });

    const projectTitle = createNewElement({
        classList: [`${toKebab(name)}-project-title`, "project-title"],
        textContent: name,
    });

    const projectCounter = createNewElement({
        classList: [`${toKebab(name)}-project-counter`, "project-counter"],
        textContent: "0",
    });

    projectButton.append(projectOptions, projectTitle, projectCounter);

    return projectButton;
};


export const projectOne = createProjectButton("Sample Project 1");
export const projectTwo = createProjectButton("Sample Project 2");