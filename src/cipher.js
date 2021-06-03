
const cipher = {
  encode: function(text, offset) {
    let resultado = "";
    for(let i=0; i < text.length; i++) {
      const letra = text[i];
      const codigoDaLetra = letra.charCodeAt();
      const novaLetra = String.fromCharCode((((codigoDaLetra - 65 + offset) % 26) + 65))
      resultado = resultado + novaLetra;
    }
    return resultado;
  },

  decode: function(text, offset) {

  }
};

export default cipher;
