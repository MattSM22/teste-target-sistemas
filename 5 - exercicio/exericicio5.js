function ReverteStrings(palavra){
  let palavraReserva = "";
  for (let i = palavra.length - 1; i >= 0; i--) {
    palavraReserva += palavra[i];
  }

  return palavraReserva;
}

console.log(ReverteStrings("Hello World"));