

import { createStore } from "./redux/store"
import Router from "./routes/router"
import dataFetcher from "./utils/dataFertcher"
import { keyGenerator } from "./utils/key"




const onAppInit = async function(e){

    let data = await dataFetcher('./data/todos.json')

    data.forEach(item => {
        if(item.id == undefined)
        {
            keyGenerator(item)
        }
    })
    createStore(data)
    Router(window.location.pathname)
}

window.addEventListener('load', onAppInit)