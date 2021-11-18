import logo from "../icon/logo";
import header from "../components/header";
import tagline from "../components/tagline";
import link from "../components/link";
import Router from "../routes/router";
import addlogo from "../icon/addlogo";
import todoList from "../components/todoList/todoList";
import button from "../components/ui/button/button";


const onRequestNewPage = function(e){
    e.preventDefault();
    Router('/add')
}

const toDoPage = function(){
    const div = document.createElement('div')
    div.classList.add('toDoPage')
    const pageHeader = document.createElement('header')
    pageHeader.classList.add('toDoPage-header')
    const logoElm = logo()
    const h1 = header ('h1','Bingo')
    const p = tagline('Time to play')
    pageHeader.append(logoElm)
    pageHeader.append(h1)
    pageHeader.append(p)
    div.append(pageHeader)


    const main = document.createElement('main')
    div.append(main)
    
    const category = todoList() 
    main.append(category)
    
    
    
    const pageFooter = document.createElement('footer')
    const footerDiv = document.createElement('div')
    footerDiv.classList.add('footerDiv')
    const linkElm = button(addlogo,'addbutton')
    linkElm.addEventListener('click',onRequestNewPage)
    footerDiv.append(linkElm)
    pageFooter.append(footerDiv)
    div.append(pageFooter)
    return div
}

export default toDoPage