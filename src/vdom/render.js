/* -------------------------------------------------------------------------- */
/*                                   render                                   */
/* -------------------------------------------------------------------------- */
// translator from vDOM to the real thing
// function takes in vDOM element and returns genuin DOM elem

// event handling funcionality
// EventDictionary implements the EventListener interface by fn ->handleEvent(e)
const EventDictionary = {
    // registering on event handlers
    handleEvent(e){
        const eventHandler = this[`on${e.type}`];
        const result = eventHandler.call(e.currentTarget, e)

        if(result===false){
            e.preventDefault();
            e.stopPropagation();
        }
    }
}
const renderElem = ({tag, attrs, children}) => {
    // create the element
    const $el = document.createElement(tag);

    // add all attributes specified on vNode.attrs
    for (const [k, v] of Object.entries(attrs)){
        // deal with event handlers
        if (k[0] === 'o' && k[1] === 'n'){
            const events = Object.create(EventDictionary);
            $el.addEventListener(k.slice(2), events);
            events[k] = v;
        }
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