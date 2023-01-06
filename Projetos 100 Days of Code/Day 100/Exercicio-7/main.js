// Um sistema de equações lineares do tipo:

// ax + by = c
// dx + ey = f, pode ser resolvido segundo mostrado abaixo :

// x = ce - bf / ae - bd,
// y = af - cd / ae - bd

// // Escreva um sistema que lê os coeficientes a,b,c,d,e e f e calcula e mostra os valores de x e y.



function calculaX(a, b, c , d, e, f, x, y) {
  x = (((c * e) - (b * f)) / ((a * e) - (b * d)))
  c = (a * x) + (b * y) 
  

  console.log(x)
}

function calculaY(a, b, c , d, e, f, x, y) {
  y = (((a * f) - (c * d)) / ((a * e) - (b * d)))
  f = (d * x) + (e * y)


  console.log(y)
}

calculaX(1, 2, 3, 4, 5, 6)

calculaY(1, 2, 3, 4, 5, 6)