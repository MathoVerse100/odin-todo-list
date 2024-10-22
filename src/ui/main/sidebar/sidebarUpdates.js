import { allTasksSidebarButton, todaySidebarButton, 
         tomorrowSidebarButton, calendarSidebarButton } from "./categories/categoryScript" 


export function renderSidebar(parent) {
    parent.append(allTasksSidebarButton, todaySidebarButton, tomorrowSidebarButton, calendarSidebarButton);
};