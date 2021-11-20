import { getStore, updateStore } from "./store"

function reducer (action){

    switch(action.type){
        case "delete": 
            const store = getStore()
            const index = action.payload.index
            const newStore = [...store.slice(0,index),...store.slice(index+1)]
            updateStore(newStore)
            action.cb()
        case "edit": 


            const data = getStore()
            const indx = action.payload.index
            console.log(data[indx])
            const cat = action.payload.newCat
            console.log(cat)
            const newC = Object.assign(data[indx],cat)
            console.log(newC)

            const newStore2 = [...data.slice(0,indx),newC,...data.slice(indx+1)]
            updateStore(newStore2)
            
            action.cb()

        case "add": return "create a new cat";
        default: return store
    }
}

export default reducer
