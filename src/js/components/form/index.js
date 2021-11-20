
import makeElement from "../../utils/makeElement";

const form = function(data={}){
    
    const template =`
    <form>
        <div>
            <label>ID</label>
            <input type="text" id="id" value="${data!=null? data.id : ''}" placeholder="xxxxxxxx">
        </div>
        <div class="row">
            <div>
                <label>Category</label>
                <select id="cat">
                    <option value="">[Select a Category]</option>
                    <option value="children">Children</option>
                    <option value="teenagers">Teenagers</option>
                    <option value="adults">Adults</option>
                    <option value="middle-aged adults">Middle-Aged Adults</option>
                    <option value="seniors">Seniors</option>
                </select>
            </div>
            <div class="checkboxDiv">
                <label>Completed</label>
                <input type="checkbox" id="isComplete">
            </div>
        </div>
        <div>
            <label>Title</label>
            <input type="text" id="title" value="${data!=null? data.title:''}">
        </div>
        <div class="row">
            <div>   
            <label>Start Date</label>
            <input type="text" id="startDate" value="${data!=null? data.startDate:''}">
            </div>
            <div>
            <label>Start Time</label>
            <input type="text" id="startTime" value="${data!=null? data.startTime:''}">
            </div>
        </div>
        <div class="row">
            <div>
            <label>End Date</label>
            <input type="text" id="endDate" value="${data!=null? data.endDate:''}">
            </div>
            <div>
            <label>End Time</label>
            <input type="text" id="endTime" value="${data!=null? data.endTime:''}">
            </div>
        </div>
        <div class="controlDiv"></div>
    </form>
    
    
    `
    return makeElement(template)
}

export default form