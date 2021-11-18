import makeElement from "../utils/makeElement";
import button from "~/src/js/components/ui/button";
import Router from "../routes/router";
import reducer from "../redux/reducers";
import { getStore } from "../redux/store";

const deletePage = function(props){

    const page = document.createElement('div')
    const cancelButton = button('Cancel')
    const deleteButton = button("delete","buttonWarning")

    function onCancelDelete(e){
        Router('/toDoPage')
    }
    function onDeleteEvent(e){
        // action object required for the reducer
        const index = getStore().findIndex((cat)=>{
            return (cat.id === props.id)
        })
        const action = { 
            type:"delete",
            payload:{index},
            cb: ()=>{
                Router('/toDoPage')
            }
        }
        // pass the action object to the reducer
        reducer(action)

    }
    //delete button event handler
    deleteButton.addEventListener('click', onDeleteEvent)
    cancelButton.addEventListener('click', onCancelDelete)


    let headerTemplate = `    
    <header class="welcome center-in-page">   
    <h1>Delete Employee</h1>   
    <p>delete employee with id</p>   
    <div></div>   
    </header>    
    ` 
    const pageHeader = makeElement(headerTemplate)
    pageHeader.querySelector('div').append(cancelButton,deleteButton)
    
    page.append(pageHeader)       
    return page    
}
    
    
    
export default deletePage
