import logo from "../icon/logo";
import header from "../components/header";
import tagline from "../components/tagline";
import deleteItem from "../components/deleteItem";
import button from "~/src/js/components/ui/button";
import Router from "../routes/router";
import reducer from "../redux/reducers";
import { getStore } from "../redux/store";
import bgColor from "../utils/bgColor";

const deletePage = function(props){

    const cancelButton = button('Cancel')
    const deleteButton = button("delete","buttonWarning")

    function onCancelDelete(e){
        Router('/toDoPage')
    }
    function onDeleteEvent(e){

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

        reducer(action)

    }

    deleteButton.addEventListener('click', onDeleteEvent)
    cancelButton.addEventListener('click', onCancelDelete)

    const page = document.createElement('div')
    page.classList.add('toDoPage')
    const pageHeader = document.createElement('header')
    pageHeader.classList.add('toDoPage-header')
    const logoElm = logo()
    const h1 = header ('h1','Bingo')
    const p = tagline('Time to play')
    pageHeader.append(logoElm)
    pageHeader.append(h1)
    pageHeader.append(p)
    page.append(pageHeader)

    const main = document.createElement('main')
    const h2 = header('h2','Delete To Do Item','editHeader')
    const cat = getStore().find(cat => cat.id === props.id)
    const element = deleteItem(bgColor(),cat)
    const div = document.createElement('div')
    div.append(cancelButton,deleteButton)
    main.append(h2)
    main.append(element)
    main.append(div)
    
    
    page.append(main)       
    return page    
}
    
    
    
export default deletePage
