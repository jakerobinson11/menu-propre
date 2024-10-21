const ulCreate = (parent,idName,classArray=undefined)=>{
    const ul = document.createElement("ul");
    ul.id = idName;
    if(classArray != undefined){
        ul.classList.add(classArray);
    }
    
    parent.append(ul);
    // le return renvoie une valeur pour ma fonction
    // ex dans const ulSubMenu = ulCreate = (parent,idName,classArray=[])
    // ulSubMenu devient mon element HTML
    return ul
}

export {ulCreate}