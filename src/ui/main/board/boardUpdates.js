import { sampleBoardTitle } from "./boardTitle/boardTitleScript.js";
import { sampleTask1 } from "./task/taskScript.js";


export function renderBoard(parent) {
    parent.append(sampleBoardTitle, sampleTask1);
};