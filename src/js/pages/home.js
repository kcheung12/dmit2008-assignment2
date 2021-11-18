
import logo from "../icon/logo";
import header from "../components/header";
import tagline from "../components/tagline";
import link from "../components/link";
import Router from "../routes/router";


const onRequestNewPage = function(e){
    e.preventDefault();
    Router(e.currentTarget.dataset.path)
}

const home = function(){
    const pageHeader = document.createElement('header')
    pageHeader.classList.add('homePage-header')
    const logoElm = logo()
    const h1 = header ('h1', 'Bingo')
    
    const p = tagline('Bingo is life')
    const linkElm = link('To Do App', '/toDoPage')
    linkElm.addEventListener('click',onRequestNewPage)
    pageHeader.append(logoElm)
    pageHeader.append(h1)
    pageHeader.append(p)
    pageHeader.append(linkElm)
    
    return pageHeader
}

export default home