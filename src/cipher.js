
const cipher = {
encode: function encrypt (offset, string) {
  const offsetEmpty = !offset;
  const offsetNotNumber = typeof offset !== "number";
  if(offsetEmpty || offsetNotNumber){
    throw new TypeError;
  }

  let stringEncrypt = "";
  for(let i = 0; i < string.length; i++) {
    let letterCode = string.charCodeAt(i);

    if(letterCode >= 65 && letterCode <= 90 ) {
      letterCode = ((letterCode - 65 + offset) % 26 + 65);
    }
    if(letterCode >= 97 && letterCode <= 122 ) {
      letterCode = ((letterCode - 97 + offset) % 26 + 97);
    }
    stringEncrypt += String.fromCharCode(letterCode);
    
  }
  return stringEncrypt
},

decode: function decrypt (offset, string) {
  const offsetEmpty = !offset;
  const offsetNotNumber = typeof offset !== 'number';
  if(offsetEmpty || offsetNotNumber){
    throw new TypeError;
  }

  let stringDecrypt = "";
  for(let i = 0; i < string.length; i++) {
    let letterCode = string.charCodeAt(i);
    
    if(letterCode >= 65 && letterCode <= 90){
      letterCode = ((letterCode - 90 - offset) % 26 + 90);
    }
    if(letterCode >= 97 && letterCode <= 122) {
      letterCode = ((letterCode - 122 - offset) % 26 + 122);
    }
    stringDecrypt += String.fromCharCode(letterCode)
  }
  return stringDecrypt;
}
}
export default cipher;
