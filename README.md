# Cifra de César

## Índice

* [1. Prefácio](#1-prefácio)
* [2. Resumo do projeto](#2-resumo-do-projeto)
* [3. Objetivos de aprendizagem](#3-objetivos-de-aprendizagem)
* [4. Considerações gerais](#4-considerações-gerais)
* [5. Critérios de aceitação mínimos do
  projeto](#5-critérios-de-aceitação-mínimos-do-projeto)

***

## 1. Prefácio

Cifrar significa codificar. A [cifra de
César](https://pt.wikipedia.org/wiki/Cifra_de_C%C3%A9sar) é um dos primeiros
tipos de criptografias conhecidas na história. O imperador romano Júlio César
utilizava essa cifra para enviar ordens secretas aos seus generais no campo de
batalha.

![caeser-cipher](https://user-images.githubusercontent.com/11894994/60990999-07ffdb00-a320-11e9-87d0-b7c291bc4cd1.png)

A cifra de César é uma das técnicas mais simples de cifrar uma mensagem. É um
tipo de cifra por substituição, em que cada letra do texto original é
substituida por outra que se encontra há um número fixo de posições
(deslocamento) mais a frente do mesmo alfabeto.

Por exemplo se usarmos o deslocamento (_offset_) de 3 posições:

* Alfabeto sem cifrar: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
* Alfabeto com cifra:  D E F G H I J K L M N O P Q R S T U V W X Y Z A B C
* A letra A será D
* A palavra CASA será FDVD

Atualmente todas as cifras de substituição alfabética simples, são decifradas
com facilidade e não oferecem muita segurança na comunicação, mas a cifra de César
muitas vezes pode fazer parte de um sistema mais complexo de criptografia, como
a cifra de Vigenère, e tem aplicação no sistema ROT13.

## 2. Resumo do projeto

Neste projeto criei minha primeira aplicação web no _bootcamp_ da Laboratória.
Nela o usuário poderá cifrar e decifrar palavras para serem utilizadas como senhas,
bastando indicar a chave de deslocamento (_offset_).
O desenho do projeto foi definido de forma que trouxesse simplicidade e clareza para o usuário.

## 3. Objetivos de aprendizagem

Neste projeto aprendi a construir uma aplicação web (_WebApp_) que
interage com o usuário final através do navegador utilizando HTML, CSS e
JavaScript como ferramentas.

### HTML e CSS

* [x] [Uso de HTML semântico.](https://developer.mozilla.org/pt-BR/docs/Glossario/Semantica#Sem%C3%A2ntica_em_HTML)
* [x] Uso de seletores de CSS.

### DOM

* [x] Uso de seletores do DOM.
* [x] Manipular eventos do DOM.
* [x] [Manipulação dinâmica do DOM.](https://developer.mozilla.org/pt-BR/docs/DOM/Referencia_do_DOM/Introdu%C3%A7%C3%A3o)
(appendChild |createElement | createTextNode| innerHTML | textContent | etc.)

### JavaScript

* [x] Manipulação de strings.
* [x] Uso de condicionais (if-else | switch | operador ternário)
* [x] Uso de laços _(loops)_ (for | for..in | for..of | while)
* [x] Uso de funções (parâmetros | argumentos | valor de retorno)
* [x] Declaração correta de variáveis (const & let)

### Testing

* [x] [Teste unitário.](https://jestjs.io/docs/pt-BR/getting-started)

### Estrutura do código e guia de estilo

* [x] Organizar e dividir o código em módulos (Modularização)
* [x] Uso de identificadores descritivos (Nomenclatura | Semântica)
* [x] Uso de linter (ESLINT)

### Git e GitHub

* [x] Uso de comandos de git (add | commit | pull | status | push)
* [x] Gerenciamento de repositorios de GitHub (clone | fork | gh-pages)

### UX

* [x] Desenhar a aplicação pensando e entendendo o usuário.
* [x] Criar protótipos para obter feedback e iterar.
* [x] Aplicar os princípios de desenho visual (contraste, alinhamento, hierarquia)

## 4. Considerações gerais
* O projeto foi realizado individualmente.
* Tive bastante apoio técnico das mentoras da LAB e colegas de bootcamp.
* Projeto foi desenvolvido com uma média de 2 sprints (14 dias).

## 5. Critérios do projeto

O projeto utiliza o alfabeto simples (sem ç).
Aceita o uso de letras maiúsculas e minúsculas sem acentuação.

## 6. Definição do produto

O produto foi desenvolvido para todo e qualquer usuário que tenha interesse em 
tornar suas palavras favoritas em senhas seguras.
A aplicação além de ser divertida, possibilita ao usuários a experiência de criação
de senhas códificadas para uso em seus aplicativos, dispositivos móveis, acessos de contas, etc... 
Impedindo assim, que terceiros não autorizados acessem com facilidade seus dados.

### Interface do usuário (UI)

A interface da aplicação permite ao usuário

* Eleger um _offset_ indicando quantas posições de deslocamento de caracteres
  quer que a cifra utilize.
* Inserir uma mensagem (texto) para ser cifrada.
* Ver o resultado da mensagem cifrada.
* Inserir uma mensagem (texto) para ser decifrada.
* Ver o resultado da mensagem decifrada.

