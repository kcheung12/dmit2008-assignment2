import Router from "../../routes/router";
import todoItem from "../todoItem/todoItem";
import editlogo from "../../icon/editlogo";
import trashlogo from "../../icon/trashlogo";
import { getStore } from "../../redux/store";
import bgColor from "../../utils/bgColor";

const onRequestNewPage = function(e){
    e.preventDefault();
    Router(e.currentTarget.dataset.path)
}

function onDeleteEvent (e){
    // DELETE NEED THE ID
    const id = {id:e.currentTarget.dataset.key}

    // EDIT WOULD PASS EMPLOYEE OBJECT
    Router('/delete', id)
  }




const todoList = function(){

    const content = document.createElement('div')
    content.classList.add('category-list')

    const data = getStore()
    const elements = data.map(cat=>todoItem(bgColor(),editlogo,trashlogo, cat))
    elements.forEach(element => {
        element.querySelector('button#edit-button').addEventListener('click',onRequestNewPage);
        element.querySelector('button#delete-button').addEventListener('click',onDeleteEvent);
        content.append(element);
    })   

    return content
}

export default todoList     