// 01
// Criar um método para ler todas as propriedades de um objeto
// Exiba somente as propriedades do tipo string que estão nesse objeto

// let filmes = {
//   titulo: "Vingadores",
//   ano: 2022,
//   ValorProdução: 3000000
// }

// function exibirPropriedades(obj) {
//   for (prop in obj) {
//     if (typeof obj[prop] === 'string') {
//       console.log(prop,obj[prop])
//     }
//   }
// }

// exibirPropriedades(filmes)

// 02
// Criar função somar que retorna
// Múltiplos de 3 e 5

// Múltiplos de 3
// 3, 6, 9
// Múltiplos de 5
// 5, 10

// Somando os múltiplos
// Armazenar os múltiplos de 3
// Armazenar os múltiplos de 5
// Somar os dois


// function somar(limite) {
//   let multiplosDe5 = 0;
//   let multiplosDe3 = 0;
//   for (i = 0; i <= limite; i++) {
//     if (i % 5 === 0) {
//       multiplosDe5 += i;
//     }
//     if (i % 3 === 0) {
//       multiplosDe3 += i;
//     }
//   }
//   let somaDosMultiplos = multiplosDe3 + multiplosDe5
//   console.log(somaDosMultiplos)
// }

// somar(3)


// Obtenha a média a partir de um array
// 0-59: F
// 60-69: D
// 70-79: C
// 80-89: B
// 90-100: A

// Tentativa 
// let notas = []
// notas.push(prompt("Digite a sua primeira nota:"))
// notas.push(prompt("Digite a sua segunda nota:"))
// notas.push(prompt("Digite a sua terceira nota:"))
// notas.push(prompt("Digite a sua quarta nota:"))

// let somaNotas = notas.reduce((total, quantidade) => total + quantidade)
// let mediaFinal = somaNotas / notas.length

// function mediaDoAluno(mediaFinal) {
//   console.log(mediaFinal)
//   switch (mediaFinal) {
//     case mediaFinal >= 0 && mediaFinal <= 59:
//       console.log("Nota F")
//       break;
//     case mediaFinal >= 60 && mediaFinal <= 69:
//       console.log("Nota D")
//       break;
//     case mediaFinal >= 70 && mediaFinal <= 79:
//       console.log("Nota C")
//       break;
//     case mediaFinal >= 80 && mediaFinal <= 89:
//       console.log("Nota B")
//       break;
//     case mediaFinal >= 90 && mediaFinal <= 100000:
//       console.log("Nota A")
//       break;
  
//     default:
//       break;
//   }
// }
// mediaDoAluno(mediaFinal)
// console.log(mediaFinal)