// Faça um sistema que leia as 3 notas de um aluno e calcule a média final deste aluno. Considerar que a média é ponderada e que o peso das notas é: 2,3 e 5, respectivamente.

function calculaNotas(nota1, nota2, nota3) {
  mediaFinal = ((nota1 * 2) + (nota2 * 3) + (nota3 * 5)) / 10
  nota = mediaFinal.toFixed()
  console.log(nota)
}

calculaNotas(6, 7, 5)
