import "./ui/global.css";
import "./ui/main/mainLayout.css";
import "./ui/main/board/boardLayout.css";
import "./ui/main/sidebar/sidebarLayout.css";
import "./ui/header/headerLayout.css";
import { renderHeader } from "./ui/header/headerUpdates";
import "./ui/header/mode/modeStyle.css";
import "./ui/header/navigation/navigationStyle.css";
import "./ui/header/title/titleStyle.css";

const header = document.querySelector("#header");
renderHeader(header);