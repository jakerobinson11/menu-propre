const liCreate = (parent,txt,idName = undefined,classArray = undefined)=>{
    const li = document.createElement("li");
    li.innerText = txt;
    if(classArray != undefined){
        li.classList.add(classArray)
    }
    if(idName != undefined){
        li.id = idName //facultatif
    }
    parent.append(li);
    return li;
}

export {liCreate}
