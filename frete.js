// frete.js = CÓDIGO DE PRODUÇÃO: calcula o frete de uma entrega

// recebe a distância da entrega em quilômetros e devolve o frete em reais
function calcularFrete(distanciaKm) {
  // distância negativa não existe: avisa que algo deu errado
  if (distanciaKm < 0) {
    throw new Error('distância inválida');
  }
  // até 5 km: taxa fixa de R$ 7
  if (distanciaKm <= 5) {
    return 7;
  }
  // acima de 5 km: R$ 7 mais R$ 1 por km que passou dos 5
  return 7 + (distanciaKm - 5);
}

// deixa a função visível para outros arquivos (os testes)
module.exports = { calcularFrete };
