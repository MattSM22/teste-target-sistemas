const faturamentoMensal = [
  "R$67.863,43",
  "R$36.678,66",
  "R$29.229,88",
  "R$27.165,48",
  "R$19.849,53"
]

const valoresConcatenadosComOsEstados = {}; 

const valores = faturamentoMensal.map(faturamento => {
  let removeStrings = faturamento.replace(/[^\d,.-]/g, '');
  removeStrings = removeStrings.replace(/\./g, '').replace(',', '.');

  return parseFloat(removeStrings);
});

const somaTotal = valores.reduce((soma, atual) => soma + atual, 0);

const porcentagemDoValores = valores.map((valor) => { 
  const porcentagem = (valor / somaTotal) * 100;
   
  return porcentagem.toFixed(2) + "%"
});

const nomesDosEstados = ["SP", "RJ", "MG", "ES", "Outros"];

nomesDosEstados.forEach((nome, index) => {
  valoresConcatenadosComOsEstados[nome] = porcentagemDoValores[index];
})


console.table(valoresConcatenadosComOsEstados);