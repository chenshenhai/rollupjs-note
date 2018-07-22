import pkg from './../package.json';

const dom = document.getElementById('J_Code');
const pkgText = JSON.stringify(pkg);
const showCode = `<code>${pkgText}</code>`;

dom.innerHTML = showCode;

