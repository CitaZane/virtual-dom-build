/* -------------------------------------------------------------------------- */
/*                                   render                                   */
/* -------------------------------------------------------------------------- */
// translator from vDOM to the real thing
// function takes in vDOM element and returns genuin DOM elem

const renderElem = ({tag, attrs, children}) => {
    // create the element
    const $el = document.createElement(tag);

    // add all attributes specified on vNode.attrs
    for (const [k, v] of Object.entries(attrs)){
        $el.setAttribute(k,v)
    }

    // append all children
    for (const child of children){
        $el.appendChild(render(child));
    }

    return $el;
}

const render = (vNode) => {
    // return text node if element is just a string
    if (typeof vNode === "string"){
        return document.createTextNode(vNode);
    }

    // all others considered to be virtual elements
    return renderElem(vNode)
}


export default render;