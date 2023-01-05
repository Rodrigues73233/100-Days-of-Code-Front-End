// Escreva um sistema que leia três números inteiros e positivos (A, B, C) e calcule a seguinte expressão:

// D = R + S / 2
// R = (A + B)²

// ,onde S = (B+C)²


let A = 21;
let B = 32;
let C = 43;

let D;
let S;
let R;

function calcula(A, B, C) {
  R = (A + B)^2
  S = (B + C)^2
  D = R + S / 2
  console.log(D, R, S)
}

calcula(A, B, C)