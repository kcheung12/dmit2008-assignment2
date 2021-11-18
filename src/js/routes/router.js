import home from "../pages/home";
import pageNotFound from "../pages/pageNotFound";
import toDoPage from "../pages/toDoPage";
import deletePage from "../pages/deletePage";

const routes = {
    '/': home,
    '/toDoPage': toDoPage,
    '/delete': deletePage
}

const Router = function (pathname, params=null) {

    const isValidRoute = Object.keys(routes).find(key=> key === pathname)
    

    const app = document.querySelector('#app')
    app.innerHTML = ''
    window.history.pushState(
        {},
        pathname,
        window.location.origin + pathname
    )
    if(isValidRoute === undefined){
        app.appendChild(pageNotFound())
    }else{
        app.appendChild(routes[isValidRoute](params))
    }
}

export default Router