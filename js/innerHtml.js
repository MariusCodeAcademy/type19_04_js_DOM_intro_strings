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
// debugger;
// isvalyti sarasa
ulEl.innerHTML = '';
let resultLis = '';

for (let i = 0; i < 10; i++) {
  // ulEl.innerHTML = ulEl.innerHTML + `<li>violet ${i}</li>`;
  resultLis = resultLis + `<li>violet ${i}</li>`;
}
console.log('resultLis ===', resultLis);
// ulEl.innerHTML = resultLis;

// sudeti skaicius nuo 1 iki 10
// irastyi i html rezultata
// irasyti kiekvieno zingsnio suma

let sum = 0;
let liGenerate = '';
for (let i = 1; i <= 10; i++) {
  // let sum = 0;
  let tarpineSuma = sum + i;
  let stringInfo = `ciklas: ${i})  ${sum} + ${i} = ${tarpineSuma}`;
  liGenerate += `<li>${stringInfo}</li>`;
  console.log(stringInfo);
  sum = tarpineSuma;
  // console.log('i ===', i);
}
console.log('liGenerate ===', liGenerate);
ulEl.innerHTML = liGenerate;
