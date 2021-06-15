
const cipher = {
encode: function encrypt (offset, string) {
  const offsetEmpty = !offset;
  const offsetNotNumber = typeof offset !== "number";
  if(offsetEmpty || offsetNotNumber){
    throw new TypeError;
  }

  const stringEmpty = !string;
  const notString = typeof string !== "string";
  if(stringEmpty || notString){
    throw new TypeError;
  }

  if(offset < 0){
    offset = Math.abs(offset); 
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

    if(letterCode >= 199 && letterCode <= 255){
      letterCode = ((letterCode - 199 + offset) % 57 + 199);
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

  const stringEmpty = !string;
  const notString = typeof string !== "string";
  if(stringEmpty || notString){
    throw new TypeError;
  }

  if(offset < 0){
    offset = Math.abs(offset); 
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

    if(letterCode >= 199 && letterCode <= 255){
      letterCode = ((letterCode - 255 - offset) % 57 + 255);
    }
    stringDecrypt += String.fromCharCode(letterCode)
  }
  return stringDecrypt;
}
}
export default cipher;
