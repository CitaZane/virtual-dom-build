import createElement from './vdom/createElement'
import render from './vdom/render'
import mount from './vdom/mount'
import diff from './vdom/diff'


const createVApp = count => {
    const vImg = createElement('img', {attrs:{src: 'https://media.giphy.com/media/cuPm4p4pClZVC/giphy.gif'}})
    const vApp = createElement('div', {attrs:{id:'app', dataCount:count}, children:['The current count is: ', String(count), ...Array.from({length:count}, () => vImg)]});
    return vApp
}

let vApp = createVApp(0)
const $app = render(vApp);
let $rootEl  = mount($app, document.getElementById('app'));


setInterval(() => {
     const n = Math.floor(Math.random() * 10);
     const vNewApp = createVApp(n);
     const patch = diff(vApp, vNewApp);
     // we might replace the whole $rootEl,
  // so we want the patch will return the new $rootEl
    $rootEl = patch($rootEl)

    vApp = vNewApp
    // $rootEl = mount(render(createVApp(count)), $rootEl)
}, 1000)