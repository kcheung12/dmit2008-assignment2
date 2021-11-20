import { getStore, updateStore } from "./store"

function reducer (action){

    switch(action.type){
        case "delete": 
            const store = getStore()
            const index = action.payload.index
            const newStore = [...store.slice(0,index),...store.slice(index+1)]
            updateStore(newStore)
            action.cb()
            break
        case "edit": 

            const data = getStore()
            const indx = action.payload.index
            const cat = action.payload.newCat
            const newC = Object.assign(data[indx],cat)

            const newStore2 = [...data.slice(0,indx),newC,...data.slice(indx+1)]
            updateStore(newStore2)
            
            action.cb()
            break
        case "add": 
            const store2 = getStore()
            const newCat = action.payload.newCat
            const newStore3 = store2.concat(newCat)
            updateStore(newStore3)
            action.cb()
            break
        default: return store
    }
}

export default reducer
