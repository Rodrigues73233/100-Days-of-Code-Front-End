// Construa um programa em c que, tendo como dados de entrada dois pontos quaisquer no plano, P(x1, y1) e P(x2, y2), escreva a distância entre eles. A fórmula que efetua tal cálculo é: d = √(x2-x1)² + (y2-y1)²

const calcularDistancia = function(ponto1, ponto2) {
  let x1 = ponto1.x,
      x2 = ponto2.x,
      y1 = ponto1.y,
      y2 = ponto1.y;

  let equacao1 = Math.pow((x2 - x1), 2),
      equacao2 = Math.pow((y2 - y1), 2);

  let distancia = Math.sqrt(equacao1 + equacao2);
  return distancia;
};

function Ponto() {
  this.x = 0;
  this.y = 0;
};

(function() {
  let ponto1 = new Ponto(),
      ponto2 = new Ponto();

  ponto1.x = 1;
  ponto1.y = 2;

  ponto2.x = 3;
  ponto2.y = 4;

  let resultado = calcularDistancia(ponto1, ponto2);
  console.log(resultado);
})();