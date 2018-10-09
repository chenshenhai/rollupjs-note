import $ from 'jquery';

const text = 'this is append dom';
const dom = `<p>${text}</p>`;

$('body').append(dom);

console.log('render end!')


