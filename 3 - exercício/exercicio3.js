const faturamentos = require("./dados.json");

const menorValor = faturamentos
  .filter(faturamento => faturamento.valor > 0)
  .reduce((valorMenor, valorAtual) => valorAtual.valor < valorMenor.valor ? valorAtual : valorMenor);

const maiorValor = faturamentos
  .filter(faturamento => faturamento.valor > 0)
  .reduce((valorMaior, valorAtual) => valorAtual.valor > valorMaior.valor ? valorAtual : valorMaior);

const faturamentosValidos = faturamentos.filter(f => f.valor > 0);

if (faturamentosValidos.length > 0) {
  const somaTotal = faturamentosValidos.reduce((soma, atual) => soma + atual.valor, 0);
  const media = somaTotal / faturamentosValidos.length;

  const acimaDaMedia = faturamentosValidos.filter(f => f.valor > media);

  console.log('Média de faturamento:', media.toFixed(2));
  console.table(acimaDaMedia);
} else {
  console.log('Nenhum dia de operação encontrado.');
}

console.log(`O menor valor faturado é ${menorValor.valor}`);
console.log(`O maior valor faturado é ${maiorValor.valor}`);



