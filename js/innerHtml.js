'use strict';
console.log('innerHtml.js file was loaded');

// taikomes
const outputEl = document.getElementById('output');
const ulEl = document.querySelector('#color-list');
// nusitaikyti i paskutini li
const lastLi = document.querySelector('li:last-child ');

console.log('lastLi ===', lastLi);
console.log('outputEl ===', outputEl);
outputEl.textContent = '<h2>I am sub title</h2>';
outputEl.innerText = '<h2>I am sub title</h2>';
outputEl.innerHTML = '<h2>I am sub title</h2>';

//
console.log('ulEl.innerHTML ===', ulEl.innerHTML);
// isvalyti sarasa
// ulEl.innerHTML = '';
