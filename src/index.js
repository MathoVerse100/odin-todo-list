import "./styles.css";
import { renderHeader } from "./ui/header/headerUpdates";
import { renderSidebar } from "./ui/main/sidebar/sidebarUpdates";
import { renderBoard } from "./ui/main/board/boardUpdates";


const header = document.querySelector("#header");
const sidebar = document.querySelector("#sidebar");
const board = document.querySelector("#board");

renderHeader(header);
renderSidebar(sidebar);
renderBoard(board);