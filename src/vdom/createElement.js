/* -------------------------------------------------------------------------- */
/*                               create element                               */
/* -------------------------------------------------------------------------- */
// Function simply returns vDOM element
// To allow creating elements without any options, default values provided

export default (tag, { attrs = {}, children = [] } = {}) => {
    // element first defined as null to NOT inherit js Object properties
    // and because of that it is 'purer' - without uneccasary inheritance
    const vElem = Object.create(null);
    
    Object.assign(vElem, {
        tag,
        attrs,
        children
    })
    return vElem
}