import makeElement from "../../utils/makeElement"

const deleteItem = function(color,{id,category,title,startDate,endDate,startTime,endTime,isComplete}){
    const template = 
    `
    <div class="itemList">
        <div class="colorDiv" style="background: ${color};"></div>
        <div class="catDiv">
            <ul class="list" data-key="${id}">
                <li class="category" >${category}</li>
                <li class="title" >${title}</li>
                <li class="startdate" >Start date: ${startDate}</li>
                <li class="enddate" >End  date: ${endDate}</li>
                <li class="starttime" >Start time: ${startTime}</li>
                <li class="endtime" >End  time: ${endTime}</li>
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