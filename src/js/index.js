

import { createStore } from "./redux/store"
import Router from "./routes/router"
import dataFetcher from "./utils/dataFertcher"




const onAppInit = async function(e){
    let data = await dataFetcher('https://raw.githubusercontent.com/kcheung12/DMIT2008-Assignment1/main/dist/data/todos.json')
    createStore(data)
    Router(window.location.pathname)
}

window.addEventListener('load', onAppInit)