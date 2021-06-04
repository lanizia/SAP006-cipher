
const cipher = {
encode: function(offset, word) {
  let wordCripto = "";
  for(let i = 0; i < word.length; i++) {
    const letter = word[i];
    const letterCode = letter.charCodeAt();
    const newLetterCode = String.fromCharCode(((letterCode + 65 + offset) % 26 - 65));
    wordCripto += newLetterCode
  }
  return wordCripto
},
decode: function (offset, word) {
  let wordDecripto = "";
  for(let i = 0; i < word.length; i++) {
    const letter = word[i];
    const letterCode = letter.charCodeAt();
    const newLetterCode = String.fromCharCode(((letterCode - 90 - offset) % 26 + 90));
    wordDecripto += newLetterCode;
  }
  return wordDecripto
}
}
export default cipher;
