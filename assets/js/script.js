
import { destroyElement } from "./modules/destroyElement.js";
import { displaySubMenu } from "./modules/displaySubMenu.js";
import { liCreate } from "./modules/liCreate.js";
import { menuData } from "./modules/menuData.js";


console.dir(menuData);
// VARIABLES
globalThis.menu = document.querySelector("#header-nav ul");
globalThis.menuData = menuData;
//LOGIC
menuData.forEach((element,index) => {
    const menuItem = liCreate(menu,element.title,"menu"+index,);
    menuItem.addEventListener("click",(e)=>{
        e.stopPropagation();
        if (document.contains(document.querySelector("#subMenu"+index))){
            destroyElement("#subMenu"+index)
        } else {
            menuData.forEach((element2,index2) => {
                if (document.contains(document.querySelector("#subMenu"+index2))){
                    destroyElement("#subMenu"+index2)
                }  
            });
            displaySubMenu(menuItem,index);
        }
    })
});
// Exercises :
// Empecher le click direct sur les sous Menus (ul)
// Ajouter des icones dans les li de menus
// Au click sur l'elemement #burger : afficher ou faire disparaite le #header-nav ul
