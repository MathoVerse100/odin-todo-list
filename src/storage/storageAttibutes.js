let defaultStorage = require("./manageStorage.JSON");


export function defaultLocalStorage() {
    if (!localStorage.getItem("app")) {
        localStorage.setItem("app", JSON.stringify(defaultStorage)); 
    };
};