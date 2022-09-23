/* -------------------------------------------------------------------------- */
/*                                   render                                   */
/* -------------------------------------------------------------------------- */
// translator from vDOM to the real thing
// function takes in vDOM element and returns genuin DOM elem

const render = (vNode) => {
    // create the element
    const $el = document.createElement(vNode.tag);

    // add all attributes specified on vNode.attrs
    for (const [k, v] of Object.entries(vNode.attrs)){
        $el.setAttribute(k,v)
    }

    // append all children
    for (const child of vNode.children){
        $el.appendChild(render(child));
    }

    return $el;
}

export default render;