import { createNewElement } from "../../../../utilities/helperFunctions/newElement.js";
import { toKebab } from "../../../../utilities/helperFunctions/toKebab.js";


function createTaskBox(title, description, dueDate, priority) {
    const taskBox = createNewElement({
        classList: [`${toKebab(title)}-task-box`, "task-box"],
    });

    const titleBox = createNewElement({
        classList: ["task-title-box"],
    });

    const descriptionBox = createNewElement({
        classList: ["task-description-box"],
        textContent: description,
    });

    const checkbox = createNewElement({
        nameTag: "input",
        classList: ["task-checkbox"],
        attributes: {
            type: "checkbox",
            id: `${toKebab(title)}-task-checkbox`
        },
    });

    const taskTitle = createNewElement({
        classList: [`${toKebab(title)}-title-box`, "title-box"],
        textContent: title,
    });

    const taskPriority = createNewElement({
        classList: [`${toKebab(title)}-priority-box`, "priority-box"],
        textContent: priority,
    });

    const taskDate = createNewElement({
        classList: [`${toKebab(title)}-date-box`, "date-box"],
        textContent: dueDate,
    });

    const taskOptions = createNewElement({
        classList: ["options-box"],
        textContent: "SS",
    });

    titleBox.append(checkbox, taskTitle, taskPriority, taskDate, taskOptions);
    taskBox.append(titleBox, descriptionBox);

    return taskBox;
};


export const sampleTask1 = createTaskBox("Task 1", "This is a description of the task".repeat(20), "20 Oct 2002", "Important");