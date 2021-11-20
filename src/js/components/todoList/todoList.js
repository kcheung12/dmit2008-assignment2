import Router from "../../routes/router";
import todoItem from "../todoItem/todoItem";
import editlogo from "../../icon/editlogo";
import trashlogo from "../../icon/trashlogo";
import { getStore } from "../../redux/store";
import bgColor from "../../utils/bgColor";


const todoList = function(){

    const content = document.createElement('div')
    content.classList.add('category-list')

    const data = getStore()

    function onEditEvent (e){
        const id = {id:e.currentTarget.dataset.key}
        const cat = data.find(c=>c.id===id.id)
        Router('/edit', cat)
    }
    
    function onDeleteEvent (e){

        const id = {id:e.currentTarget.dataset.key}

        Router('/delete', id)
    }
    const elements = data.map(cat=>todoItem(bgColor(),editlogo,trashlogo, cat))
    elements.forEach(element => {
        element.querySelector('button#edit-button').addEventListener('click',onEditEvent);
        element.querySelector('button#delete-button').addEventListener('click',onDeleteEvent);
        content.append(element);
    })   

    return content
}

export default todoList     