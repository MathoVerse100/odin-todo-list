import { allTasksSidebarButton, todaySidebarButton, 
         tomorrowSidebarButton, calendarSidebarButton } from "./categories/categoryScript";
import { projectsHeadline } from "./headlines/headlineScript";


export function renderSidebar(parent) {
    parent.append(
        allTasksSidebarButton, todaySidebarButton, tomorrowSidebarButton, calendarSidebarButton,
        projectsHeadline,
    );
};