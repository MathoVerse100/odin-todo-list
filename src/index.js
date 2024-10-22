import "./styles.css";
import { renderHeader } from "./ui/header/headerUpdates";
import { renderSidebar } from "./ui/main/sidebar/sidebarUpdates";


const header = document.querySelector("#header");
const sidebar = document.querySelector("#sidebar");

renderHeader(header);
renderSidebar(sidebar);