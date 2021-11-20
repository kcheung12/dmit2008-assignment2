import logo from "../icon/logo"
import header from "../components/header"
import tagline from "../components/tagline"
import form from "../components/form"
import { getStore } from "../redux/store"
import button from "../components/ui/button/button"
import Router from "../routes/router"
import reducer from "../redux/reducers"



const editPage = function(props){
    function onCancelEdit(e){
        e.preventDefault();
        Router('/toDoPage')
    }
    function onEditEvent(e){
        e.preventDefault();
        const index = getStore().findIndex((cat)=>{
            return (cat.id === props.id)
        })
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
        
        const action = { 
            type:"edit",
            payload:{index,newCat},
            cb: ()=>{
                Router('/toDoPage')
            }
        }

        reducer(action)

    }

    
    const page = document.createElement('div')
    page.classList.add('toDoPage')
    const cancelButton = button('Cancel')
    const editButton = button("Edit to do","editButton")
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
    const h2 = header('h2','Edit To Do Item','editHeader')

    const editForm = form(props)
    const checkBox = editForm.querySelector('#isComplete') 
    const catList = editForm.querySelector('#cat')

    if(props!=null){
        if(props.isComplete !== false)
            checkBox.checked = true
        if(props.category !== null)
            catList.value = props.category
    }

    editButton.addEventListener('click', onEditEvent)
    cancelButton.addEventListener('click', onCancelEdit)
    editForm.querySelector('div.controlDiv').append(cancelButton,editButton)
    main.append(h2)
    main.append(editForm)

    page.append(main)

    return page
}

export default editPage