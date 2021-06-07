import cipher from './cipher.js';

function criptografar () {
    let offsetInput = document.querySelector("#chave");
    let offset = parseInt(offsetInput.value);
    let wordInput = document.querySelector("#palavra");
    let word = wordInput.value;
    wordInput.value = cipher.encode(offset, word);
}
let botaoCriptografar = document.querySelector("#criptografar");
botaoCriptografar.addEventListener("click", criptografar);

function descriptografar () {
    let offsetInput = document.querySelector("#chave");
    let offset = parseInt(offsetInput.value);
    let wordInput = document.querySelector("#palavra");
    let word = wordInput.value;
    wordInput.value = cipher.decode(offset, word);
}
let botaoDescriptografar = document.querySelector("#descriptografar");
botaoDescriptografar.addEventListener("click", descriptografar);










// console.log(cipher.encode(3, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'));
// console.log(cipher.decode(3, 'HIJKLMNOPQRSTUVWXYZABCDEFG'));




