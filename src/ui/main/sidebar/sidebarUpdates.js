import { allTasksSidebarButton, todaySidebarButton, 
         tomorrowSidebarButton, calendarSidebarButton,
         completedSidebarButton } from "./categories/categoryGeneration.js";
import { projectsHeadline } from "./headlines/headlineGeneration.js";
import { projectOne, projectTwo } from "./projects/projectGeneration.js"


export function renderSidebar(parent) {
    parent.append(
        allTasksSidebarButton, todaySidebarButton, tomorrowSidebarButton, calendarSidebarButton, completedSidebarButton,
        projectsHeadline,
        projectOne, projectTwo,
    );
};