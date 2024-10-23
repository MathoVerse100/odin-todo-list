import { createNewElement } from "../../../../utilities/helperFunctions/newElement.js";
import { toKebab } from "../../../../utilities/helperFunctions/toKebab.js";


function createBoardTitle(name) {
    const titleCard = createNewElement({
        classList: [`${toKebab(name)}-board-title`, "board-title"],
        textContent: name,
    });

    return titleCard;
};


export const sampleBoardTitle = createBoardTitle("All Tasks");
