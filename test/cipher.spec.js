// Importamos o objeto `cipher`, que contém os métodos `encode` e `decode`

import cipher from '../src/cipher';

describe('cipher', () => {

  it('should be an object', () => {
    expect(typeof cipher).toBe('object');
  });

  describe('cipher.encode', () => {

    it('should be a function', () => {
      expect(typeof cipher.encode).toBe('function');
    });

    it('should throw TypeError when invoked with empty argument types', () => {
      expect(() => cipher.encode()).toThrow(TypeError);
    });

    it('should throw TypeError when invoked with wrong offset arguments', () => {
      expect(() => cipher.encode(0)).toThrow(TypeError);
      expect(() => cipher.encode(null, [])).toThrow(TypeError);
      expect(() => cipher.encode(0, 0)).toThrow(TypeError);
    });

    it('should throw TypeError when invoked with wrong string arguments', () => {
      expect(() => cipher.encode(1, [])).toThrow(TypeError);
      expect(() => cipher.encode(1, 0)).toThrow(TypeError);
    });

    it('should return "HIJKLMNOPQRSTUVWXYZABCDEFG" for "ABCDEFGHIJKLMNOPQRSTUVWXYZ" with offset 33', () => {
      expect(cipher.encode(33, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ')).toBe('HIJKLMNOPQRSTUVWXYZABCDEFG');

    });
    //adicionei esse teste para números negativos
    it('should return "HIJKLMNOPQRSTUVWXYZABCDEFG" for "ABCDEFGHIJKLMNOPQRSTUVWXYZ" with offset -33', () => {
      expect(cipher.encode(-33, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ')).toBe('HIJKLMNOPQRSTUVWXYZABCDEFG');

    });

    // Hacker edition

    // Se quiser adicionar testes para letras minúsculas, descomente o teste
    // abaixo.
    //
    it('should return "hijklmnopqrstuvwxyzabcdefg" for "abcdefghijklmnopqrstuvwxyz" with offset 33', () => {
      expect(cipher.encode(33, 'abcdefghijklmnopqrstuvwxyz')).toBe('hijklmnopqrstuvwxyzabcdefg');
    });

    it('should return "èéêëìíîïðñòóôõö÷øùúûüýþÿÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâãäåæç" for "ÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõö÷øùúûüýþÿ" with offset 33', () => {
      expect(cipher.encode(33, 'ÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõö÷øùúûüýþÿ')).toBe('èéêëìíîïðñòóôõö÷øùúûüýþÿÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâãäåæç');
    });

    // Se quiser adicionar testes para caracteres não alfabéticos, descomente o
    // teste abaixo.
    //
    it('should return " !@" for " !@"', () => {
      expect(cipher.encode(33, ' !@')).toBe(' !@');
    });
  });

  describe('cipher.decode', () => {

    it('should be a function', () => {
      expect(typeof cipher.decode).toBe('function');
    });

    it('should throw TypeError when invoked with empty argument types', () => {
      expect(() => cipher.decode()).toThrow(TypeError);
    });

    it('should throw TypeError when invoked with wrong offset arguments', () => {
      expect(() => cipher.decode(0)).toThrow(TypeError);
      expect(() => cipher.decode(null, [])).toThrow(TypeError);
      expect(() => cipher.decode(0, 0)).toThrow(TypeError);
    });

    it('should throw TypeError when invoked with wrong string arguments', () => {
      expect(() => cipher.decode(1, [])).toThrow(TypeError);
      expect(() => cipher.decode(1, 0)).toThrow(TypeError);
    });

    it('should return "ABCDEFGHIJKLMNOPQRSTUVWXYZ" for "HIJKLMNOPQRSTUVWXYZABCDEFG" with offset 33', () => {
      expect(cipher.decode(33, 'HIJKLMNOPQRSTUVWXYZABCDEFG')).toBe('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
    });
    //adicionei esse teste para números negativos
    it('should return "ABCDEFGHIJKLMNOPQRSTUVWXYZ" for "HIJKLMNOPQRSTUVWXYZABCDEFG" with offset -33', () => {
      expect(cipher.decode(-33, 'HIJKLMNOPQRSTUVWXYZABCDEFG')).toBe('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
    });

    // Hacker edition
    
    // Se quiser adicionar testes para letras minúsculas, descomente o teste
    // abaixo.
    //
    it('should return "abcdefghijklmnopqrstuvwxyz" for "hijklmnopqrstuvwxyzabcdefg" with offset 33', () => {
      expect(cipher.decode(33, 'hijklmnopqrstuvwxyzabcdefg')).toBe('abcdefghijklmnopqrstuvwxyz');
    });

    it('should return "ÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõö÷øùúûüýþÿ" for "èéêëìíîïðñòóôõö÷øùúûüýþÿÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâãäåæç" with offset 33', () => {
      expect(cipher.decode(33, 'èéêëìíîïðñòóôõö÷øùúûüýþÿÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâãäåæç')).toBe('ÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõö÷øùúûüýþÿ');
    });

    // Se quiser adicionar testes para caracteres não alfabéticos, descomente o
    // teste abaixo.
    //
    it('should return " !@" para " !@"', () => {
      expect(cipher.decode(33, ' !@')).toBe(' !@');
    });
  });

});
