import logo from "../icon/logo";
import header from "../components/header";
import tagline from "../components/tagline"
import link from "../components/link";
import Router from "../routes/router";
import error from "../icon/error";

const onRequestNewPage = function(e){
    e.preventDefault();
    Router(e.currentTarget.dataset.path)
}


const pageNotFound = function(){
    const page = document.createElement('div')
    const pageHeader = document.createElement('header')
    pageHeader.classList.add('errorPage-header')
    const logoElm = logo()
    const h1 = header ('h1', 'Bingo')
    const p = tagline('Bingo is life')
    const linkElm = link('go back', '/toDoPage')
    linkElm.addEventListener('click',onRequestNewPage)
    pageHeader.append(logoElm)
    pageHeader.append(h1) 
    pageHeader.append(p)
    const pageMain = document.createElement('main')
    pageMain.classList.add('errorContent')
    const errorElm = error()
    pageMain.append(errorElm)
    pageMain.append(linkElm)
    page.append(pageHeader)
    page.append(pageMain)
    return page
}

export default pageNotFound