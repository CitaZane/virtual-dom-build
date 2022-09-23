import createElement from './vdom/createElement'
import render from './vdom/render'
import mount from './vdom/mount'

const vImg = createElement('img', {attrs:{src: 'https://media.giphy.com/media/cuPm4p4pClZVC/giphy.gif'}})
const vApp = createElement('div', {attrs:{id:'app'}, children:['Hello world',vImg]});

const $app = render(vApp);
mount($app, document.getElementById('app'));