/* -------------------------------------------------------------------------- */
/*                                    mount                                   */
/* -------------------------------------------------------------------------- */
// mounting elements on real DOM

export default ($node, $target)=>{
    $target.replaceWith($node);
    return $node
}