import "./ui/global.css";
import "./ui/header/headerLayout.css";
import "./ui/header/mode/modeStyle.css";
import "./ui/header/navigation/navigationStyle.css";
import "./ui/header/title/titleStyle.css";
import "./ui/main/mainLayout.css";
import "./ui/main/board/boardLayout.css";
import "./ui/main/sidebar/sidebarLayout.css";
import "./ui/main/sidebar/categories/categoryStyle.css";
import "./ui/main/sidebar/projects/projectStyle.css";
import { renderHeader } from "./ui/header/headerUpdates";
import { renderSidebar } from "./ui/main/sidebar/sidebarUpdates";

const header = document.querySelector("#header");
const sidebar = document.querySelector("#sidebar");

renderHeader(header);
renderSidebar(sidebar);