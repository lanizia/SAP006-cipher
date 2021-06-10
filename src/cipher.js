
//Código para criptografar letras maiúsculas e minúsculas.

const cipher = {
encode: function encrypt (offset, string) {
  let stringCripto = "";
  for(let i = 0; i < string.length; i++) {
    let letterCode = string.charCodeAt(i);

    if(letterCode >= 65 && letterCode <= 90 ) {
      letterCode = ((letterCode - 65 + offset) % 26 + 65);
    }
    if(letterCode >= 97 && letterCode <= 122 ) {
      letterCode = ((letterCode - 97 + offset) % 26 + 97);
    }
    stringCripto += String.fromCharCode(letterCode);
    
  }
  return stringCripto
},
decode: function decrypt (offset, string) {
  let stringDecripto = "";
  for(let i = 0; i < string.length; i++) {
    let letterCode = string.charCodeAt(i);
    
    if(letterCode >= 65 && letterCode <= 90){
      letterCode = ((letterCode - 90 - offset) % 26 + 90);
    }
    if(letterCode >= 97 && letterCode <= 122) {
      letterCode = ((letterCode - 122 - offset) % 26 + 122);
    }
    stringDecripto += String.fromCharCode(letterCode)
  }
  return stringDecripto
}
}

//Código desenvolvido para o uso de apenas letras maiúsculas.

// const cipher = {
//   encode: function(offset, string) {
//     let wordCripto = "";
//     for(let i = 0; i < string.length; i++) {
//       const letterCode = string.charCodeAt(i);
//       const newLetterCode = String.fromCharCode(((letterCode - 65 + offset) % 26 + 65));
//       wordCripto += newLetterCode;
//     }
//     return wordCripto
//   },
//   decode: function (offset, string) {
//     let wordDecripto = "";
//     for(let i = 0; i < string.length; i++) {
//       const letterCode = string.charCodeAt(i);
//       const newLetterCode = String.fromCharCode(((letterCode - 90 - offset) % 26 + 90));
//       wordDecripto += newLetterCode;
//     }
//     return wordDecripto
//   }
//   }
export default cipher;
