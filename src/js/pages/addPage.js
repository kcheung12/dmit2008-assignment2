import logo from "../icon/logo"
import header from "../components/header"
import tagline from "../components/tagline"
import form from "../components/form"
import button from "../components/ui/button/button"
import Router from "../routes/router"
import reducer from "../redux/reducers"
import { keyGenerator } from "../utils/key"



const addPage = function(props){
    function onCancelEdit(e){
        e.preventDefault();
        Router('/toDoPage')
    }
    function onAddEvent(e){
        e.preventDefault();
        
        const newCat = {
            id:editForm.querySelector('#id').value,
            category:editForm.querySelector('#cat').value,
            title:editForm.querySelector('#title').value,
            isComplete:(editForm.querySelector('#isComplete').checked? true:false ),
            startDate:editForm.querySelector('#startDate').value,
            startTime:editForm.querySelector('#startTime').value,
            endDate:editForm.querySelector('#endDate').value,
            endTime:editForm.querySelector('#endTime').value
        }
        if(newCat.id == '')
        {
            keyGenerator(newCat)
        }
        
        const action = { 
            type:"add",
            payload:{newCat},
            cb: ()=>{
                Router('/toDoPage')
            }
        }

        reducer(action)

    }

    
    const page = document.createElement('div')
    page.classList.add('toDoPage')
    const cancelButton = button('Cancel')
    const addButton = button("Add to do","editButton")
    const pageHeader = document.createElement('header')
    pageHeader.classList.add('toDoPage-header')
    const logoElm = logo()
    const h1 = header ('h1','Bingo')
    const p = tagline('Time to play')
    pageHeader.append(logoElm)
    pageHeader.append(h1)
    pageHeader.append(p)
    page.append(pageHeader)

    const main = document.createElement('main')
    const h2 = header('h2','Add To Do Item','editHeader')

    const editForm = form(props)
    

    addButton.addEventListener('click', onAddEvent)
    cancelButton.addEventListener('click', onCancelEdit)
    editForm.querySelector('div.controlDiv').append(cancelButton,addButton)
    main.append(h2)
    main.append(editForm)

    page.append(main)

    return page
}

export default addPage