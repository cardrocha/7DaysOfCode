const numero = Math.floor(Math.random() * 11);

let numeroDeTentativas = 2;

let acertou = false;

do {
  console.log(numero)
  const tentativa = prompt("Escolha um número, veja se acertou!")
  if (numero == tentativa) {
    alert(`Seu número escolhido foi ${tentativa}. Você acertou o número, parabéns!`)
    acertou = true
  } else {
    alert(`Seu número escolhido foi ${tentativa}. não foi dessa vez!`)
    alert(`${numeroDeTentativas === 0 ? `Acabou suas tentativas, game over!` : `Você tem mais ${numeroDeTentativas} tentativas.`}`)
  }
  numeroDeTentativas--;
}

while (numeroDeTentativas >= 0 && !acertou);

if (acertou) {
  alert("Jogue novamente! :)");
} else {
  alert(`Não foi dessa vez, tente novamente! O número era ${numero}.`);
}