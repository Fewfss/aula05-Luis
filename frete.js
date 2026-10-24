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
  return 7 - (distanciaKm - 5);
}

// deixa a função visível para outros arquivos (os testes)
module.exports = { calcularFrete };

// novo teste: entrega acima de 5 km
test('entrega de 10 km custa R$ 12', () => {
// R$ 7 de taxa fixa + 5 km excedentes x R$ 1 = R$ 12
assert.strictEqual(calcularFrete(10), 12);
});
// novo teste: distância negativa deve dar erro
test('distância negativa lança erro', () => {
// assert.throws passa SÓ SE a função der erro com essa mensagem
assert.throws(() => calcularFrete(-1), /distância inválida/);
});
