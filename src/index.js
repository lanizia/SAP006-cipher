import cipher from './cipher.js';

const offsetInput = document.querySelector("#keyInput");
const wordInput = document.querySelector("#textInput");
const result = document.querySelector("#result");
const btnEncrypt = document.querySelector("#encrypt");
const btnDecrypt = document.querySelector("#decrypt");

function onEncrypt () { 
    const offset = parseInt(offsetInput.value);
    const word = wordInput.value;
    wordInput.value = "";
    result.value = cipher.encode(offset, word);
}

btnEncrypt.addEventListener("click", onEncrypt);

function onDecrypt () {
    const offset = parseInt(offsetInput.value);
    const word = wordInput.value;
    wordInput.value = "";
    result.value = cipher.decode(offset, word);
}

btnDecrypt.addEventListener("click", onDecrypt);

// Função para manter as letras maíusculas (descomentar para implementar a função.)
// function onKeyUp (event) {
//     event.target.value = event.target.value.toUpperCase()
// }

// wordInput.addEventListener("keyup", onKeyUp);










// testes
// console.log(cipher.encode(3, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'));
// console.log(cipher.decode(3, 'HIJKLMNOPQRSTUVWXYZABCDEFG'));




