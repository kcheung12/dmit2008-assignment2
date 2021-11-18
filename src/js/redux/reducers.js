import { getStore, updateStore } from "./store"

function reducer (action){

    switch(action.type){
        case "delete": 
            const store = getStore()
            const index = action.payload.index
            const newStore = [...store.slice(0,index),...store.slice(index+1)]
            updateStore(newStore)
        action.cb()
        case "edit": return "edit cat";    
        case "add": return "create a new cat";
        default: return store
    }
}

export default reducer
