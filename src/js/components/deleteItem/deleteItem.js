import makeElement from "../../utils/makeElement"

const deleteItem = function(color,{id,category,title,endDate,isComplete}){
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
            </div>       
        </div>
    </div>
    `

    return makeElement(template)
}

export default deleteItem    