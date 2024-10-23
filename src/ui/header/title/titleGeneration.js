import { createNewElement } from "../../../utilities/helperFunctions/newElement";


export const title = createNewElement({
    classList: ["title"],
    textContent: "Todo List",
    attributes: {
        title: "Title",
    },
});