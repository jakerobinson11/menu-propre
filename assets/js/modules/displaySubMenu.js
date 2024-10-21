import { liCreate } from "./liCreate.js";
import { ulCreate } from "./ulCreate.js"

const displaySubMenu = (parent,index,classArray = undefined)=> {
    // la variable ulSubMenu devient, grace au return de ma fonction ulSubMenu
    // l'element ul lui-meme
    const ulSubMenu = ulCreate(parent,"subMenu"+index,classArray);
    menuData[index].sousMenu.forEach(element => {
        liCreate(ulSubMenu,element);
   });
    //liCreate(ulSubMenu,menuData[index].sousMenu[0]);
}
export {displaySubMenu}
