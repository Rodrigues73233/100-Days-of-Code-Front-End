let raio = prompt('Digite o raio do circulo ?')

raio = parseFloat(raio);

  var comprimento = 2 * Math.PI * raio;
  var area = Math.PI * raio * raio;

  document.write("Comprimento da circunferencia = ", comprimento.toFixed(1), "<br>");
  document.write("Area da circunferencia = ", area.toFixed(1));