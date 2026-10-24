// desconto.js = CÓDIGO DE PRODUÇÃO (o que o cliente usa)

// FUNÇÃO = bloco de código com nome: recebe valores e
// devolve um resultado. Aqui: o preço e o percentual
function calcularDesconto(preco, percentual) {
  // proteção: percentual negativo ou acima de 100 não existe
  if (percentual < 0 || percentual > 100) {
    // 'throw' interrompe a função e avisa que algo deu errado
    throw new Error('percentual inválido');
  }
  // preço final = preço - desconto (preço x percentual/100)
  return preco - preco * (percentual / 100);
}

// deixa a função visível para outros arquivos (os testes)
module.exports = { calcularDesconto };
