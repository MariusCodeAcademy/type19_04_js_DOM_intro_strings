'use strict';
console.log('dom.js file was loaded');

// gauti #intro el teksta
// pakeisti #intro el teksta
// darasyti kazka prie intro el tekxo

// nusitaikyti ir gauti kintamaji kur rodo i ta el
const pIntroEl = document.getElementById('intro');
console.log('pIntroEl ===', pIntroEl);

// gauti teksta is elemento
let pText = pIntroEl.textContent;
console.log('pText ===', pText);

// pakeisti #intro el teksta
// pIntroEl.textContent =
//   'Sitas tekstas yra dinamiskas ir nesimato per vie page source';

// pIntroEl.textContent = prompt('apie ka');

// darasyti po intro tekstu " about DOM"

pIntroEl.textContent = pText + ' about DOM';
// pIntroEl.textContent = pIntroEl.textContent + ' about DOM';
// pIntroEl.textContent += ' about DOM';

// padidinti intro teksta i 50px
pIntroEl.style.fontSize = '50px';
pIntroEl.style.lineHeight = 1;

// prideti(perrasyti) klase
pIntroEl.className = 'dynamic';

// pakeisti <li id="pirma">red</li> spalva
// nusitaikom i el
const liElSpalva = document.getElementById('pirma');
// keisti jo tektas su textContent
liElSpalva.textContent = 'yellow';
liElSpalva.style.background = 'yellow';
// gauti nuoroda i sarasa <ul id="color-list"> su document.getElementById ir su document.querySelector();
const listCol = document.getElementById('color-list');
console.log('listCol ===', listCol);
const listSelector = document.querySelector('#color-list');
console.log('listSelector ===', listSelector);
// gauti visus li su document.querySelectorAll();

const lis = document.querySelectorAll('#color-list > li');
console.log('lis ===', lis);

const h1El = document.querySelector('.main-title');
console.log('h1El ===', h1El);
