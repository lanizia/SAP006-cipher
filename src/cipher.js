
const cipher = {
encode: function(offset, string) {
  let wordCripto = "";
  for(let i = 0; i < string.length; i++) {
    const letterCode = string.charCodeAt(i);
    const newLetterCode = String.fromCharCode(((letterCode - 65 + offset) % 26 + 65));
    wordCripto += newLetterCode;
  }
  return wordCripto
},
decode: function (offset, string) {
  let wordDecripto = "";
  for(let i = 0; i < string.length; i++) {
    const letterCode = string.charCodeAt(i);
    const newLetterCode = String.fromCharCode(((letterCode - 90 - offset) % 26 + 90));
    wordDecripto += newLetterCode;
  }
  return wordDecripto
}
}
export default cipher;
