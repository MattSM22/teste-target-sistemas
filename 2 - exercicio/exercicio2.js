function QuadradoPerfeito(numero){
  const resultado = Math.floor(Math.sqrt(numero));
  return resultado * resultado === numero;
}

function Fibbonacci(valor = 5){
  const teste1 = 5 * valor * valor + 4;
  const teste2 = 5 * valor * valor - 4;

  if (QuadradoPerfeito(teste1) || QuadradoPerfeito(teste2)) {
    return `O número ${valor} faz parte da sequência de Fibbonacci`;
  } else {
    return `O número ${valor} não faz parte da sequência de Fibbonacci`;
  }
}

console.log(Fibbonacci());