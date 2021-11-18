import makeElement from "../../utils/makeElement"

const todoItem = function(color,edit,del,{id,category,title,endDate,isComplete}){
    const template = 
    `
    <div class="itemList">
        <div class="colorDiv" style="background: ${color};"></div>
        <div class="catDiv">
            <ul class="list" data-key="${id}">
                <li class="category" >${category}</li>
                <li class="title" >${title}</li>
                <li class="date" >${endDate}</li>
                <li class="isComplete" >${isComplete? 'Completed' : '&nbsp;'}</li>
            </ul>
            <div class="function-div">
                <a href="/edit" data-path="/edit" class="edit-button">${edit}</a>
                <a href="/delete" data-path="/delete" class="delete-button">${del}</a>
            </div>       
        </div>
    </div>
    `

    return makeElement(template)
}

export default todoItem