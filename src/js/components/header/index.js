import makeElement from "../../utils/makeElement"

const header = function(elementType='h2', label='ui header' ,className='ui-header'){
    const template =`<${elementType} class="${className}">${label}</h1>`
    const element = makeElement(template)
    return element
}

export default header
