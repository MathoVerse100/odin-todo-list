import { allTasksSidebarButton, todaySidebarButton, 
         tomorrowSidebarButton, calendarSidebarButton } from "./categories/categoryScript.js";
import { projectsHeadline } from "./headlines/headlineScript.js";
import { projectOne, projectTwo } from "./projects/projectScript.js"


export function renderSidebar(parent) {
    parent.append(
        allTasksSidebarButton, todaySidebarButton, tomorrowSidebarButton, calendarSidebarButton,
        projectsHeadline,
        projectOne, projectTwo,
    );
};