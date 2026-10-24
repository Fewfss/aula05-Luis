# Aula 05 - Testes automatizados no pipeline (ISW032)

Repositório-modelo da prática da Aula 05 de Integração e Entrega Contínua
(Fatec Zona Leste - DSM).

Este repositório guarda um projeto pequeno de uma loja virtual (cálculo de desconto
e de frete), com testes automatizados e um robô do GitHub que roda esses testes a
cada alteração. Na aula, você vai quebrar o projeto de propósito, ler o que o robô
responde e escrever os testes que faltam.

## Como usar este modelo

Para criar o seu próprio repositório a partir deste modelo, use o botão verde
**Use this template** (Usar este modelo) e depois **Create a new repository**
(Criar um novo repositório). Em seguida, siga o Roteiro do Aluno impresso.

## O que cada arquivo faz e para que serve na aula

| Arquivo | O que faz | Para que serve na aula |
| --- | --- | --- |
| `README.md` | Apresenta o projeto e explica o papel de cada arquivo (este texto). | Serve de mapa: antes de mexer em qualquer coisa, você sabe o que cada arquivo faz. |
| `desconto.js` | Define a função `calcularDesconto(preco, percentual)`, que devolve o preço já com o desconto. Se o percentual for menor que 0 ou maior que 100, dá erro. | É o código de produção da história do Bruno e da Camila. Na Atividade 3 você troca o sinal da linha 12 (`return`) para repetir o erro do Bruno; na Atividade 4 você conserta. |
| `desconto.test.js` | Guarda os testes do desconto: 10% de 200 resulta em 180, e percentual acima de 100 lança erro. | Mostra como é um teste automatizado: prepara, executa e confere o resultado. Na Atividade 5 você acrescenta mais dois testes (0% e 100%). |
| `frete.js` | Define a função `calcularFrete(distanciaKm)`: R$ 7 até 5 km, mais R$ 1 por km que passar de 5 km, e erro se a distância for negativa. | É o código que começa com testes de menos. O relatório de cobertura (a porcentagem das linhas que os testes executam) mostra quais linhas dele ninguém testou. |
| `frete.test.js` | Guarda, por enquanto, um único teste do frete: 3 km custa R$ 7. | Deixa de propósito dois caminhos sem proteção. Na Atividade 5 você escreve os testes que faltam (10 km e distância negativa) e leva a cobertura a 100%. |
| `package.json` | Dá nome ao projeto e define dois comandos: `npm test` (roda os testes) e `npm run cobertura` (roda os testes e mostra a cobertura). | Liga o robô aos testes: o robô só precisa chamar `npm test`. Você não precisa editar este arquivo. |
| `.github/workflows/testes.yml` | É a receita do robô do GitHub (GitHub Actions): a cada push, baixa o código, roda `npm test` e depois mostra o relatório de cobertura. | Transforma os testes em uma barreira: se um teste falhar, o pipeline (a sequência automática de etapas) fica vermelho e para. Você não precisa editar este arquivo. |

## Os dois comandos

- `npm test`: roda todos os testes do projeto (os arquivos que terminam em `.test.js`).
- `npm run cobertura`: roda os testes e mostra a cobertura de código.

Na aula, o robô executa esses comandos por você. Não é preciso instalar nada.

## Onde ver o resultado

Abra a aba **Actions** (Ações) do seu repositório. Um ✓ verde significa que todos os
testes passaram; um ✗ vermelho significa que algum teste falhou. Dentro da execução,
o passo **Rodar os testes** mostra o log, com o motivo da falha.
