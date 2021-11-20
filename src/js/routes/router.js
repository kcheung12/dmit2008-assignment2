import home from "../pages/home";
import pageNotFound from "../pages/pageNotFound";
import toDoPage from "../pages/toDoPage";
import deletePage from "../pages/deletePage";
import editPage from "../pages/editPage";
import addPage from "../pages/addPage";

const routes = {
    '/': home,
    '/toDoPage': toDoPage,
    '/delete': deletePage,
    '/edit': editPage,
    '/add': addPage
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
        if(routes[isValidRoute] == routes['/edit'] && params == null)
            app.appendChild(routes['/add'](params))
        else if(routes[isValidRoute] == routes['/delete'] && params == null)
            app.appendChild(routes['/toDoPage'](params))
        else
            app.appendChild(routes[isValidRoute](params))
    }
}

export default Router