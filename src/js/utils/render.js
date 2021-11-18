import makeElement from "./makeElement";

const render = function(template, data){
    const templateStringLiteral = template(data)
    const markup = makeElement(templateStringLiteral)
    return markup
}

export default render