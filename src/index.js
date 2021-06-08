import cipher from './cipher.js';

function onEncrypt () {
    let offsetInput = document.querySelector("#keyInput");
    let offset = parseInt(offsetInput.value);
    let wordInput = document.querySelector("#textInput");
    let word = wordInput.value;
    wordInput.value = cipher.encode(offset, word);
}
let btnEncrypt = document.querySelector("#encrypt");
btnEncrypt.addEventListener("click", onEncrypt);

function onDecrypt () {
    let offsetInput = document.querySelector("#keyInput");
    let offset = parseInt(offsetInput.value);
    let wordInput = document.querySelector("#textInput");
    let word = wordInput.value;
    wordInput.value = cipher.decode(offset, word);
}
let btnDecrypt = document.querySelector("#decrypt");
btnDecrypt.addEventListener("click", onDecrypt);










// console.log(cipher.encode(3, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'));
// console.log(cipher.decode(3, 'HIJKLMNOPQRSTUVWXYZABCDEFG'));




