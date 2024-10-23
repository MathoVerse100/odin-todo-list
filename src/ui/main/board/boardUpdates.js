import { sampleBoardTitle } from "./boardTitle/boardTitleGeneration.js";
import { sampleTask1, sampleTask2 } from "./task/taskGeneration.js";
import { addTask } from "./addTask/addTaskGeneration.js";


export function renderBoard(parent) {
    parent.appendChild(sampleBoardTitle);
    parent.append(sampleTask1, sampleTask2);
    parent.appendChild(addTask);
};