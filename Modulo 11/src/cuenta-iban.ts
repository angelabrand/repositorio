// Queremos poder leer IBAN con espacios, sin espacios, o guiones, por ejemplo:

// ES2114650100722030876293

//

// Valida que un IBAN este bien formado.

//mi expresion regular: /^(ES\d{2}(\-|\s)?\d{4}(\-|\s)?\d{4}(\-|\s)?\d{2}(\-|\s)?\d{10})|(ES\d{2}\d{4}\d{4}\d{2}\d{10})$/

const regEx =
  /^ES\d{2}(?:([ -])\d{4}\1\d{4}\1\d{2}\1\d{10}|\d{4}\d{4}\d{2}\d{10})$/;
const prEx = [
  "ES21 1465 0100 72 2030876293",
  "ES2114650100722030876293",
  "ES21-1465-0100-72-2030876293",
  "ES6621000418401234567891",
  "ES21-1234 0123-931234876589",
];

prEx.forEach((value) => {
  console.log(`match: ${value}`, regEx.test(value));
});
