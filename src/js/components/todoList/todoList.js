import Router from "../../routes/router";
import todoItem from "../todoItem/todoItem";
import editlogo from "../../icon/editlogo";
import trashlogo from "../../icon/trashlogo";
import { getStore } from "../../redux/store";

const onRequestNewPage = function(e){
    e.preventDefault();
    Router(e.currentTarget.dataset.path)
}
const bgColor = function () {

    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);
    let bgColor = "rgb(" + x + "," + y + "," + z + ")";
    return bgColor;
}

const todoList = function(){

    const content = document.createElement('div')
    content.classList.add('category-list')

    const data = getStore()
    const elements = data.map(cat=>todoItem(bgColor(),editlogo,trashlogo, cat))
    elements.forEach(element => {
        element.querySelector('a.edit-button').addEventListener('click',onRequestNewPage);
        element.querySelector('a.delete-button').addEventListener('click',onRequestNewPage);
        content.append(element);
    })   

    return content
}

export default todoList     