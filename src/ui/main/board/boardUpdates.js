import { sampleBoardTitle } from "./boardTitle/boardTitleScript.js";
import { sampleTask1, sampleTask2 } from "./task/taskScript.js";
import { addTask } from "./addTask/addTaskScript.js";


export function renderBoard(parent) {
    parent.appendChild(sampleBoardTitle);
    parent.append(sampleTask1, sampleTask2);
    parent.appendChild(addTask);
};