import makeElement from "../../utils/makeElement"

const tagline = function(message=''){
    const template =`<p>${message}</p>`
    const element = makeElement(template)
    return element
}

export default tagline
