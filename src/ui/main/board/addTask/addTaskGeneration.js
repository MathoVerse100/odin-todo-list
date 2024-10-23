import { createNewElement } from "../../../../utilities/helperFunctions/newElement.js";


function createAddTaskButton() {
    const addTaskButton = createNewElement({
        classList: ["add-task-button"],
    });

    const icon = createNewElement({
        classList: ["add-task-icon"],
        textContent: "IC",
    });

    const title = createNewElement({
        classList: ["add-task-title"],
        textContent: "Add Task",
    });

    addTaskButton.append(icon, title);

    return addTaskButton;
};


export const addTask = createAddTaskButton();