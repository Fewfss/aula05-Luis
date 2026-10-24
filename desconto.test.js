// desconto.test.js = CÓDIGO DE TESTE (não vai para o cliente)

// executor de testes que já vem dentro do Node (nada a instalar)
const test = require('node:test');
// 'assert' = comparadores: conferem obtido x esperado
const assert = require('node:assert');
// traz a função que será testada
const { calcularDesconto } = require('./desconto');

// UM teste: o texto descreve o esperado, em linguagem humana
test('10% de desconto em 200 resulta em 180', () => {
  // PREPARAR + EXECUTAR: entrada conhecida (200 e 10%)
  const resultado = calcularDesconto(200, 10);
  // VERIFICAR: se resultado for diferente de 180, o teste FALHA
  assert.strictEqual(resultado, 180);
});

// SEGUNDO teste: agora o caminho do ERRO (percentual absurdo)
test('percentual acima de 100 lança erro', () => {
  // assert.throws passa SÓ SE a função dentro dele der erro
  // e a mensagem do erro combinar com /percentual inválido/
  assert.throws(
    // 150% não existe: a função DEVE lançar erro
    () => calcularDesconto(200, 150),
    // a mensagem esperada
    /percentual inválido/
  );
});
