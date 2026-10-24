// frete.test.js = CÓDIGO DE TESTE do frete (por enquanto, só UM teste)

// executor de testes que já vem dentro do Node
const test = require('node:test');
// comparadores: conferem obtido x esperado
const assert = require('node:assert');
// traz a função que será testada
const { calcularFrete } = require('./frete');

// entrega curta (3 km): deve custar a taxa fixa de R$ 7
test('entrega de 3 km custa R$ 7', () => {
  // confere: o frete de 3 km tem de ser exatamente 7
  assert.strictEqual(calcularFrete(3), 7);
});

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

test('frete da minha entrega de 18 km custa R$ 20', () => {
// acima de 5 km: R$ 7 + (18 - 5) x R$ 1 = R$ 20
assert.strictEqual(calcularFrete(18), 20);
});
