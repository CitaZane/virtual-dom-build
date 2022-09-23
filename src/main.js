import createElement from './vdom/createElement'
const vImg = createElement('img', {attrs:{src: 'https://media.giphy.com/media/cuPm4p4pClZVC/giphy.gif'}})
const vApp = createElement('div', {attrs:{id:'app'}, children:[vImg]});

console.log(vApp);