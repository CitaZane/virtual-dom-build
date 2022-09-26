import createElement from './vdom/createElement'
import render from './vdom/render'
import mount from './vdom/mount'
import diff from './vdom/diff'

const vButton = createElement('button', {attrs:{type:'submit'}, children: ['Search']})
const vSearch = createElement('input', {attrs:{type:'search', oninput: (e) => console.log(e.target.value)}})

const vForm = createElement('form', {
    attrs: {
        id:'form',
        onsubmit: (e) =>{
            e.preventDefault();
            console.log('SUBMIT')
        }
    }, 
    children:[
        vSearch, vButton
    ]
})

const vDropdown = createElement('select', {
    attrs:{
        onChange: (e)=> console.log(e.target.value)
    },
    children:[
        createElement('option', {
            children: ['--Please select an API--']
        }),
        createElement('option', {
            children: ['API 1']
        }),
        createElement('option', {
            children: ['API 2']
        })
    ]
})

const vSelectAPI = createElement('div',{
    children:[
        createElement('h2', {children:['Select API: ']}),
        vDropdown

    ]
})

const vContainer = createElement('div', {
    children:[
        vSelectAPI,
        vForm
    ]
})
let $app = render(vContainer)
mount($app, document.getElementById('app'))

/*
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

*/